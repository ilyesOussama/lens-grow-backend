import getTableData, { tableParams } from "../utils/getTableData";

const publicationsPointersParams: tableParams = {
  tableName: "public_publication_pointer",
};

const publicationPointerParams: tableParams = {
  tableName: "public_publication_pointer",
  tableId: "publication_id",
};

export const getPublicationsPointers = getTableData(publicationsPointersParams);
export const getPublicationPointer = getTableData(publicationPointerParams);
