DROP TABLE IF EXISTS `document_authors`;
DROP TABLE IF EXISTS `authors`;

CREATE TABLE `authors` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_names` VARCHAR(255) DEFAULT NULL,
  `surnames` VARCHAR(255) DEFAULT NULL,
  `published_first_names` VARCHAR(255) DEFAULT NULL,
  `published_surnames` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `authors` (first_names, surnames, published_first_names, published_surnames)
SELECT
    first_names,
    surnames,
    MAX(published_first_names) AS published_first_names,
    MAX(published_surnames) AS published_surnames
FROM (
    SELECT DISTINCT
        AU1_1ST AS first_names,
        AU1_2ND AS surnames,
        AU1_1ST_PUB AS published_first_names,
        AU1_2ND_PUB AS published_surnames
    FROM `18__catalog`
    WHERE (AU1_1ST IS NOT NULL AND AU1_1ST <> '') OR (AU1_2ND IS NOT NULL AND AU1_2ND <> '')

    UNION

    SELECT DISTINCT
        AU2_1ST AS first_names,
        AU2_2ND AS surnames,
        NULL AS published_first_names,
        NULL AS published_surnames
    FROM `18__catalog`
    WHERE (AU2_1ST IS NOT NULL AND AU2_1ST <> '') OR (AU2_2ND IS NOT NULL AND AU2_2ND <> '')

    UNION

    SELECT DISTINCT
        AU3_1ST AS first_names,
        AU3_2ND AS surnames,
        NULL AS published_first_names,
        NULL AS published_surnames
    FROM `18__catalog`
    WHERE (AU3_1ST IS NOT NULL AND AU3_1ST <> '') OR (AU3_2ND IS NOT NULL AND AU3_2ND <> '')

    UNION

    SELECT DISTINCT
        AU4_1ST AS first_names,
        AU4_2ND AS surnames,
        NULL AS published_first_names,
        NULL AS published_surnames
    FROM `18__catalog`
    WHERE (AU4_1ST IS NOT NULL AND AU4_1ST <> '') OR (AU4_2ND IS NOT NULL AND AU4_2ND <> '')
) AS authors
GROUP BY first_names, surnames;

CREATE TABLE `document_authors` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `document_id` INT(11) UNSIGNED NOT NULL,
  `author_id` INT(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `document_authors` (document_id, author_id)
SELECT c.id AS document_id, a.id AS author_id
FROM `18__catalog` c
LEFT JOIN `authors` a ON (
    (a.first_names = c.AU1_1ST AND a.surnames = c.AU1_2ND) OR
    (a.first_names = c.AU2_1ST AND a.surnames = c.AU2_2ND) OR
    (a.first_names = c.AU3_1ST AND a.surnames = c.AU3_2ND) OR
    (a.first_names = c.AU4_1ST AND a.surnames = c.AU4_2ND)
)
WHERE a.id IS NOT NULL;
