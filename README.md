# ACRExtensions

Amazon Cloud Reader extensions

## Copy Bookmarklet

It will make an extra Copy button in addition to Highlight and Note that will prompt the selected text so the user can easily copy it.

In your browser do an "Add bookmark" action on the Bookmarks Bar and enter "ACRExtensions Copy" for the name and the code below for the url:

    javascript:(function(){var a=null;var c=null;if(typeof window.KindleReaderContextMenu!==&quot;undefined&quot;){a=window}else{if(window.length){for(var d=0;d<window.length;d++){if(typeof window[d].KindleReaderContextMenu!==&quot;undefined&quot;){a=window[d];break}}}}if(typeof a===&quot;object&quot;){var b=a.KindleReaderContextMenu;if(typeof b.ACRExtensions===&quot;undefined&quot;){b.ACRExtensions=true;var e=b.show;b.show=function(){var i=e.apply(b,arguments);if(typeof(arguments[3])!==&quot;undefined&quot;&&typeof(arguments[3][&quot;start&quot;])!==&quot;undefined&quot;){var g=arguments[3].start;var h=arguments[3].end;var m={};c=$(&quot;iframe&quot;,document).first().contents();$(&quot;iframe&quot;,c).each(function(p,o){for(var n=g;n<=h;n++){$(&quot;#&quot;+n,$(o).contents()).each(function(q,r){m[n]=$(r).text()})}});var k=&quot;&quot;;for(var j in m){k+=&quot; &quot;+m[j]}}$(&quot;#ACRExtensions_copyB_sep&quot;,c).remove();$(&quot;#ACRExtensions_copyB&quot;,c).remove();var f=$('<div id=&quot;ACRExtensions_copyB_sep&quot; class=&quot;kindle_menu_separator&quot;></div>');var l=$('<div id=&quot;ACRExtensions_copyB&quot; class=&quot;kindle_menu_button button_enabled ui-corner-left&quot;>Copy</div>');$(&quot;#kindle_menu_border&quot;,c).append(f).append(l);$(&quot;#ACRExtensions_copyB&quot;,c).click(function(n){a.prompt(&quot;Selection:&quot;,k)});return i};alert(&quot;ACRExtensions Copy is now active.&quot;)}else{alert(&quot;ACRExtensions Copy is already active.&quot;)}}else{alert(&quot;Error: ACRExtensions Copy is not active. Te Amazon Cloud Reader window could not be found.&quot;)}})();
