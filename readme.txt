///////////////////
Инициализация проекта 
----------------
npm i -y
npm i -D webpack webpack-cli --save-dev
создается файл webpack.config.js
_____________________________________

точка входа
----------------
(webpack.config.js) => entry
_____________________________________

точка выхода. путь до файла динамический (в данном случае по содержимому файла) 
создан по шаблонам, избегает кеширования данных в браузере у пользователя
----------------
(webpack.config.js) => output
_____________________________________

передача в конфиг переменных окружения
----------------
(package.json) => "scripts"
(webpack.config.js) - принимается env
(webpack.config.js) => mode
_____________________________________

Передача в html js-кода. плагин HtmlWebpackPlugin. 
Дописывает в html файл ссылку на js.
----------------
(webpack.config.js) => plugins => HtmlWebpackPlugin
_____________________________________

ProgressPlugin - показывает, насколько прошла сборка в процентах.
медленный. на больших проектах может очень сильно замедлять сборку
использовать только если он действительно нужен
----------------
(webpack.config.js) => plugins => HtmlWebpackPlugin
_____________________________________
автоматизированная сборка проекта при разработке. 
вариант 1. webpack-dev-server 
----------------
npm i -D webpack-dev-server
(package.json) => scripts  => start
(webpack.config.js) => devServer
(webpack.config.js) => devtool
_____________________________________
_____________________________________
СТИЛИ
_____________________________________
обработка css файлов. css-loader и style-loader
----------------
npm i -D css-loader 
npm i -D style-loader
(webpack.config.js) => module => rules => style-loader,"css-loader",
импорт файла css в js
_____________________________________
обработка scss файлов. npm install sass-loader sass webpack --save-dev
----------------
npm i -D sass-loader sass
(webpack.config.js) => module => rules => style-loader,"css-loader","sass-loader",
_____________________________________
Обработка css файлов при build. 
Вставляетс ссылку на css файл в html. MiniCssExtractPlugin
----------------
npm i -D mini-css-extract-plugin
(webpack.config.js) => plugins => MiniCssExtractPlugin
(webpack.config.js) => module => rules =>  MiniCssExtractPlugin
_____________________________________

----------------
_____________________________________
распределение файла webpack.config.js на разные файлы
----------------
npm i webpack-merge
_____________________________________

----------------
_____________________________________