
# Loopback i18n middleware

[![Travis-CI][travis-badge]][travis-url]

This is a simple middleware using [mashpie/i18n](https://github.com/mashpie/i18n-node) package. By default is set to accept *en* locale and use the folder *common/i18n*.

Author: Roger Fos Soler (desaroger23@gmail.com)

## Usage

First, install the library:

```bash
$ npm i --save loopback-i18n
```

Add the middleware to your *middleware.json*:

```json
{
	"initial": {
		"loopback-i18n#i18n": {}
	}
}
```

Or you can use it throw code:

```js
let loopbackI18n = require('loopback-i18n');
app.middleware('initial', loopbackI18n());
```

## Options

The options are passed directly to the mashpie package. You can see all available options [here](https://github.com/mashpie/i18n-node#list-of-all-configuration-options). We define this default options object:

```json
{
	"directory": "common/i18n",
	"locales": ["en"]
}
```

[travis-badge]: https://travis-ci.org/desaroger/loopback-i18nsvg
[travis-url]: https://travis-ci.org/desaroger/loopback-i18n