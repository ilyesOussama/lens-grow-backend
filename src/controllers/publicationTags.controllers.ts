import getTableData, { tableParams } from "../utils/getTableData";

const publicationsTagStatsParams: tableParams = {
  tableName: "public_publication_tag_stats",
};

const publicationTagStatParams: tableParams = {
  tableName: "public_publication_tag_stats",
  tableId: "tag",
};

const publicationsTagParams: tableParams = {
  tableName: "public_publication_tag",
};

const publicationTagParams: tableParams = {
  tableName: "public_publication_tag",
  tableId: "publication_id",
};

export const getPublicationsTagStats = getTableData(publicationsTagStatsParams);
export const getPublicationTagStat = getTableData(publicationTagStatParams);
export const getPublicationsTag = getTableData(publicationsTagParams);
export const getPublicationTag = getTableData(publicationTagParams);
