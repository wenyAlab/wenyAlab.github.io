class Dialog {
    constructor() {
        this._element = null;
        this._banner = null;
        this._className = 'dialog-box';
    }
    setHeader(header) {
        this._header = header;

    }
    setBody(body) {
        this._body = body;
    }
    setConfirmBtn(confirmBtn) {
        this._confirmBtn = confirmBtn;
    }
    setTipsLink(tipsLink){
        this._tipsLink = tipsLink;
    }
    setClassName(className){
        this._className = this._className + ' ' + className;
    }
   
    
    show() {
        var closeBtn = document.createElement('button');
        closeBtn.className = 'close-btn';

        this._element = document.createElement('div');
        this._element.appendChild(closeBtn);
        this._element.appendChild(this._header.getElement());
        this._element.appendChild(this._body.getElement());

        this._element.appendChild(this._confirmBtn.getElement());
        this._element.appendChild(this._tipsLink.getElement());

        this._element.className = this._className;

        document.body.appendChild(this._element);

    }
    hide() {
        this._element = null;
    }
    
    

}

class DialogHeader {
    constructor(content) {
        this._content = content;
    }
    getElement() {
        var element = document.createElement('div');
        var title = document.createTextNode(this._content);
        element.className = 'dialog-header';
        element.appendChild(title);
        return element;
    }

}

class DialogBody {
    constructor() {
        this._params = [];

    }

    addParams(params) {
        this._params.push(params);
    }

    getElement() {
        var element = document.createElement('div');
        element.className = 'dialog-body';
        for (var i in this._params) {
            var a = this._params[i];
            
            element.appendChild(a.getElement());
        }
        return element;

    }

}

class DialogBodyParams {
    constructor(label, type,errorText) {
        this._label = label;
        this._type = type;
        this._message = errorText;
    }
    getElement() {
        var element = document.createElement('div');
        var labelElement = document.createElement('label');
        var inputElement = document.createElement('input');
        var errorBox = document.createElement('div');
        var errorMessage = document.createElement('div');
        var errorIcon = document.createElement('i');
        labelElement.innerHTML = this._label;
        labelElement.className = 'js-label';

        inputElement.type = this._type;
        inputElement.className = 'js-input';

        errorMessage.className = 'error-message';
        errorIcon.className = 'error-icon';
        errorBox.className = 'error-box';

        element.className = 'dialog-body-params';
        errorMessage.innerHTML = this._message;
        
        errorBox.appendChild(errorMessage);
        errorBox.appendChild(errorIcon);

        element.appendChild(labelElement);
        element.appendChild(inputElement);
        element.appendChild(errorBox);

        return element;
    }

}

class DialogAnotherBodyElement {
    constructor(content) {
        this._content = content;
    }
    getElement() {
        var element = document.createElement('div');
        var inputElement = document.createElement('input');
        var spanElement = document.createElement('span');

        inputElement.type = 'radio';
        spanElement.innerHTML = this._content;
        element.className = 'dialog-another-body-element';
        element.appendChild(inputElement);
        element.appendChild(spanElement);
        return element;
    }
}

class DialogConfirmBtn {
    constructor(content) {
        this._content = content;
    }
    getElement() {
        var element = document.createElement('div');
        var button = document.createElement('button');
        button.innerHTML = this._content;
        button.className = 'confirm-btn';
        element.className = 'dialog-confirm-btn';
        element.appendChild(button);
        return element;
    }
}

class DialogTipsLink{
    constructor(content){
        this._content = content;
    }

    getElement(){
        var element = document.createElement('div');
        var tipsLink= document.createElement('span');

        tipsLink.className = 'tips-link';
        tipsLink.innerHTML = this._content;
        element.className = 'dialog-tips-box';
        element.appendChild(tipsLink);
        return element;
    }
}

class ConfirmWay{
    constructor(){

    }
    getElement(){
        var element = document.createElement('div');
        var mobileConfirm = document.createElement('div');
        var emailConfirm = document.createElement('div');
        mobileConfirm.innerHTML = '手机验证';
        emailConfirm.innerHTML = '邮箱验证';
        mobileConfirm.className = 'mobile-confirm';
        emailConfirm.className = 'email-confirm';

        element.className = 'confirm-way';
        element.appendChild(mobileConfirm);
        element.appendChild(emailConfirm);

        return element;
    }
}


