DROP TABLE IF EXISTS `document_collections`;
DROP TABLE IF EXISTS `collections`;

CREATE TABLE `collections` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    `collection` VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `collections` (`collection`)
SELECT DISTINCT CONCAT(UCASE(LEFT(collection_name, 1)), SUBSTRING(collection_name, 2)) AS collection
FROM (
    SELECT COLLECTION1 AS collection_name FROM `18__catalog`
    UNION
    SELECT COLLECTION2 AS collection_name FROM `18__catalog`
    UNION
    SELECT COLLECTION3 AS collection_name FROM `18__catalog`
) AS all_collections
WHERE TRIM(collection_name) <> '' AND LOWER(collection_name) <> 'none'
GROUP BY LOWER(collection_name), CONCAT(UCASE(LEFT(collection_name, 1)), SUBSTRING(collection_name, 2));

CREATE TABLE `document_collections` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    `collections_id` INT(11) NOT NULL,
    `document_id` INT(11) NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO `document_collections` (`collections_id`, `document_id`)
SELECT `collections`.`id`, `18__catalog`.`id`
FROM `collections`
CROSS JOIN `18__catalog`
WHERE 1=1
  AND (LOWER(`collections`.`collection`) = LOWER(`18__catalog`.`COLLECTION1`) OR
       LOWER(`collections`.`collection`) = LOWER(`18__catalog`.`COLLECTION2`) OR
       LOWER(`collections`.`collection`) = LOWER(`18__catalog`.`COLLECTION3`));

