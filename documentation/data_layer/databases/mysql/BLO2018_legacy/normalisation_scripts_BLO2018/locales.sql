DROP TABLE IF EXISTS `document_locales`;
DROP TABLE IF EXISTS `locales`;

-- Create the locales table
CREATE TABLE `locales` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `locale` TEXT DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create the document_locales linking table
CREATE TABLE `document_locales` (
  `document_id` INT(11) UNSIGNED NOT NULL,
  `locale_id` INT(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`document_id`, `locale_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert data into the locales table and document_locales linking table
INSERT INTO `locales` (`locale`)
SELECT DISTINCT `loctions`
FROM `18__catalog`
WHERE `loctions` <> '' AND `loctions` IS NOT NULL AND `18__catalog`.`loctions` <> 'NA';

INSERT INTO `document_locales` (`document_id`, `locale_id`)
SELECT `18__catalog`.`id`, `locales`.`id`
FROM `18__catalog`
JOIN `locales` ON `locales`.`locale` = `18__catalog`.`loctions`
WHERE `18__catalog`.`loctions` <> '' AND `18__catalog`.`loctions` IS NOT NULL;
