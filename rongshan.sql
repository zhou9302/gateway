/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : rongshan

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 08/09/2019 17:37:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `articleId` varchar(255) DEFAULT NULL,
  `articleName` varchar(255) DEFAULT NULL,
  `pv` int(255) DEFAULT NULL,
  `uv` int(255) DEFAULT NULL,
  `users` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
BEGIN;
INSERT INTO `article` VALUES (NULL, NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `high` int(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (160, '13642209921', 'zhou', 2);
INSERT INTO `user` VALUES (160, '1323209921', 'ying', 13);
INSERT INTO `user` VALUES (160, '1323209921', 'wang', 14);
INSERT INTO `user` VALUES (160, '1323209921', 'ming', 15);
INSERT INTO `user` VALUES (180, '1323209921', 'luo', 16);
INSERT INTO `user` VALUES (180, '1323209921', 'yang', 17);
INSERT INTO `user` VALUES (160, '1323209921', 'zhang', 18);
INSERT INTO `user` VALUES (160, '1323209921', 'dan', 19);
INSERT INTO `user` VALUES (160, '1323209921', 'han', 20);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
