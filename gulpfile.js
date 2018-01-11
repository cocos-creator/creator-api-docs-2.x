'use strict';

// const Fs = require('fire-fs');
const Path = require('path');
const Del = require('del');
// const spawn = require('child_process').spawn;
// const gulpSequence = require('gulp-sequence');

const gulp = require('gulp');
const program = require('commander');

gulp.task('publish', function (done) {
    program
        .option('--dest <path>', 'Copy generated document to specified path.')
        .parse(process.argv);
    var dest = program.dest;
    if (!dest) {
        return done('dest not supplied');
    }

    var del = Path.join(dest, '*');
    console.log('deleting ' + del);
    Del.sync(del, { force: true });

    console.log('copying _book/**/* to ' + dest);
    gulp.src('_book/**/*', {
            base: '_book'
        })
        .pipe(gulp.dest(dest))
        .on('end', done);
});
