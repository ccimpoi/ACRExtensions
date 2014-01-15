# ACRExtensions

Amazon Cloud Reader extensions

## Browser Bookmarklet

The Amazon Cloud Reader does not allow the user to copy text. And in the words of the Big Lebowsky, _"this aggression will not stand, man!"_.

This bookmarklet enables you easily copy the text you select in the Amazon Cloud Reader browser app to the clipboard.

Once activated, the bookmarklet will create an extra Copy button in addition to Highlight and Note that will open the selected text in a popup window so the user can easily copy it and also keep the basic HTML formatting.

In your browser do an "Add bookmark" action on the Bookmarks Bar and enter "ACRExtensions" for the name and copy and paste the bookmarklet code from the [raw source](https://raw.github.com/binarycrafts/ACRExtensions/master/bookmarklet/bookmarklet.js).

Once you have the bookmarklet set up you just need to click on it once right after the Amazon Cloud Read app is loaded.

Important note regarding the issue of the Copy button not showing up. This is pretty hard to reproduce but it still happens some times. The fix is to reload the browser page and click again on the bookmarklet button. It always works for me.

Source available in the bookmarklet folder.

Tested in Chrome and FF on Ubuntu and OSX. The bookmarklet uses document ranges so it may not work in all browsers especially IE.

