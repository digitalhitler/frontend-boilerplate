# Фронтэнд бойлерплэйт

__Эдакий очередной никому не нужный шаблон пустого веб-приложения для браузерной среды.__

## Алярма

В коде нет комментариев, от слова "совсем". Будучи автором этого только мне понятного велосипеда, прошу случайно забрёдшего сюда человека закрыть вкладку и не пытаться чего-то добиться от этого репозитория: я бы с радостью сделал его приватным, но у Гитхаба частные репы платные, так что...


## Что и как

В составе: 

### Команды

Сборка для продакшна `NODE_ENV=production webpack` в корне репозитория.

Сборка для разработки и watch-демон: `webpack`

### Структура

#### Сначала

Все исходники любого рода аккуратно завёрнуты в папку `src`:

* `src/app/index.js` - точка входа в JS-приложение.
* `src/vendor/index.js` - пункт сборки зависимостей.
* `src/sass/style.scss` - точка входа в SCSS-проект со стилями.

#### А потом

* Результаты трансляции из всех этих псевдоязыков в итоге собираюся в `assets`. На выходе получается три JS-файла: `app.js`, `vendor.js`, `common.js`. Зачем нужен третий - я пока еще не выяснил.
* Все стили, которые резолвились и компилировались SASS-ом попадают в файл `app.css`
* На случай ядерной войны или всеобщего отупения, вместе со всем этим в той же папке `assets` появляется файл `assets.json`, который угадайте что содержит.


## Туду

* Понять зачем нужен `common.js`

## Чэйнджлог
### 1.0.4

* Вот то что вы сейчас видите.
* Где изменения версий 1.0.3, 1.0.2, 1.0.1 и 1.0.0? В пизде, я тупо их не записывал.
* ОЧЕНЬ МНОГОЕ изменилось.