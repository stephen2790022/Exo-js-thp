/*===================================
        Fonctionnalité 1 :
====================================*/

let footer = document.querySelector('footer');
let clickFooter = function () {
    console.log('Ta cliqué');
}
footer.addEventListener('click', clickFooter);

/*===================================
        Fonctionnalité 1 bis :
====================================*/

let footerBis = document.querySelector('footer');
let clickFooterCount = function (e) {
    console.log(`Click count: ${e.detail}`);
}
footerBis.addEventListener('click', clickFooterCount);

/*===================================
        Fonctionnalité 2 :
====================================*/

let headerColapse = document.getElementById('navbarHeader');
let buttonHamburger = document.querySelector('button.navbar-toggler')
let hamburgerClick = function() {
    headerColapse.classList.toggle('collapse');
}
buttonHamburger.addEventListener('click', hamburgerClick);

/*===================================
        Fonctionnalité 3 :
====================================*/

let firstCard = document.querySelectorAll('.card')
firstCard[0].querySelector('button.btn-outline-secondary').addEventListener('click', function () {
    firstCard[0].style.color = "red"
});


/*===================================
        Fonctionnalité 4 :
====================================*/


let secondeCard = document.querySelectorAll('.card')
secondeCard[1].querySelector('button.btn-outline-secondary').addEventListener('click', function() {
    if (secondeCard[1].style.color === "green") {
        secondeCard[1].style.color = "";
    } else {
        secondeCard[1].style.color = "green"
    }
})

/*===================================
        Fonctionnalité 5 :
====================================*/

let navBar = document.querySelector('#navbarHeader');
let link = document.querySelector('head link ')
console.log(navBar)
let desableBootstrap = function() {
    link.disabled = true;
}

navBar.addEventListener('dblclick', desableBootstrap);

/*===================================
        Fonctionnalité 6 :
====================================*/

let card = document.querySelectorAll('.card')
for (let i = 0; i < card.length;  i++) {

    let cardContent = card[i].querySelector('p').textContent;

    card[i].querySelector('button').addEventListener('mouseover', function() {
        if (card[i].querySelector('p').textContent.length > 0) {
            card[i].querySelector('img').style.width = "20%";
            card[i].querySelector('p.card-text').textContent = "";
        } 
        else  {
            card[i].querySelector('img').style.width = "";
            card[i].querySelector('p.card-text').textContent = cardContent;
        }
    })
}      


/*===================================
        Fonctionnalité 7 :
====================================*/

let parentCards = document.querySelectorAll('.row')[1]
let arrow = document.querySelector('.btn-secondary') 

arrow.addEventListener('click', function(){ 
    parentCards.insertBefore(parentCards.lastElementChild, parentCards.firstElementChild)
})

/*===================================
        Fonctionnalité 8 :
====================================*/

let parentCards2 = document.querySelectorAll('.row')[1]
let arrow2 = document.querySelector('.btn-primary') 
console.log(arrow2)
arrow2.addEventListener('click', function(e){ 
    e.preventDefault();
    parentCards.insertBefore(parentCards.firstElementChild, parentCards.lastElementChild)
})