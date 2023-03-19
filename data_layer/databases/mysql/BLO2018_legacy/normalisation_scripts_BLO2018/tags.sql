DROP TABLE IF EXISTS `document_tags`;
DROP TABLE IF EXISTS `tags`;

-- Create the tags table
CREATE TABLE `tags` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tag` TEXT DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create the document_tags linking table
CREATE TABLE `document_tags` (
  `document_id` INT(11) UNSIGNED NOT NULL,
  `tag_id` INT(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`document_id`, `tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert data into the tags table and document_tags linking table
INSERT INTO `tags` (`tag`)
SELECT DISTINCT `TAGS`
FROM `18__catalog`
WHERE `TAGS` <> '' AND `TAGS` IS NOT NULL;

INSERT INTO `document_tags` (`document_id`, `tag_id`)
SELECT `18__catalog`.`id`, `tags`.`id`
FROM `18__catalog`
JOIN `tags` ON `tags`.`tag` = `18__catalog`.`TAGS`
WHERE `18__catalog`.`TAGS` <> '' AND `18__catalog`.`TAGS` IS NOT NULL;
