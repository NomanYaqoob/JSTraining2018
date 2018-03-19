
var form;
var lineBreakElement = document.createElement('br');

function generateform() {
    form = document.createElement('form');
    form.setAttribute('method', 'get');
    form.setAttribute('action', '#');
}

function generateInputs() {
    var formElements = ['input', 'input'];
    var formAttributes = [
        ['type', 'value'],
        ['type', 'value']
    ]
    var attributeValues = [
        ['text', 'Noman'],
        ['email', 'noman.yaqoob@tenpearls.com']
    ];

   
    for (var i = 0; i < formElements.length; i++) {
        var elem = document.createElement(formElements[i]);
        for (var j = 0; j < formAttributes[i].length; j++) {
            elem.setAttribute(formAttributes[i][j], attributeValues[i][j]);
        }
        form.appendChild(elem);
        form.appendChild(lineBreakElement.cloneNode());
    }
}

generateform();
generateInputs();
document.body.appendChild(form);