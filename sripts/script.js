const btnTable = document.querySelector('.table__btn');
const btnMenu = document.querySelector(".header_btn-menu");
const dropDownMenuBtn = document.querySelector(".drop-down-menu__btn");
const background = document.querySelector(".background");
const dropDownMenu = document.querySelector('.drop-down-menu');
const dropMenu = document.querySelector('#drop-menu-list');
const woman = document.querySelector("#woman");
const men = document.querySelector("#men");
const children = document.querySelector("#children");
const shoes = document.querySelector("#shoes");
const advertising = document.querySelector('.advertising');
const dateTime = document.querySelector('.date-time');
const personalAreaBtn = document.querySelector('.personal-area__btn');

// /*Реклама*/
// const appearanceAdvertising = () => {
//     setTimeout(() => {
//         advertising.classList.remove('display-none')
//     }, 3000)
// }

interval();

// const advertisingBtn = document.querySelector('.advertising__btn');
//
// if (advertisingBtn) {
//     advertisingBtn.addEventListener('click', () => {
//         advertising.remove();
//     })
// }
// if (advertising) {
//     appearanceAdvertising();
// }

/*Реклама*/

const showHideTable = () => {
    const tableSize = document.querySelector('.table-size');
    tableSize.classList.toggle('show-hide');
}

if (btnTable) {
    btnTable.addEventListener('click', showHideTable);
}

const showMenu = () => {
    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = '';
    } else {
        document.body.style.overflow = 'hidden'
    }
    if (dropDownMenu.classList.contains('drop-active')) {
        dropDownMenu.classList.remove('drop-active');
        background.classList.remove('background-active');
    } else {
        dropDownMenu.classList.add('drop-active');
        background.classList.add('background-active');
    }
}

if (btnMenu) {
    btnMenu.addEventListener('mouseover', () => {
        if (btnMenu.classList.contains('btn-checked')) {
            btnMenu.classList.remove('btn-checked');
        } else {
            btnMenu.classList.add('btn-checked');
        }
    })
    btnMenu.addEventListener('mouseout', () => {
        if (btnMenu.classList.contains('btn-checked')) {
            btnMenu.classList.remove('btn-checked');
        } else {
            btnMenu.classList.add('btn-checked');
        }
    })
    btnMenu.addEventListener('click', showMenu)
}

if (dropDownMenuBtn) {
    dropDownMenuBtn.addEventListener('click', showMenu)
}

if (background) {
    background.addEventListener('click', showMenu)
}

const showMainContent = (item) => {
    if (item.classList.contains('active-link') && document.querySelector('.drop-down-menu__main-content').style.width !== '50%')
        document.querySelector('.drop-down-menu__main-content').style.width = '50%';
}

const selectItem = (item) => {
    showMainContent(item);
    item.addEventListener('mouseover', (event) => {
        let itemMenu = {};
        switch (item.id) {
            case 'woman' :
                itemMenu = {
                    list: [
                        {
                            title: 'Одежда',
                            links: ['Блузки и рубашки', 'Брюки', 'Верхняя одежда', 'Водолазки',
                                'Джемперы и кардиганы', 'Все категории']
                        }
                    ],

                    img: 'wom'
                }
                break;
            case 'men' :
                itemMenu = {
                    list: [
                        {
                            title: 'Одежда',
                            links: ['Брюки', 'Верхняя одежда', 'Водолазки',
                                'Джемперы и кардиганы', 'Джинсы', 'Все категории']
                        }
                    ],
                    img: 'men'
                }

                break;
            case 'children' :
                itemMenu = {
                    list: [
                        {
                            title: 'Для мальчиков',
                            links: ['Белье', 'Брюки и шорты', 'Рубашки',
                                'Верхняя одежда', 'Водолазки', 'Все категории']
                        },
                        {
                            title: 'Для девочек',
                            links: ['Белье', 'Блузки и рубашки', 'Брюки и шорты',
                                'Верхняя одежда', 'Водолазки', 'Все категории']
                        }
                    ],
                    img: 'children'
                }
                break;
            case 'shoes' :
                itemMenu = {
                    list: [
                        {
                            title: 'Мужская',
                            links: ['Ботинки полуботинки', 'Кеды и кросовки', 'Мокасины',
                                'Сапоги', 'Тапочки']
                        },
                        {
                            title: 'Женская',
                            links: ['Балетки и чешки', 'Босоножки и сандали', 'Кеды и кросовки',
                                'Сапоги', 'Тапочки']
                        }
                    ],
                    img: 'shoes'
                }
                break;
        }

        event.preventDefault();
        const temp = document.querySelector('.active-link')
        if (temp) {
            document.querySelector('.active-link').classList.remove('active-link');
        }
        item.classList.add('active-link');
        const dropDownMenuContent = document.querySelector('.drop-down-menu__main-content');
        dropDownMenuContent.innerHTML = '';
        dropDownMenuContent.innerHTML = `
                <ul class="drop-down-menu__list el-hover" id="content-list"></ul>
                <div class="drop-down-menu__container">
                    <img src="../img/${itemMenu.img}.jpg" alt="Картинка одежды">
                </div>
            `;
        const contentList = document.querySelector('#content-list');
        itemMenu.list.map((item) => {
            contentList.insertAdjacentHTML(
                'beforeend',
                `<li className="drop-down-menu__item"><span class="drop-down-menu__title">${item.title}</span></li>`)
            item.links.map((element) => {
                contentList.insertAdjacentHTML(
                    'beforeend',
                    `<li className="drop-down-menu__item"><a href="#">${element}</a></li>`
                )
            })
        })
    })
}

