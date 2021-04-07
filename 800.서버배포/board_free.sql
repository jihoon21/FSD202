-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 21-03-31 09:02
-- 서버 버전: 10.4.17-MariaDB
-- PHP 버전: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `mydb`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `board_free`
--

CREATE TABLE `board_free` (
  `uno` int(10) UNSIGNED NOT NULL,
  `gno` int(10) UNSIGNED NOT NULL,
  `reply_depth` varchar(255) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `passwd` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `homepage` varchar(50) DEFAULT NULL,
  `subject` varchar(60) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `html_tag` varchar(10) DEFAULT NULL,
  `hit` int(5) UNSIGNED NOT NULL,
  `register_date` int(10) UNSIGNED DEFAULT NULL,
  `client_ip` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `board_free`
--

INSERT INTO `board_free` (`uno`, `gno`, `reply_depth`, `name`, `passwd`, `email`, `homepage`, `subject`, `content`, `html_tag`, `hit`, `register_date`, `client_ip`) VALUES
(1, 1, '1', '김수로', '1111', 'kim@naver.com', '', '나의 첫글', '여기서부터 내글', '', 0, 1616654430, '192.105.222.147'),
(2, 1, '1', '정지훈', 'asd', '', '', '첫째글22', '글내용22', '', 0, 1616654430, '127.0.0.1'),
(8, 1, '1', '김쌤', 'asd', '', '', '하하하ㅏㅎ하', '헤헤헤헿', '', 0, 1616654430, '127.0.0.1'),
(9, 1, '1', '유아인', 'asd', '', '', '나는 유아인이다', '아인지우개', '', 0, 1616654430, '::1'),
(10, 1, '1', '조영구', 'asd', 'yong@naver.com', 'http://www.naver.com', '개발자', '코딩 중요!', '', 0, 1616655507, '::1'),
(11, 1, '1', '김혜수', '$2y$10$1anTIuc9dBiFeHbcymj/d.ODS6gNmnUYSuOVhag7YNYicipXk6PlO', 'kim@naver.com', '', '여배우다!', '여배우란 자고로..\r\n이렇게 해야한다!', '', 0, 1616737035, '::1'),
(13, 1, '1', '성춘향', '$2y$10$dFc.6n2llHLpmyzfISnI2euVLsx3jlt/pLHQYkzn654l8T4x.c8Ki', '', '', '이도령은 어디있나?', '이도령은 정말로 어디있나?', 'on', 0, 1616737995, '::1'),
(14, 1, '1', '맥아더', '$2y$10$mz48IKxRA.JdsuTpimFpPOuwDfZWGA0BBN7Oztdt9/pesP5118pjm', '', '', '인천앞바다가 보인다', '인천상륙작전!!', '', 0, 1616738097, '::1'),
(16, 1, '1', '김수로', '$2y$10$SBOumg8ysNWT445iHz4qcO0nK2lAAZ.AHhEX55MtJTPoopB0OzL6a', '', '', '또 한번!', '<h1 style=\"color:red\">하하하</h1>\r\n<p>너는 누구냐?</p>', 'on', 0, 1616742459, '::1');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `board_free`
--
ALTER TABLE `board_free`
  ADD PRIMARY KEY (`uno`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `board_free`
--
ALTER TABLE `board_free`
  MODIFY `uno` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
