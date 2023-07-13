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


