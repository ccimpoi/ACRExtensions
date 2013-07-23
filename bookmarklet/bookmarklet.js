(function () {
var w = null;
var kDoc = null;
if (typeof window.KindleReaderContextMenu !== 'undefined') {
    w = window;
} else if (window.length) {
    for (var i=0;i<window.length;i++) {
        if (typeof window[i].KindleReaderContextMenu !== 'undefined') {
            w = window[i];
            break;
        }
    }
}
if (typeof w === 'object') {
    var kObj = w.KindleReaderContextMenu;
    if (typeof kObj.ACRExtensions === 'undefined') {
        kObj.ACRExtensions = true;
        var oldMethod = kObj.show;
        kObj.show = function () {
        var res = oldMethod.apply(kObj, arguments);
        
            if (typeof (arguments[3]) !== 'undefined' && typeof (arguments[3]['start']) !== 'undefined') {
                var sId = arguments[3].start;
                var eId = arguments[3].end;
                var outArr = {};
                kDoc = $('iframe', document).first().contents();
                $('iframe', kDoc).each(function (j, textIframe) {
                    for (var elId=sId;elId<=eId;elId++) {
                        $('#'+elId, $(textIframe).contents()).each(function (k, textSpan) {
                            outArr[elId] = $(textSpan).text();
                        });
                    }
                });
                
                var outStr = '';
                for (var p in outArr) outStr += ' ' + outArr[p];
            }    
            
            $('#ACRExtensions_copyB_sep', kDoc).remove();
            $('#ACRExtensions_copyB', kDoc).remove();
            var sepEl = $('<div id="ACRExtensions_copyB_sep" class="kindle_menu_separator"></div>');
            var copyB = $('<div id="ACRExtensions_copyB" class="kindle_menu_button button_enabled ui-corner-left">Copy</div>');
            $('#kindle_menu_border', kDoc).append(sepEl).append(copyB);
            $('#ACRExtensions_copyB', kDoc).click(function (evt) {
                w.prompt('Selection:', outStr);
            });
            
            return res;
        };
        
        alert('ACRExtensions Copy is now active.');
    } else {
        alert('ACRExtensions Copy is already active.');
    }
} else {
    alert('Error: ACRExtensions Copy is not active. Te Amazon Cloud Reader window could not be found.');
}
})();

