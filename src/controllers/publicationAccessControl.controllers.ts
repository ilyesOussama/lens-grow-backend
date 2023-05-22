import getTableData, { tableParams } from "../utils/getTableData";

const publicationsAccessControlParams: tableParams = {
  tableName: "public_publication_access_control",
};

const publicationAccessControlParams: tableParams = {
  tableName: "public_publication_access_control",
  tableId: "publication_id",
};
const publicationsAccessControlPendingParams: tableParams = {
  tableName: "public_publication_access_control_pending",
};

const publicationAccessControlPendingParams: tableParams = {
  tableName: "public_publication_access_control_pending",
  tableId: "content_uri",
};

export const getPublicationsAccessControl = getTableData(
  publicationsAccessControlParams
);
export const getPublicationAccessControl = getTableData(
  publicationAccessControlParams
);
export const getPublicationsAccessControlPending = getTableData(
  publicationsAccessControlPendingParams
);
export const getPublicationAccessControlPending = getTableData(
  publicationAccessControlPendingParams
);
