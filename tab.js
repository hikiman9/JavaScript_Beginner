document.querySelector('.list').addEventListener('click', function(e){
    console.log(e.target.dataset.id)
    openTab(e.target.dataset.id);
})

function openTab(arg){
    document.querySelectorAll('.tab-button')[arg].addEventListener('click', function () {
        for (let j = 0; j < document.querySelectorAll('.tab-button').length; j++) {
            document.querySelectorAll('.tab-button')[j].classList.remove('orange');
        }
        document.querySelectorAll('.tab-button')[arg].classList.add('orange');

        for (let j = 0; j < document.querySelectorAll('.tab-content').length; j++) {
            document.querySelectorAll('.tab-content')[j].classList.remove('show');
        }
        document.querySelectorAll('.tab-content')[arg].classList.add('show');
    })
}

var sonata = {name : 'Sonata', price : [50000, 30000, 70000]}
var avante = {name : 'Avante', price : '33000'}

document.querySelector('.product').innerHTML = sonata.name;
document.querySelector('.price').innerHTML = sonata.price[1];

var products = ['모자', '셔츠', '바지'];
var cap = ['Small', 'Medium', 'Large'];
var shirt = [95, 100, 105, 110];
var pants = [28, 29, 30, 31, 32];

products.forEach(function(a){
    var productOption = `<option>${a}</option>`
    document.querySelector('.products').insertAdjacentHTML("beforeend", productOption);
})

sizeSelect(cap)

document.querySelector('.products').addEventListener('input', function(){
    if(this.value == '모자'){
        sizeSelect(cap);
    } else if(this.value == '셔츠'){
        sizeSelect(shirt);
    } else{
        sizeSelect(pants);
    }
})

function sizeSelect(sizeList){
    document.querySelector('.size').innerHTML = '';
    sizeList.forEach(function(a){
        var sizeOption = `<option>${a}</option>`;
        document.querySelector('.size').insertAdjacentHTML("beforeend", sizeOption);
    })
};
