'use strict';

const fs = require('fs-extra');
const { join, resolve, dirname } = require('path');
const { spawn, execSync } = require('child_process');
const del = require('del');
const gulp = require('gulp');
const es = require('event-stream');
const program = require('commander');

gulp.task('publish', function (done) {
    program
        .option('--dest <path>', 'Copy generated document to specified path.')
        .parse(process.argv);
    var dest = program.dest;
    if (!dest) {
        return done('dest not supplied');
    }

    var del = join(dest, '*');
    console.log('deleting ' + del);
    del.sync(del, { force: true });

    console.log('copying _book/**/* to ' + dest);
    gulp.src('_book/**/*', {
            base: '_book'
        })
        .pipe(gulp.dest(dest))
        .on('end', done);
});


gulp.task('cp-apisrc', function () {
    program
        .option('--engine <path to engine>')
        .parse(process.argv);

    var engine = program.engine;

    del.sync('lib/temp-src/engine/*');

    fs.copySync(join(engine, 'docs'), 'lib/temp-src/engine/docs');

    const DefaultModuleHeader =
        '/**\n' +
        ' * @module cc\n' +
        ' */\n';
    const LinkTagRE = /({\s*@link\s+)\/*(.+})/g;

    var apisrc = fs.readJsonSync(join(engine, 'docs', 'apisrc.json'));
    return gulp.src(apisrc, {
            cwd: engine,
            base: engine,
            nodir: true
        })
        .pipe(es.through(function (file) {
            var content = file.contents.toString();

            // rebase example link to temp-src/engine/docs
            content = content.replace(LinkTagRE, (m, p1, p2) => p1 + 'temp-src/engine/docs/' + p2);

            // set defualt module as cc
            content = DefaultModuleHeader + content;

            file.contents = new Buffer(content);
            this.emit('data', file);
        }))
        .pipe(gulp.dest('lib/temp-src/engine'));
});

gulp.task('build-md', ['cp-apisrc'], function (cb) {

    // del old files

    program
        .option('--lang <language>')
        .parse(process.argv);

    var dest = resolve(program.lang);

    del.sync(join(dest, 'assets'), { force: true });
    del.sync(join(dest, 'classes'), { force: true });
    del.sync(join(dest, 'enums'), { force: true });
    del.sync(join(dest, 'modules'), { force: true });

    // generate md

    var commitId = execSync('git log --format="%H" -n 1', {
        cwd: program.engine
    }).toString().trim().replace(/"/g, '');
    var args = [
        '../node_modules/firedoc/bin/firedoc.js',
        'build',
        resolve('lib/temp-src'),
        '-M',
        '--theme',
        resolve('lib/firedoc-theme/markdown'),
        '-L',
        program.lang,
        '-D',
        dest,
        '-C',
        commitId
    ];
    // console.log('running node with args', args);
    var child = spawn('node', args, {
        stdio: 'inherit',
        cwd: 'lib'
    });
    child.on('exit', function (err) {
        if (err) {
            return cb(err);
        }

        // attach editor api

        var indexPath = join(dest, 'index.md');
        var editorIndexPath = 'editor-index.md';
        var content = fs.readFileSync(indexPath, 'utf8') + '\n' + fs.readFileSync(editorIndexPath, 'utf8');
        fs.writeFileSync(indexPath, content, 'utf8');
    });
});

gulp.task('build-tsd', ['cp-apisrc'], function (cb) {

    const TSD_FOOTER =
`declare let jsb: any;
/** Running in the editor. */
declare let CC_EDITOR: boolean;
/** Preview in browser or simulator. */
declare let CC_PREVIEW: boolean;
/** Running in the editor or preview. */
declare let CC_DEV: boolean;
/** Running in the editor or preview, or build in debug mode. */
declare let CC_DEBUG: boolean;
/** Running in published project. */
declare let CC_BUILD: boolean;
/** Running in native platform (mobile app, desktop app, or simulator). */
declare let CC_JSB: boolean;
/** Running in the engine's unit test. */
declare let CC_TEST: boolean;
/** Running in the Wechat's mini game. */
declare let CC_WECHATGAME: boolean;
/** Running in the bricks. */
declare let CC_QQPLAY: boolean;
`;

    program
        .option('--engine <path to engine>')
        .option('--dest <tsd path>')
        .parse(process.argv);

    let { engine, dest } = program;

    let tsdGen = require('./lib/tsd-generator');
    let cwd = process.cwd();
    process.chdir('lib');
    tsdGen.generateTsd('temp-src/engine', function (err, output) {
        process.chdir(cwd);
        if (err) {
            console.log(err.stack || err);
        }
        else {
            // add dragonBones.d.ts
            output += fs.readFileSync(join(engine, 'extensions/dragonbones/lib/dragonBones.d.ts')) + '\n';
            output += TSD_FOOTER;

            fs.ensureDirSync(dirname(dest));
            fs.writeFileSync(dest, output, 'utf8');
            console.log('Generate tsd file complete, dest path: ' + dest);
        }
        cb();
    });
});
