# ACRExtensions

Amazon Cloud Reader extensions

## Browser Bookmarklet

The Amazon Cloud Reader does not allow the user to copy text. And in the words of the Big Lebowski, _"this aggression will not stand, man!"_.

This bookmarklet enables you easily copy the text you select in the Amazon Cloud Reader browser app to the clipboard.

Once activated, the bookmarklet will create an extra Copy button in addition to Highlight and Note that will open the selected text in a popup window so the user can easily copy it and also keep the basic HTML formatting.

Once activated, the bookmarklet will override the Highlight function and add a prompt where the user can choose to continue with the highlighting action or copy the text in a new popup window and keep the basic HTML formatting.

Please note that altough the text remains highlighted after copying, the highlight is not actually saved to the server and is only a local cache.

In your browser do an "Add bookmark" action on the Bookmarks Bar and enter "ACRExtensions" for the name and copy and paste the bookmarklet code from the [raw source](https://raw.github.com/binarycrafts/ACRExtensions/master/bookmarklet/bookmarklet.js).

Once you have the bookmarklet set up you just need to click on it once right after the Amazon Cloud Read app is loaded.

Source available in the bookmarklet folder.

Tested in Chrome and FF on OSX. The bookmarklet uses document ranges so it may not work in all browsers especially IE.
