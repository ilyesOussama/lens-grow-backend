import getTableData, { tableParams } from "../utils/getTableData";

const publicationsStatsParams: tableParams = {
  tableName: "public_publication_stats",
};
const publicationStatsParams: tableParams = {
  tableName: "public_publication_stats",
  tableId: "publication_id",
};

export const getPublicationsStats = getTableData(publicationsStatsParams);
export const getPublicationStats = getTableData(publicationStatsParams);
