<?php
include $_SERVER['DOCUMENT_ROOT'] . './components/logic/validate.php';
?>

<header class = "header wow fadeInDown">
    <button class="header_btn-menu">
        <span></span>
        <span></span>
        <span></span>
    </button>
    <nav class = "header__nav container">
        <ul class = "header__menu">
            <li class = "header__item"><a href="../components/collection.php">Каталог</a></li>
            <li class = "header__item"><a href="#">Оплата</a></li>
            <li class = "header__item"><a href="#">Доставка</a></li>
            <li class = "header__item"><a href="../components/about.php">О магазине</a></li>
            <li class = "header__item"><a href="#">Блог</a></li>
            <li class = "header__item"><a href="#">Личный кабинет</a></li>
            <li class = "header__item"><a href="#">Обратная связь</a></li>
        </ul>
    </nav>
</header>
<?php
    include_once __DIR__ . './drop-down-menu.php';
?>
<div class="up-menu container wow fadeInDown">
    <div class="info">
        <div class="info__left-side item__flex">
            <div class="info__img">
                <a href="../index.php">
                    <img src="../img/icon.png" alt="иконка">
                </a>
            </div>
            <address class="info__telephone">
                <img src="../img/phone.png" alt="">
                <span>
                <a href="tel:+79511575115">+7(999)123-11-22</a>
            </span>
            </address>
        </div>

        <div class="info__right-side item__flex">
            <div class="info__search">
                <input type="text" placeholder="Поиск...">
                <button>
                    <img src="../img/search.png" alt="">
                </button>

            </div>

            <div class="info__account ">
                <a class="item__flex" href="../components/personal-area.php">
                    <span>Личный кабинет</span>
                    <img src="../img/icon-men.png" alt="аккаунт">
                </a>
            </div>

            <div class="info__basket ">
                <a class="item__flex" href="#">
                    <span>Корзина</span>
                    <img src="../img/basket.png" alt="аккаунт">
                </a>
            </div>
        </div>

    </div>
    <div class="info__line"></div>
</div>

<div class="products container wow fadeInDown">
    <ul class="products__product-list item__flex el-hover">
        <li class="products__item"><a href="#">Свитшоты</a></li>
        <li class="products__item"><a href="#">Брюки</a></li>
        <li class="products__item"><a href="#">Кроссовки</a></li>
        <li class="products__item"><a href="#">Платья</a></li>
        <li class="products__item"><a href="#">Туфли</a></li>
        <li class="products__item"><a href="#">Сумки</a></li>
        <li class="products__item"><a href="#">Футболки</a></li>
        <li class="products__item"><a href="#">Аксессуары</a></li>
    </ul>
</div>