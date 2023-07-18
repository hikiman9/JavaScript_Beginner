var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' }
];

function getProducts(array) {
    array.forEach((a, i) => {
        var card = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}</p>
        <button class="btn btn-danger buy">구매</button>
    </div>`;

        document.querySelector('.row').insertAdjacentHTML("beforeend", card)
    });
}

getProducts(products);

var more = 1;

document.querySelector('#more').addEventListener('click', function () {
    fetch(`https://codingapple1.github.io/js/more${more}.json`)
        .then(res => res.json())
        .then(function (data) {
            getProducts(data);
            more++;
            if (more > 2) {
                document.getElementById('more').style.display = 'none';
            }
        })
})

document.querySelector('#low-price').addEventListener('click', function () {
    products.sort(function (a, b) { return a.price - b.price });
    document.querySelector('.row').innerHTML = '';
    getProducts(products);
})

document.querySelector('#reverse').addEventListener('click', function () {
    products.sort(function (a, b) {
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
        if (a.title === b.title) return 0;
    });
    document.querySelector('.row').innerHTML = '';
    getProducts(products);
})

document.querySelector('#sixty').addEventListener('click', function () {
    var new_products = products.filter(function (a) {
        return a.price <= 60000;
    })
    document.querySelector('.row').innerHTML = '';
    getProducts(new_products);
})

for (let i = 0; i < products.length; i++) {
    document.querySelectorAll('.buy')[i].addEventListener('click', function () {
        var product_like = this.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
        if (localStorage.length == 0) {
            localStorage.setItem('cart', JSON.stringify([product_like]));
        } else {
            var new_cart = JSON.parse(localStorage.getItem('cart'));
            new_cart.push(product_like);
            localStorage.setItem('cart', JSON.stringify(new_cart));
        }
    })
}

