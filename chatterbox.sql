-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 12 juin 2023 à 11:12
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `chatterbox`
--

-- --------------------------------------------------------

--
-- Structure de la table `CLI_ASK`
--

CREATE TABLE `CLI_ASK` (
  `id` int(11) NOT NULL,
  `IdSource` int(11) NOT NULL,
  `IdDestinataire` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `CLI_ASK`
--

INSERT INTO `CLI_ASK` (`id`, `IdSource`, `IdDestinataire`) VALUES
(4, 1, 2),
(5, 45, 46),
(6, 45, 46),
(7, 47, 45),
(8, 47, 45);

-- --------------------------------------------------------

--
-- Structure de la table `CLI_MESSAGE`
--

CREATE TABLE `CLI_MESSAGE` (
  `date` int(11) NOT NULL,
  `IdTeam` int(11) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `CLI_MESSAGE`
--

INSERT INTO `CLI_MESSAGE` (`date`, `IdTeam`, `text`) VALUES
(20230609, 1, 'sesfsrfstfg'),
(20230610, 2, 'sesfsrfstfg'),
(20230611, 2, 'sesfsrfstfg'),
(20230612, 2, 'sesfsrfstfg'),
(20230613, 2, 'sesfsrfstfg');

-- --------------------------------------------------------

--
-- Structure de la table `CLI_TEAM`
--

CREATE TABLE `CLI_TEAM` (
  `id` int(11) NOT NULL,
  `IdSource` int(11) NOT NULL,
  `IdDestinataire` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `CLI_TEAM`
--

INSERT INTO `CLI_TEAM` (`id`, `IdSource`, `IdDestinataire`) VALUES
(1, 1, 2),
(2, 46, 47),
(3, 46, 47);

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('-iNGWpZqvkyaik-4Wxvh7zSJQXLuf4xJ', 1686642421, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:47:01.269Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('-qeKVNBLQCIZyamZx5LOTx4-rqIUQt0v', 1686630375, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T04:26:15.385Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"user\":{\"id\":46,\"username\":\"Tsilavina\"}}'),
('6SpQzo1-pfVzBWntU3CFIDO6TKbbtWIK', 1686630448, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T04:27:28.261Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"user\":{\"id\":46,\"username\":\"Tsilavina\"}}'),
('6la-fHZosc4ufotMVhV6FLWn8B-UszmH', 1686642092, '{\"cookie\":{\"originalMaxAge\":86399999,\"expires\":\"2023-06-13T07:41:31.916Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('8c2e985Lz2vEQl6heKkcb-QS6zDZraM4', 1686641972, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:39:31.544Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('GDNSFhw7T5PS8_JI1g916mEmLpnfni0V', 1686641734, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:35:34.034Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('MCwFmYtRP-lAcshQVbgS3bfQL11REJjP', 1686631441, '{\"cookie\":{\"originalMaxAge\":86399999,\"expires\":\"2023-06-13T04:44:00.705Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"user\":{\"id\":46,\"username\":\"Tsilavina\"}}'),
('NOKPKLudIQBiC2NpUUdHrMrh0C9QBanD', 1686639694, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:01:34.005Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"user\":{\"id\":46,\"username\":\"Tsilavina\"}}'),
('RdhidUe7-IUE9DfiyuAbrg1iRNVX0Qmz', 1686641382, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:29:42.137Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('Umd8qj7fYUivgh87nZyPfuaC6aJRaTaV', 1686636807, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T06:13:27.177Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"user\":{\"id\":46,\"username\":\"Tsilavina\"}}'),
('V3FY7AGdLodAU_ptgoskk7puwsC9PUwm', 1686641672, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:34:32.276Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('VBnq3yZPTgVmSDBCYIgQFAub2WAW-orp', 1686641398, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:29:57.585Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('_imGDdiAhEQlFm4DoGt90ZF_uZAIWQ51', 1686639539, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T06:58:59.059Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"user\":{\"id\":46,\"username\":\"Tsilavina\"}}'),
('aEmEhsXAbt6dvA6Dp0YKsecBGSfywxeG', 1686642021, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:40:21.196Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('d1hao-RNz7dQBL8r85DsUs4z4zAIO1MF', 1686641382, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:29:42.319Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('dWRi-fNsl8aj5LE6-MyZoAkuT8w1pjGV', 1686639757, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:02:37.049Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"user\":{\"id\":46,\"username\":\"Tsilavina\"}}'),
('gZ_-YCTDifxG4WVMZ37ZPsrXow5_aWm5', 1686591183, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-12T17:33:02.868Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"user\":{\"id\":46,\"username\":\"Tsilavina\"}}'),
('hHM_mS0ulkMZmvuomkRdLGEga-AJt47A', 1686641805, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:36:44.589Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('jFX2Z6QkRcg-18--JUBdlCUf5cHqzSYq', 1686641398, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:29:57.631Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('nKDJW4-TYq-CaHLRjGc8lRUJstFxIP5N', 1686630640, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T04:30:39.512Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"user\":{\"id\":46,\"username\":\"Tsilavina\"}}'),
('pIzwzxe4TfpO4Ob4c85t6AWVxqhwcw8T', 1686642021, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:40:21.062Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('pejtDevNf3tk6hricJ-4oLkEiR32Sw6p', 1686642421, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:47:01.241Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('sChudu2c7LTIDs2-v4O8P_QukFERnaMX', 1686643116, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:58:35.542Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('sdk0E8s7IqLgMwrBVIeuNiBrKmOBXYqG', 1686643116, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:58:35.584Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('vyqCe2VhteEhUl6_NemiWqiVcQ11_Tw9', 1686641904, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T07:38:23.768Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('yUM620wBxIM0NvcVv-Y_2aDn46TV_9sR', 1686630578, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-06-13T04:29:38.071Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"user\":{\"id\":46,\"username\":\"Tsilavina\"}}');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `sexe` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `sexe`, `email`, `password`) VALUES
(45, 'tsilavina', 'tsilavina', 'tsilavina', 'tsilavina', '$2b$10$WXq5aOLHlIq3woJu8r.3UO91KzISP9VUak2L6ZkHPzf1QFH2vG152'),
(46, 'Tsilavina', 'Tsilavina', 'Male', 'Tsilavina@gmail.com', '$2b$10$hUdDB0nLecsiJmzxPsGkzehY8jq/82x46lSh8DTxQ6gTRLpJKWLte'),
(47, 'fgdg', 'fgdgsdfsdfd', 'Male', 'mendrika@gmail.com', '$2b$10$wSNNOHxNL18Q4YjDPu.UJOpL2K5oIo8BjPflk6I8EG9Z0AtcBYwqK'),
(48, 'terttdrt', 'drtdtrdt', 'drtdrt', 'Henintsoa', 'Henintsoa'),
(49, 'terttdrt', 'drtdtrdt', 'drtdrt', 'Henintsoa', 'Henintsoa');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `CLI_ASK`
--
ALTER TABLE `CLI_ASK`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `CLI_MESSAGE`
--
ALTER TABLE `CLI_MESSAGE`
  ADD PRIMARY KEY (`date`);

--
-- Index pour la table `CLI_TEAM`
--
ALTER TABLE `CLI_TEAM`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `CLI_ASK`
--
ALTER TABLE `CLI_ASK`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `CLI_MESSAGE`
--
ALTER TABLE `CLI_MESSAGE`
  MODIFY `date` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20230616;

--
-- AUTO_INCREMENT pour la table `CLI_TEAM`
--
ALTER TABLE `CLI_TEAM`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
