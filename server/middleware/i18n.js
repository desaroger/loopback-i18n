'use strict';

/**
 * Created by desaroger on 14/01/17.
 */

var root = require('app-root-path');
var i18n = require('i18n');

function i18nMiddlewareFactory() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    console.log('root directory', root);
    options = Object.assign({
        directory: '/common/i18n',
        locales: ['en']
    }, options);

    i18n.configure(options);

    return i18n.init;
}

module.exports = i18nMiddlewareFactory;