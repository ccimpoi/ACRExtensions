# ACRExtensions

Amazon Cloud Reader extensions

## Browser Bookmarklet

This bookmarklet enables you to copy the text you select in the Amazon Cloud Reader browser app to the clipboard.

It will make an extra Copy button in addition to Highlight and Note that will prompt the selected text so the user can easily copy it.

In your browser do an "Add bookmark" action on the Bookmarks Bar and enter "ACRExtensions" for the name and the code below for the url:

    javascript:(function(){var a=null;var c=null;if(typeof window.KindleReaderContextMenu!=="undefined"){a=window}else{if(window.length){for(var d=0;d<window.length;d++){if(typeof window[d].KindleReaderContextMenu!=="undefined"){a=window[d];break}}}}if(typeof a==="object"){var b=a.KindleReaderContextMenu;if(typeof b.ACRExtensions==="undefined"){b.ACRExtensions=true;var e=b.show;b.show=function(){var i=e.apply(b,arguments);if(typeof(arguments[3])!=="undefined"&&typeof(arguments[3]["start"])!=="undefined"){var g=arguments[3].start;var h=arguments[3].end;var m={};c=$("iframe",document).first().contents();$("iframe",c).each(function(p,o){for(var n=g;n<=h;n++){$("#"+n,$(o).contents()).each(function(q,r){m[n]=$(r).text()})}});var k="";for(var j in m){k+=" "+m[j]}}$("#ACRExtensions_copyB_sep",c).remove();$("#ACRExtensions_copyB",c).remove();var f=$('<div id="ACRExtensions_copyB_sep" class="kindle_menu_separator"></div>');var l=$('<div id="ACRExtensions_copyB" class="kindle_menu_button button_enabled ui-corner-left">Copy</div>');$("#kindle_menu_border",c).append(f).append(l);$("#ACRExtensions_copyB",c).click(function(n){a.prompt("Selection:",k)});return i};alert("ACRExtensions is now active.")}else{alert("ACRExtensions is already active.")}}else{alert("Error: ACRExtensions is not active. Te Amazon Cloud Reader window could not be found.")}})()

Once you have the bookmarklet set up you just need to click on it once right after the Amazon Cloud Read app is loaded.

Source available in the bookmarklet folder.

Tested on Chrome and FF on OSX and Ubuntu.
