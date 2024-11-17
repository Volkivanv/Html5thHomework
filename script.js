const menuActive = document.querySelector('.menu');
const burger = document.querySelector('.nav_right-menu');
const menuClose = document.querySelector('.menu__close');


function toggleMenu(){
    menuActive.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);

const itemData = JSON.parse(dataItems);
// console.log(itemData);

const productPanel = document.querySelector('.product_panel');
// console.log(productPanel);
itemData.forEach(element => {
    const divCard = document.createElement('div');
    divCard.classList.add('card');

    const imgEl = document.createElement('img');
    imgEl.src = element.imgUrl;
    imgEl.alt = 'picture';

    const divAddToCard = document.createElement('div');
    divAddToCard.classList.add('Add_to_card');

    const buttonAdd = document.createElement('button');

    const imgAdd = document.createElement('img');
    imgAdd.src = "./img/icon_basket.svg";
    imgAdd.alt = "icon_basket";
    buttonAdd.appendChild(imgAdd);
    const spanEl = document.createElement('span');
    spanEl.textContent = 'Add to Cart';
    buttonAdd.appendChild(spanEl);
    divAddToCard.appendChild(buttonAdd);

    const divCardDescription = document.createElement('div');
    divCardDescription.classList.add('card_description');

    const h4El = document.createElement('h4');
    h4El.textContent = element.title;
    const pDescription = document.createElement('p');
    pDescription.textContent = element.description;
    const h5El = document.createElement('h5');
    h5El.textContent = `$${element.price.toFixed(2)}`;

    divCardDescription.appendChild(h4El);
    divCardDescription.appendChild(pDescription);
    divCardDescription.appendChild(h5El);

    divCard.appendChild(imgEl);
    divCard.appendChild(divAddToCard);
    divCard.appendChild(divCardDescription);

    productPanel.appendChild(divCard);
});