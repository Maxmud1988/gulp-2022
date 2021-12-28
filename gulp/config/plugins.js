import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Обработки ошибок
import notify from "gulp-notify"; // Сообщения (Подсказки)
import browsersync from "browser-sync"; // Локалный сервер
import newer from "gulp-newer"; // Локалный сервер
import ifPlugin from "gulp-if"; //условия витвеление

// Экспортируем обьект
export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer,
	if: ifPlugin

}
