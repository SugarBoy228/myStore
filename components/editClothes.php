<?php
session_start();
if ($_SESSION['user']['role'] !== '1') {
    header('Location: ../index.php');
}
require('./header.php');
?>
<?php
if (strpos($_SERVER['HTTP_REFERER'], 'admin')) {
    if (!empty($_GET['id'])) {
        $clothes = getCatalogItem($_GET['id']);
        $clothes = mysqli_fetch_assoc($clothes);
        $_SESSION['clothes']['id'] = $clothes['Id'];
        $_SESSION['clothes']['title'] = $clothes['title'];
        $_SESSION['clothes']['price'] = $clothes['price'];
        $_SESSION['clothes']['count'] = $clothes['count'];
        $_SESSION['clothes']['img_path'] = $clothes['img_path'];
        unset($_SESSION['clothes']['addClothes']);
    } else if (!empty($_GET['add'])) {
        unset($_SESSION['clothes']);
        $_SESSION['clothes']['addClothes'] = true;
    }
}
if (isset($_SESSION['clothes']['title'])) {
    $name = check($_SESSION['clothes']['title']);
    $price = checkNumber($_SESSION['clothes']['price']);
    $count = checkNumber($_SESSION['clothes']['count']);
}
?>
    <div class="container">
        <div class="links">
            <span class="link"><a href="./admin.php">Админка</a></span>
        </div>
        <form class="personal-area el-hover" action="./changeClothes.php" method="post" enctype="multipart/form-data">
            <h1 class="title"><?= $_SESSION['clothes']['addClothes'] === true ? "Добавление одежды" : "Редактирование одежды" ?> </h1>
            <img src="<?= !empty($_SESSION['clothes']['img_path']) ? '../clothes/' . $_SESSION['clothes']['img_path'] : '../img/icon-men.png' ?>"
                 class="personal-area-img" alt="">
            <label class="<?= $name ? 'error' : '' ?>"
                   for="name"><?= $name ? "Минимальная длина 1 символ" : 'Имя' ?></label>
            <input id="name" name="title" placeholder="Введите наименование"
                   value="<?= !empty($_SESSION['clothes']['title']) ? $_SESSION['clothes']['title'] : '' ?>"
                   maxlength="40" type="text"
            >
            <label class="<?= $price ? 'error' : '' ?>"
                   for="price"><?= $price ? "Только числа!" : 'Цена' ?></label>
            <input id="price" name='price'
                   value="<?= !empty($_SESSION['clothes']['price']) ? $_SESSION['clothes']['price'] : '' ?>"
                   placeholder="Введите цену" type="text" maxlength="40">
            <label class="<?= $count ? 'error' : '' ?>"
                   for="count"><?= $count ? 'Только числа!' : 'Количество' ?></label>
            <input id="count" name="count"
                   value='<?= !empty($_SESSION['clothes']['count']) ? $_SESSION['clothes']['count'] : '' ?>'
                   maxlength="40">
            <label class=""
                   for="">Изображение одежды</label>
            <input class="" id="" type="file" name="img_path">

            <input type="submit" name='edit' class="edit" value="Изменить">
        </form>
    </div>
<?php
require('./foot.php');
require('./scripts.php');
?>