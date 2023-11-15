var navBlock = document.getElementById('nav');
var rightBlock = document.getElementById('right_down');
navBlock.outerHTML = '<div id="right_down"><p>Тут може бути ваша реклама</p></div>';
rightBlock.outerHTML = '<nav id="nav"><p>\tМеню    Відгуки    Контакти </p>  </nav>';




function getSquare(){
    var block = document.getElementById('main');
    return (block.offsetHeight*block.offsetWidth);
}











function findMaxDigit(){
    var formElement = document.getElementById('numberForm');
    var inputElement = formElement.elements['number'];
    var inputValue = inputElement.value;
    if (inputValue.trim() !== "") {
        var maxDigit = Math.max(...inputValue.split('').map(Number));
        document.cookie = 'Найбільше число' + '=' + maxDigit + ';';
        this.iterator += 1;
        alert('Максимальне значення: ' + maxDigit);
    }
}
function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
function getCookie(){
        alert("Площа паралелограма: " + getSquare() + " пікселів");
        if(document.cookie !== ''){
        alert(document.cookie + "\nНатисніть ОК, щоб видалити збережену інформацію");
        deleteAllCookies();
        alert("Інформація видалена.");
    }
}























function setAlign(block){
    RadioButton = document.querySelector('input[name="alignment"]:checked');
    if (RadioButton) {
        const alignment = document.querySelector('input[name="alignment"]:checked').value;
        block.style.textAlign = alignment;
        const blockClass = '.' +  block.classList[0];
        localStorage.setItem(`alignment_${blockClass}`, alignment);
    }
}
function to_align(){
    const blocksToAlign = ['.block2', '.block4', '.block5'];
    blocksToAlign.forEach(function(blockclass) {
        const block = document.querySelector(blockclass);
        alignment = localStorage.getItem(`alignment_${blockclass}`);
        if (alignment) {
            block.style.textAlign = alignment;
        }        
    });
}









var maxItems = 13;
var itemCount = document.getElementById('dynamicList').childElementCount;

var savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

function addItemToList() {
    var selectedValue = document.getElementById('dynamicSelect').value;

    if (itemCount < maxItems) {
        var newItem = document.createElement('li');
        newItem.textContent = selectedValue;
        document.getElementById('dynamicList').appendChild(newItem);

        savedItems.push(selectedValue);
        localStorage.setItem('savedItems', JSON.stringify(savedItems));

        itemCount++;
    } else {
        alert('Досягнуто максимальну кількість елементів (13). Оновіть сторінку.');
    }
}

window.addEventListener('beforeunload', function() {
    localStorage.removeItem('savedItems');
});


