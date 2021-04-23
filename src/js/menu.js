let menuData = [
    {
        "menu-name": "Lorem 1",
        "menu-price": "$30",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "starters",
        "menu-image": "pizza-menu.jpg"
    },
    {
        "menu-name": "Lorem 2",
        "menu-price": "$35",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "main",
        "menu-image": "pizza-menu2.jpg"
    },
    {
        "menu-name": "Lorem 3",
        "menu-price": "$35",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "main",
        "menu-image": "pizza-menu3.jpg"
    },
    {
        "menu-name": "Lorem 4",
        "menu-price": "$5",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "promotion",
        "menu-image": "pizza-menu4.jpg"
    },
    {
        "menu-name": "Lorem 5",
        "menu-price": "$15",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "promotion",
        "menu-image": "pizza-menu5.jpg"
    },
    {
        "menu-name": "Lorem 6",
        "menu-price": "$9.99",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "promotion",
        "menu-image": "pizza-menu.jpg"
    },
    {
        "menu-name": "Lorem 7",
        "menu-price": "$55",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "main",
        "menu-image": "pizza-menu2.jpg"
    },
    {
        "menu-name": "Lorem 8",
        "menu-price": "$35",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "main",
        "menu-image": "pizza-menu3.jpg"
    },
    {
        "menu-name": "Lorem 9",
        "menu-price": "$15",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "main",
        "menu-image": "pizza-menu4.jpg"
    },
    {
        "menu-name": "Lorem 10",
        "menu-price": "$14.99",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "main",
        "menu-image": "pizza-menu5.jpg"
    },
    {
        "menu-name": "Lorem 11",
        "menu-price": "$25",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "starters",
        "menu-image": "dessert-menu.jpg"
    },
    {
        "menu-name": "Lorem 12",
        "menu-price": "$55",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "main",
        "menu-image": "pizza-menu.jpg"
    },
    {
        "menu-name": "Lorem 13",
        "menu-price": "$55",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "drinks",
        "menu-image": "drinks-menu1.jpg"
    },
    {
        "menu-name": "Lorem 14",
        "menu-price": "$55",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "drinks",
        "menu-image": "drinks-menu2.jpg"
    },
    {
        "menu-name": "Lorem 15",
        "menu-price": "$55",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "drinks",
        "menu-image": "drinks-menu3.jpg"
    },
    {
        "menu-name": "Lorem 16",
        "menu-price": "$55",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "drinks",
        "menu-image": "drinks-menu4.jpg"
    },
    {
        "menu-name": "Lorem 17",
        "menu-price": "$55",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "drinks",
        "menu-image": "drinks-menu5.jpg"
    },
    {
        "menu-name": "Lorem 18",
        "menu-price": "$55",
        "menu-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
        "category": "drinks",
        "menu-image": "drinks-menu6.jpg"
    }
]

let menuWrapper = document.getElementById('menu-wrapper');
let menuTag = document.getElementsByTagName("a");
let menuAll = document.getElementById('menu-all');
let menuCard = document.getElementById('menu-card')

menuData.forEach(function (element) {
    menuWrapper.innerHTML += `                
    <div class="our-menu-card" id="menu-card">
        <div class="menu-card-image">
            <img src="./src/img/menu/${element["menu-image"]}" alt="pizza">
        </div>
        <div class="menu-card-desc">
            <div class="menu-card-desc-header">
                <h3>${element["menu-name"]}</h3>
                <span>${element["menu-price"]}</span>
            </div>
            <p>
                ${element["menu-desc"]}
            </p>
        </div>
    </div>
    `
});