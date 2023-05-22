import getTableData, { tableParams } from "../utils/getTableData";

const publicationsReactionsRecordsParams: tableParams = {
  tableName: "public_publication_reaction_records",
};

const publicationReactionRecordsParams: tableParams = {
  tableName: "public_publication_reaction_records",
  tableId: "record_id",
};

export const getPublicationsReactionsRecords = getTableData(
  publicationsReactionsRecordsParams
);
export const getPublicationReactionRecords = getTableData(
  publicationReactionRecordsParams
);
