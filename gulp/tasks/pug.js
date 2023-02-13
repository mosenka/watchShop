import pug from "gulp-pug";
import versionNumber from "gulp-version-number";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import pugbem from "gulp-pugbem";

export const pugHTML = () => {
	return app.gulp.src(app.path.src.pug)
		.pipe(app.plugins.plumber(
				app.plugins.notify.onError({
					title: "PUG",
					message: "Error: <%= error.message %>"
				})
			)
		)
		.pipe(pug({
			plugins: [pugbem]
		}))
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpHtmlNosvg()
			)
		)
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream())
}
