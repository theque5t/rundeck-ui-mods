//min common
/**
 * setup basics for knockout, then call callback after async loading of i18n messages
 * @param pluginName
 * @param callback
 */
function demo_init_plugin(pluginName, callback) {
    _plugins.push(function () {
        //rdpro_setup_ko_extenders();
        demo_load_messages_async(pluginName, url_path(rundeckPage.pluginBasei18nUrl(pluginName)), "i18n/messages.properties")
            .then(callback, callback);
    });
}

function demo_load_messages_async(pluginName, plugini18nBase, path) {
    return jQuery.ajax({
        url: plugini18nBase + '/' + path + '?format=json',
        success: function (data) {
            if (typeof(window.Messages) != 'object') {
                window.Messages = {};
            }
            jQuery.extend(window.Messages, data);
        }
    });
}

function url_path(baseUrl) {
    if (baseUrl.indexOf('/') == 0) {
        return baseUrl;
    }
    if (baseUrl.toLowerCase().indexOf('http') == 0) {
        var len = baseUrl.indexOf('://');
        if (len > 0) {
            var absurl = baseUrl.substring(len + 3);
            if (absurl.indexOf('/') >= 0) {
                absurl = absurl.substring(absurl.indexOf('/'));
                return absurl;
            } else {
                return '';
            }
        }
    }
}
var _plugins = [];

jQuery(document).on('load.rundeck.page', function () {
       for (var i = _plugins.length - 1; i >= 0; i--) {
           _plugins[i]();
       }
    });
