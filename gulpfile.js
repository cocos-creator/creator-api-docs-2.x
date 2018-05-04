'use strict';

const fs = require('fs-extra');
const { join, resolve } = require('path');
const { spawn } = require('child_process');
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
        dest
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
