-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2024 at 11:38 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school_management_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `marks`
--

CREATE TABLE `marks` (
  `id` int(11) NOT NULL,
  `subjectid` int(11) NOT NULL,
  `studentid` int(11) NOT NULL,
  `marks` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `sex` enum('m','f') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `name`, `sex`) VALUES
(6, 'amsjr2', 'm'),
(7, 'amsjr1', 'm');

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(12, 'ubja', 'ubja@gmail.com', '$2a$10$IEzHNtJV5toZKVdfusiHBuZfGKElL0HbW3BV5l5cvbY'),
(14, 'fix', 'fix@gmail.com', '$2b$10$0/aY3J/FYtgZCSR6ZaHLO.VVZ647izoXfds85QBaIGa'),
(16, 'fix.', 'fix.@gmail.com', '$2b$10$KnDL8SgsRuL3l5EWjFjoz.VRCGDHu0Q4hQCM/bknw9j'),
(18, 'salt', 'salt@gmail.com', '$2b$12$mokwiViC1lh4GpDQLdHqKOnc9zqFc6jUWCoNvot1Rii'),
(20, 'salt.', 'salt.@gmail.com', '$2b$12$Nw/WMX2ThHS2ta.f79nWD.Ta/1YsdJsP3iHm8vt09Eb'),
(23, 'hsh', 'hsh@gmail.com', '$2b$10$go1ahqIf0nM8Z953GnJVPeT1NxBt2Rb/F6OrpJRlW28'),
(24, 'hsh,', 'hsh,@gmail.com', '$2b$10$htlzb6pwsbBrUgZmrkVxwe0YnYA/jq0uqmgOiaOt1xL'),
(25, 'AMSJr', 'anjohsamueljr@gmail.com', '$2b$10$6zd2Vac0/FzhlZWZp7m4sOOi8SUX3uSmRcSTlt4vh96'),
(26, 'cabrel', 'cabrel@gmail.com', '$2b$12$AiJE5AaVj5gS0u.Ga/U6J.La.3hXHt1qpkeRbCeWrf2'),
(27, 'jwt', 'jwt@gmail.com', '$2a$12$MR1XqGINFGQoZB/Upao2rOMOSh9yCTxJaScilgUGTfA'),
(28, 'jwt.', 'jwt.@gmail.com', '$2a$08$XX5EvG3HTWme/ErjJiNoH.qcpMuiCCt9wfR3se36ITT'),
(29, 'bjs', 'bjs@gmail.com', '$2a$12$eSjxw4ybs9C8m.TURnWUGexPHAX44lctLQLvEkCSqcs');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `marks`
--
ALTER TABLE `marks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `marks`
--
ALTER TABLE `marks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
