/**
 * SymbolCleanup
 * @description Remove FillColor from SVG Symbols
 */

import meow from '../../config.json';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

function buildSymbolCleanupTask() {
  return gulp
    .src([meow.dist.cssimg + meow.src.images.vectorSprite.symbolName], {
      base: './',
    })
    .pipe(
      $.cheerio({
        run: function($) {
          $('[fill^="#"]').removeAttr('fill');
          $('[fill^="none"]').removeAttr('fill');
          $('[fill-rule]').removeAttr('fill-rule');
        },
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(gulp.dest('./'));
}

export default buildSymbolCleanupTask;
