DROP TABLE IF EXISTS `document_languages`;
DROP TABLE IF EXISTS `languages`;

CREATE TABLE `languages` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    `language` VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `languages` (`language`)
SELECT DISTINCT CONCAT(UCASE(LEFT(language_name, 1)), SUBSTRING(language_name, 2)) AS language
FROM (
    SELECT LG1_1ST AS language_name FROM `18__catalog`
    UNION
    SELECT LG2_1ST AS language_name FROM `18__catalog`
    UNION
    SELECT LG3_1ST AS language_name FROM `18__catalog`
    UNION
    SELECT LG1_THIS AS language_name FROM `18__catalog`
    UNION
    SELECT LG2_THIS AS language_name FROM `18__catalog`
    UNION
    SELECT LG3_THIS AS language_name FROM `18__catalog`
) AS all_languages
WHERE TRIM(language_name) <> ''
GROUP BY LOWER(language_name), CONCAT(UCASE(LEFT(language_name, 1)), SUBSTRING(language_name, 2));

CREATE TABLE `document_languages` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    `languages_id` INT(11) NOT NULL,
    `document_id` INT(11) NOT NULL,
    `is_current_document` BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (`id`)
);

INSERT INTO `document_languages` (`languages_id`, `document_id`, `is_current_document`)
SELECT `languages`.`id`, `18__catalog`.`id`, FALSE AS `is_current_document`
FROM `languages`
CROSS JOIN `18__catalog`
WHERE 1=1
  AND (LOWER(`languages`.`language`) = LOWER(`18__catalog`.`LG1_1ST`) OR
       LOWER(`languages`.`language`) = LOWER(`18__catalog`.`LG2_1ST`) OR
       LOWER(`languages`.`language`) = LOWER(`18__catalog`.`LG3_1ST`) OR
       LOWER(`languages`.`language`) = LOWER(`18__catalog`.`LG1_THIS`) OR
       LOWER(`languages`.`language`) = LOWER(`18__catalog`.`LG2_THIS`) OR
       LOWER(`languages`.`language`) = LOWER(`18__catalog`.`LG3_THIS`));

UPDATE `document_languages` AS `ld`
JOIN `18__catalog` AS `c`
ON `ld`.`document_id` = `c`.`id`
JOIN `languages` AS `l`
ON `ld`.`languages_id` = `l`.`id`
SET `ld`.`is_current_document` =
    CASE
        WHEN `l`.`language` = `c`.`LG1_THIS` THEN TRUE
        WHEN `l`.`language` = `c`.`LG2_THIS` THEN TRUE
        WHEN `l`.`language` = `c`.`LG3_THIS` THEN TRUE
        ELSE FALSE
    END;

