DROP TABLE IF EXISTS `documents`;

CREATE TABLE documents AS
SELECT id,
  FILE_NAME AS filename,
  TITLE_THIS AS title,
  SUBTITLE_THIS AS subtitle,
  BLURB AS description,
  CONTENT AS html_content,
  NOTES AS notes,
  phelps2 AS phelps_info,
  CONTENT_SIZE AS file_size,
  PAGE_TOTAL AS page_total,
  CROSSREF AS cross_references,
  AUDIO18 AS audio_version,
  PERMISSION AS permission_type,
  views
  FROM `18__catalog`;