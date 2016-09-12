javascript: (function () {

var w = null;
var kDoc = null;
var kObj = null;

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
    kObj = w.KindleReaderContextMenu;
    kDoc = w.document;

    if (typeof kObj.ACRExtensions === 'undefined') {
        kObj.ACRExtensions = true;
        var oldMethod = kObj.show;
        kObj.show = function () {
            var res = oldMethod.apply(kObj, arguments);
            var txtDoc = null;
            var r = null;

            if (typeof (arguments[3]) !== 'undefined' && typeof (arguments[3]['start']) !== 'undefined') {
                var sId = arguments[3]['start'];
                var eId = arguments[3]['end'];

                $('iframe', kDoc).each(function (j, textIframe) {
                    var textIFrameDoc = $(textIframe).contents().get(0);
                    if ($('#'+sId, textIFrameDoc).get(0)) {
                        txtDoc = textIFrameDoc;
                        return false;
                    }
                });

                if (txtDoc) {
                    r = txtDoc.createRange();
                    r.setStartBefore($('#'+sId, txtDoc).get(0));
                    r.setEndAfter($('#'+eId, txtDoc).get(0));
                }
            }

            $('#ACRExtensions_copyB_sep', kDoc).remove();
            $('#ACRExtensions_copyB', kDoc).remove();
            var sepEl = $('<div id="ACRExtensions_copyB_sep" class="kindle_menu_separator"></div>');
            var copyB = $('<div id="ACRExtensions_copyB" class="kindle_menu_button button_enabled ui-corner-left">Copy</div>');
            $('#kindle_menu_border', kDoc).append(sepEl).append(copyB);
            setTimeout(function(){
                sepEl.show();
                copyB.removeClass('button_hidden');
            }, 1);
            $('#ACRExtensions_copyB', kDoc).click(function (evt) {
                if (r) {
                    copyToClipboard(r.cloneContents().textContent);
                    $('.ui-widget-content', kDoc).hide();
                    $('#annotation-section', txtDoc).remove();
                }
            });

            var copyToClipboard = function(textToCopy){
                $("body")
                    .append($('<input type="text" display="none" name="fname" class="textToCopyInput"/>' )
                    .val(textToCopy))
                    .find(".textToCopyInput")
                    .select();
                  try {
                    var successful = document.execCommand('copy');
                  } catch (err) {
                    window.prompt("To copy the text to clipboard: Ctrl+C, Enter", textToCopy);
                  }
                 $(".textToCopyInput").remove();
            };

            return res;
        };

        alert('ACRExtensions is now active.');
    } else {
        alert('ACRExtensions is already active.');
    }
} else {
    alert('Error: ACRExtensions is not active. Te Amazon Cloud Reader window could not be found.');
}
})();

