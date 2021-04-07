-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 21-03-31 08:58
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
-- 테이블 구조 `member`
--

CREATE TABLE `member` (
  `idx` int(11) NOT NULL,
  `mid` varchar(20) NOT NULL,
  `mpw` varchar(100) NOT NULL,
  `name` varchar(20) NOT NULL,
  `gen` char(1) NOT NULL,
  `email1` varchar(20) NOT NULL,
  `email2` varchar(20) NOT NULL,
  `regdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `auth` char(1) DEFAULT 'M'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `member`
--

INSERT INTO `member` (`idx`, `mid`, `mpw`, `name`, `gen`, `email1`, `email2`, `regdate`, `auth`) VALUES
(1, 'asdw112', '$2y$10$an83xI7gDqpq5yVwqjBBl.reNPcRZ9eXOaYkTPklK1uuYh0g/PdNu', 'asdwasd', 'm', 'fwfasf', 'casc.com', '2021-03-04 07:32:26', 'M'),
(5, 'asdasdasd', '$2y$10$Uc/5fIxo.NP5EIPs2b4AkuQWsxHY1TJIZEnkOt8fEI6GRr2PENYNu', 'asdasdads', 'm', 'ddwasd', 'naver.com', '2021-03-04 07:54:40', 'M'),
(6, 'heungmin', '$2y$10$avLb9haqUbkzzmmPLbMqkeQdF/At3OAzz2Hd8vmvTtjBvnYa.08AO', '손흥민', 'm', 'son', 'naver.com', '2021-03-04 07:57:07', 'M'),
(7, 'wasdww12', '$2y$10$FN/EtMSVpqgT7/uGoJWBB.xKHNQ76jA0SnvbAskI4ue0Cq3hsR956', '제시카', 'w', 'jessica', 'naver.com', '2021-03-05 05:59:49', 'M'),
(8, 'heungmin1', '$2y$10$WM/TUuvS9Tdz3.Kl7pXokeoovy8u/lSWDvl63fmIUe.RT5keRea8G', '손흥민', 'm', 'heung', 'naver.com', '2021-03-05 08:09:28', 'M'),
(9, 'wlgns1', '$2y$10$.Q6CCjfcEW/WOJ8vmqPTLegpNaPc5u6B2Oog2t6m4wWVYba.RfH4a', '정지훈', 'm', 'wlgns', 'naver.com', '2021-03-05 08:12:26', 'M'),
(10, 'jisung12', '$2y$10$da4ENF/9A9EU9vhbM4TGVuEcho4F4nIfhoHY4cW8UVDqZNjRRSK4i', '박지성', 'm', 'park', 'naver.com', '2021-03-08 05:38:26', 'M'),
(11, 'hankstom', '$2y$10$bHdlOwipuGtUYnfkIQLRi.aBq688YNqdqhmqPh2a3PpgJhy9n8qFS', '톰 행크스', 'm', 'hankstom', 'daum.net', '2021-03-17 06:36:43', 'A'),
(12, 'kianu88', '$2y$10$sD45D/R5k8.RkfPUQUU2duCAIcgvHXBZh9Edmb1xn6qUVkA2dIVAC', '키아누 리브스', 'm', 'kianu', 'gmail.com', '2021-03-10 05:33:48', 'M'),
(13, 'songk99', '$2y$10$2K1OD6m46/ROZYZTzialXeWN.9XhVcPSRu0qwB8YcKMhs8JqqJ7pu', '송강', 'm', 'songk99', 'naver.com', '2021-03-16 07:08:26', 'A'),
(14, 'kimsu88', '$2y$10$Ngujtii83mKzkoSH6xiZqexROHAd87CPNtD5grzAefioYjqqffO42', '김수현', 'm', 'kimsu88', 'hotmail.com', '2021-03-11 06:29:12', 'M'),
(15, 'hskim70', '$2y$10$mtDKi8L6LsoMl0YlR8asFup/OjcqfEWwIBnuVrcxLPok6Dbz/hwPu', '김혜수', 'w', 'hskim70', 'hanmail.net', '2021-03-12 05:33:21', 'M'),
(16, 'snim123', '$2y$10$sJvCgdXoi.l6YyAOJ6SYr.OjReRjtugtaAaoumHRF2/Nh0euV/tI.', '스', 'm', 'snim123', 'naver.com', '2021-03-15 05:37:42', 'A'),
(17, 'yesu123', '$2y$10$aeVCvwj6fWlC6BvS2ODkRemrHy7dsMXoelKilJUX8PxhoYFTpcCPu', '예수', 'm', 'yesu', 'naver.com', '2021-03-17 06:36:52', 'S'),
(18, 'putyour123', '$2y$10$drAMwcfcgdcm9OkUZSLbIOllVex2h8DK3CxEDFxdSzmIdh0JRqdaW', '부처', 'm', 'putyour', 'hanmail.net', '2021-03-17 05:40:39', 'A'),
(19, 'brother', '$2y$10$GSZaaEy/1..FHFnlEJ0pOuDmp7UnuGGFJqM/XZSB0OmCme47ek0AK', '형', 'm', 'brother', 'gmail.com', '2021-03-18 05:40:47', 'A'),
(20, 'sklee80', '$2y$10$KUu4VoaUgAqkmgBArqaC7.SDXiw9zyGKcxRlRiwW0.4j3att/adnm', '이승기', 'm', 'sklee', 'daum.net', '2021-03-22 06:05:49', 'A'),
(21, '', '$2y$10$MslVkHc4n1o0RmkqWz.bHuo9kMljRBCNu1FImWcXBm362juo3kQkO', '', '', '', '', '2021-03-25 06:59:58', 'M');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`idx`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `member`
--
ALTER TABLE `member`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
