import gulp from 'gulp';
import gulpShell from 'gulp-shell';

// مهمة بناء وتشغيل Parcel
gulp.task('default', gulpShell.task('parcel ./starter/index.html --open'));

// مهمة لتشغيل الاختبارات
gulp.task('test', gulpShell.task('npm run test'));
