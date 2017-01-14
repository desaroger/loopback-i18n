/**
 * Created by desaroger on 14/01/17.
 */

let i18n = require('i18n');

function i18nMiddlewareFactory(options = {}) {

    options = Object.assign({
        directory: 'common/i18n',
        locales: ['en']
    }, options);

    i18n.configure(options);

    return i18n.init;
}

module.exports = i18nMiddlewareFactory;