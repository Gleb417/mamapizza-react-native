-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 21 2024 г., 22:49
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `BDReactNativeMamaPizza`
--

-- --------------------------------------------------------

--
-- Структура таблицы `pizza`
--

CREATE TABLE `pizza` (
  `imagepizza` varchar(255) NOT NULL,
  `namepizza` varchar(255) NOT NULL,
  `descriptionpizza` varchar(255) NOT NULL,
  `pricepizza` int NOT NULL,
  `id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `pizza`
--

INSERT INTO `pizza` (`imagepizza`, `namepizza`, `descriptionpizza`, `pricepizza`, `id`) VALUES
('https://izhevsk.mama-pizza.ru/upload/iblock/3f0/tud3dzeyjfmljhlyvmrnkzvypnkgt75c_thumb_256x256.png', 'Маргарита', 'Традиционная римская пицца с хрустящими бортиками на пышном тесте с томатами, нежной моцареллой, укропным маслом и пряным базиликом на фирменном томатном соусе.', 490, 1),
('https://izhevsk.mama-pizza.ru/upload/iblock/ea4/1axdvf4xlu3d34t9m35366uo8exdthtf_thumb_256x256.png', 'Пепперони', 'Традиционная римская пицца с хрустящими бортиками на пышном тесте со слайсами пикантной пепперони, фирменным томатным соусом и моцареллой.', 510, 2),
('https://izhevsk.mama-pizza.ru/upload/iblock/469/isr0v9sk0z00vnpsnh3dsvfpvzbdudyt_thumb_256x256.png', 'Цезарь с курицей', 'Римская пицца с хрустящими бортиками с нежным курициным филе, соусом цезарь с анчоусами, томатами черри, моцареллой, листьями салата Айсберг и стуржкой пармезана.', 560, 3),
('https://izhevsk.mama-pizza.ru/upload/iblock/cb4/39usr1nljltlufgxvzjdyv2dipu3cojw_thumb_256x256.png', 'Сливочная с креветками и соусом песто', 'Римская пицца с хрустящими бортиками на нежном сливочном соусе с креветками, рукколой и слайсами цукини с добавлением соуса песто.', 590, 4),
('https://izhevsk.mama-pizza.ru/upload/iblock/12a/t93ugb5skdp73agqd9ycugiktwyv06z7_thumb_256x256.png', 'С курицей и грибами', 'Традиционная римская пицца с хрустящими бортиками на пышном тесте с курицей и шампиньонами на сметанном соусе с прованскими травами, чесночным маслом и сыром моцарелла.', 560, 5),
('https://izhevsk.mama-pizza.ru/upload/iblock/35c/gjussjc64ydlirfv335ove65wr1mlv59_thumb_256x256.png', 'Четыре сыра', 'Римская пицца с хрустящими бортиками на сливочном соусе с моцареллой, чеддером, гаудой и сыром с голубой плесенью.', 540, 6),
('https://izhevsk.mama-pizza.ru/upload/iblock/dc5/nk9et641ew0stht8d19pag28kixi51x7_thumb_256x256.png', 'С запеченной индейкой и ананасами', 'Римская пицца с хрустящими бортиками на нежном сливочном соусе с бужениной из индейки, консервированными ананасами, моцареллой под соусом унаги.', 550, 7);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `pizza`
--
ALTER TABLE `pizza`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `pizza`
--
ALTER TABLE `pizza`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
