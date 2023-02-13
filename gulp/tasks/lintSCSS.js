import postcss from 'gulp-postcss';
import postcssScss from 'gulp-postcss';
import stylelint from 'stylelint';
import reporter from "postcss-reporter/lib/reporter.js";


export const lintSCSS = () => {
	return app.gulp.src(app.path.src.scss)
		.pipe(app.plugins.plumber(
				app.plugins.notify.onError({
					title: "SCSS lint",
					message: "Error: <%= error.message %>"
				})
			)
		)
		.pipe( postcss([
			stylelint(),
			reporter({
				clearReportedMessages: true,
				throwError: true
			})
		]))
}
