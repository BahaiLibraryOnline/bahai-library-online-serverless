DROP TABLE IF EXISTS `document_contributors`;
DROP TABLE IF EXISTS `contributors`;
DROP TABLE IF EXISTS `contributor_roles`;

CREATE TABLE `contributors` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_names` VARCHAR(255) DEFAULT NULL,
  `surnames` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `contributors` (first_names, surnames)
SELECT
    first_names,
    surnames
FROM (
    SELECT DISTINCT
        CONTRIB1_1ST AS first_names,
        CONTRIB1_2ND AS surnames
    FROM `18__catalog`
    WHERE (CONTRIB1_1ST IS NOT NULL AND CONTRIB1_1ST <> '') OR (CONTRIB1_2ND IS NOT NULL AND CONTRIB1_2ND <> '')

    UNION

    SELECT DISTINCT
        CONTRIB2_1ST AS first_names,
        CONTRIB2_2ND AS surnames
    FROM `18__catalog`
    WHERE (CONTRIB2_1ST IS NOT NULL AND CONTRIB2_1ST <> '') OR (CONTRIB2_2ND IS NOT NULL AND CONTRIB2_2ND <> '')
) AS contributors
GROUP BY first_names, surnames;

CREATE TABLE `contributor_roles` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `role` VARCHAR(255) DEFAULT NULL,
  `abbreviation` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `contributor_roles` (role)
SELECT
    role
FROM (
    SELECT DISTINCT
        CONTRIB1_JOB AS role
    FROM `18__catalog`
    WHERE (CONTRIB1_JOB IS NOT NULL AND CONTRIB1_JOB <> '')

    UNION

    SELECT DISTINCT
        CONTRIB2_JOB AS role
    FROM `18__catalog`
    WHERE (CONTRIB2_JOB IS NOT NULL AND CONTRIB2_JOB <> '')
) AS roles
GROUP BY role;

CREATE TABLE `document_contributors` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `document_id` INT(11) UNSIGNED NOT NULL,
  `contributor_id` INT(11) UNSIGNED NOT NULL,
  `role_id` INT(11) UNSIGNED,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `document_contributors` (document_id, contributor_id, role_id)
SELECT c.id AS document_id, a.id AS contributor_id, COALESCE(r.id, NULL) AS role_id
FROM `18__catalog` c
LEFT JOIN `contributors` a ON (
    (a.first_names = c.CONTRIB1_1ST AND a.surnames = c.CONTRIB1_2ND) OR
    (a.first_names = c.CONTRIB2_1ST AND a.surnames = c.CONTRIB2_2ND)
)
LEFT JOIN `contributor_roles` r ON (
    (r.role = c.CONTRIB1_JOB) OR
    (r.role = c.CONTRIB2_JOB)
)
WHERE c.id IS NOT NULL AND a.id IS NOT NULL;
