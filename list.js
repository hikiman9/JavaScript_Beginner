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




// for (let i = 0; i < products.length; i++) {
//     var a = `<div class="col-sm-4">
//                 <img src="https://via.placeholder.com/600" class="w-100">
//                 <h5>${products[i].title}</h5>
//                 <p>가격 : ${products[i].price}</p>
//             </div>`;
//     document.querySelector('.row').insertAdjacentHTML("beforeend", a);
// }

// document.querySelector('#more').addEventListener('click', function () {
//     fetch('https://codingapple1.github.io/js/more1.json')
//         .then(res => res.json())
//         .then(function (data) {
//             console.log(data);
//         }).catch(function (error) {
//             console.log('오류남');
//         });
// });