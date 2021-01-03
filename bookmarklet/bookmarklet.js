javascript: (function () {

    if (typeof window.ACRExtensions === 'undefined') {
        window.ACRExtensions = true;
        var _xhrSendProto = window.XMLHttpRequest.prototype.send;
        window.XMLHttpRequest.prototype.send = function() {
            var _this = this;
            try {
                var args = JSON.parse(arguments[0]);
                if (args.Operation == 'updateAnnotations') {
                    var sId = args.Input.annotations[0].start;
                    var eId = args.Input.annotations[0].end;
                    if (!window.confirm('Press OK to highlight or Cancel to copy the text.')) {
                        var txtDoc = null;
                        $('iframe', $('iframe#KindleReaderIFrame', window.document).contents()).each(function (i, textIframe) {
                            var textIFrameDoc = $(textIframe).contents().get(0);
                            if ($('#'+sId, textIFrameDoc).get(0) && $('#'+eId, textIFrameDoc).get(0)) {
                                txtDoc = textIFrameDoc;
                                
                                return false;
                            }
                        });
        
                        if (txtDoc) {
                            console.log(txtDoc);
                            r = txtDoc.createRange();
                            r.setStartBefore($('#'+sId, txtDoc).get(0));
                            r.setEndAfter($('#'+eId, txtDoc).get(0));
                            var newW = window.open('', 'ACRExtensions', "height=400,width=400,location=0,menubar=0,scrollbars=1,toolbar=0");
                            newW.document.body.appendChild(r.cloneContents());
                        }
                        
                        return _xhrSendProto.apply(_this, []);
                    }
                }
            } catch (e) {};
            
            return _xhrSendProto.apply(_this, arguments);
        }
    }

})();

