# Сборка

> 19 октября 2022 — лекция 2

## Editorconfig

Универсальный конфиг для IDE чтобы обеспечить соответствие кода единому стилю.

## NPM

`npm init` — инициализация NPM
`npx install-peerdeps --dev eslint-config-airbnb` — форматирование согласно стилю Airbnb

## Modules

2 системы модулей:

- CommonJS — основная для NodeJS
- ECMAScript — стандарт для браузеров

## Webpack

### Webpack Configuration

```JS
import * as path from 'path';
import * as webpack from 'webpack';

const config = {
    entry: './src/index.ts',
    output: {
    path: path.resolve(__dirname, 'dist'),
    },
    …
};

export default config;
```

### Webpack Runtime

```TS
// index.ts
import {text} from './module1';
console.log(text());
// module1.ts
export const text = () => {
    return 'Hello word';
};
```

### Webpack Prod

```TS
// dist/main.js
(() => {"use strict"; console.log("Hello word")})();
```

### Mode && Target

```JS
import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
    target: ‘web’,
    ...
};
export default config;
```

### Loaders

Интерфейс для препроцессинга файлов

- знает о текущем состоянии
- выполняет трансформацию
- есть отдельная опция в конфиге `loaderContext`

### Plugins

Интерфейс для точечной настройки различных этапов сборки

### много всего непонятного

Как-то надо объединять конфиг

### Overriding

Так как конфиг — объект JS, его параметры можно перезаписывать

### Webpack Blocks

Упрощает чтение кода

### Сборка как продукт

`webpack --json` — информация о сборке

Statoscope — более удобный просмотр.

### Дубликаты библиотек

Дубликаты появляются, если нет `package.json`

## Client optimization

### HTTP1.1 + 3G

### Оптимизация размера

```JS
optimization: {
    minimize: true,
    moduleIds: 'deterministic',
    innerGraph: true,
    concatenateModules: true,
}
```

### Treeshaking

Позволяет не производить импорт неиспользуемого кода.

### Runtime Chunk

```JS
runtimeChunk: {
    name: 'runtime',
}
```

### Chunk Group

```JS
optimization: {
    concatenateModules: true,
    splitChunks: {
        minChunks: 2,
        chunks: 'all',
        minSize: 0,
    },
},
```

### Cache Policy

```JS
splitChunks: {
    chunks: 'all',
    minSize: 0,
    cacheGroups: {
    vendor: {
        test: /[\\/]node_modules[\\/]/,
        },
    },
 },
```

## Инфраструктура — Автоматизация и CI

### CLI

`wc` — подсчет слов

`$?`— код завершения последнего процесса

#### Примеры

Количество строк в директории:

```bash
ls -1 | wc -l
```

Переименовать все файлы .json в .jpg:

```bash
ls -1 | grep .json | awk -F . '{ print $1"."$2" "$1".jpg" }' | xargs -L 1 mv
```

### Shell-скрипты

...

## Continuous Integration (CI)