const selectMenuItem = () => {
    if (woman) {
        selectItem(woman);
    }
    if (men) {
        selectItem(men);
    }
    if (children) {
        selectItem(children);
    }
    if (shoes) {
        selectItem(shoes);
    }
}

if (dropMenu) {
    dropMenu.addEventListener('mouseover', selectMenuItem);
}

/*Маска для телефона*/
const selector = document.querySelectorAll('input[type="tel"]');
const im = new Inputmask('+7 (999) 999 99 99');
im.mask(selector);
/*Маска для телефона*/

//Валидация email

const validationEmail = (event) => {
    const target = event.target;
    const pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    validation(target, pattern);
}

const validationPassword = (event) => {
    const target = event.target;
    const pattern = /[0-9a-zA-Z!@#$%^&*]{6,}/;
    validation(target, pattern);
}

const comparisonPasswords = (ev) => {
    const pas1 = document.querySelector('#password');
    const pas2 = document.querySelector('#password2');
    if (pas1 && pas2) {
        if (pas1.value !== pas2.value) {
            ev.preventDefault();
            alert('Пароли не совпадают!')
            return false;
        } else {
            return true;
        }
    }
}

//personalAreaBtn.addEventListener('click', comparisonPasswords);

const validationName = (event) => {
    const target = event.target;
    const patternName = /^[a-zа-яA-ZА-Я0-9_-]{3,16}$/;
    validation(target, patternName);
}

const validationTel = (event) => {
    const target = event.target;
    const patternName = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    validation(target, patternName);
}

const validation = (target, pattern = '') => {
    if (target.value.match(pattern)) {
        target.classList.add('valid');
        target.classList.remove('invalid');
    } else {
        target.classList.remove('valid');
        target.classList.add('invalid');
    }
}



/*Обработка отправки*/
const personalArea = document.querySelectorAll('#personal-area-form');
if (personalArea) {
    let validateForms = (selector, rules) => {
        new window.JustValidate(selector, {
            rules: rules,
        })
    }

    validateForms('#personal-area-form',
        {
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true,
                strength: {
                    custom: '^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$'
                }
            },
            name: {
                required: true,
                minLength: 3
            },
            surname: {
                required: true,
                minLength: 3
            },
            password: {
                required: true,
                minLength: 6
            },
            repeatPassword: {
                required: true,
                minLength: 6
            }
        },
        '.thanks-popup',
        'send goal'
    );
}
/*Обработка отправки*/

/*Дата, интервал*/

function printDate() {
    let d = new Date();

    let mounth = ['Января', 'Февраля',
        'Марта', 'Апреля', 'Мая',
        'Июня', 'Июля', 'Августа',
        'Сентября', 'Октября', 'Ноября', 'Декабря'];

    let days = [
        'Понедельник', 'Вторник',
        'Среда', 'Четверг', 'Пятница',
        'Суббота', 'Воскресенье'
    ];

    let day = d.getDay();
    let date = d.getDate();
    let mount = d.getMonth();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let year = d.getFullYear();

    //Склонение часов
    let hour = declOfNum(hours, ['Час', 'Часа', 'Часов']);

    //Склонение минут
    let minute = declOfNum(minutes, ['Минута', 'Минуты', 'Минут']);

    //Склонение секунд
    let second = declOfNum(seconds, ['Секунда', 'Секунды', 'Секунд']);

    dateTime.innerHTML = 'Сегодня ' + date + ' ' + mounth[mount] + ' ' + year + ', ' + days[day - 1] + ', ' + '<br>' + hours + ' ' + hour + ' '
        + minutes + ' ' + minute + ' ' + seconds + ' ' + second;
}

function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function interval() {
    setInterval(printDate, 1000);
}
