DROP TABLE IF EXISTS `document_editions`;
DROP TABLE IF EXISTS `editions`;

CREATE TABLE `editions` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `original_title` VARCHAR(255) DEFAULT NULL,
  `publication` VARCHAR(255) DEFAULT NULL,
  `volume` VARCHAR(255) DEFAULT NULL,
  `publisher` VARCHAR(255) DEFAULT NULL,
  `city` VARCHAR(255) DEFAULT NULL,
  `date` VARCHAR(255) DEFAULT NULL,
  `isbn` VARCHAR(255) DEFAULT NULL,
  `page_range` VARCHAR(255) DEFAULT NULL,
  `is_current_document` BOOLEAN NOT NULL DEFAULT TRUE,
  original_id INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `editions` (original_title, publisher, city, date, isbn, is_current_document, original_id)
SELECT
    TITLE_1ST AS original_title,
    PUB_1ST AS publisher,
    CITY_1ST AS city,
    DATE_1ST AS date,
    ISBN_1ST AS isbn,
    FALSE AS is_current_document,
    id AS original_id
FROM `18__catalog`
WHERE (TITLE_1ST IS NOT NULL AND TITLE_1ST <> '') OR (PUB_1ST IS NOT NULL AND PUB_1ST <> '') OR (CITY_1ST IS NOT NULL AND CITY_1ST <> '') OR (DATE_1ST IS NOT NULL AND DATE_1ST <> '') OR (ISBN_1ST IS NOT NULL AND ISBN_1ST <> '');

INSERT INTO `editions` (publication, volume, publisher, city, date, isbn, page_range, is_current_document, original_id)
SELECT
    TITLE_PARENT AS publication,
    VOLUME AS volume,
    PUB_THIS AS publisher,
    CITY_THIS AS city,
    DATE_THIS AS date,
    ISBN_THIS AS isbn,
    PAGE_RANGE AS page_range,
    TRUE AS is_current_document,
    id AS original_id

FROM `18__catalog`
WHERE (DATE_THIS IS NOT NULL AND DATE_THIS <> '');

CREATE TABLE `document_editions` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `edition_id` INT(11) NOT NULL,
  `document_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `document_editions` (edition_id, document_id)
SELECT `editions`.`id`, `editions`.`original_id`
FROM `editions`;

ALTER TABLE `editions`
DROP COLUMN `original_id`;
