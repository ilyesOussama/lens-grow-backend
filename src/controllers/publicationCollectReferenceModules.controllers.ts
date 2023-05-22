import getTableData, { tableParams } from "../utils/getTableData";

const publicationsCollectModuleDetailsParams: tableParams = {
  tableName: "public_publication_collect_module_details",
};

const publicationCollectModuleDetailsParams: tableParams = {
  tableName: "public_publication_collect_module_details",
  tableId: "publication_id",
};

const publicationsCollectModuleCollectedRecordsParams: tableParams = {
  tableName: "public_publication_collect_module_collected_records",
};

const publicationCollectModuleCollectedRecordsParams: tableParams = {
  tableName: "public_publication_collect_module_collected_records",
  tableId: "record_id",
};

const publicationCollectModuleMultirecipientDetailsParams: tableParams = {
  tableName: "public_publication_collect_module_multirecipient_details",
};

const publicationsCollectModuleMultirecipientDetailsParams: tableParams = {
  tableName: "public_publication_collect_module_multirecipient_details",
  tableId: "publication_id",
};

const publicationsReferenceModuleDetailsParams: tableParams = {
  tableName: "public_publication_reference_module_details",
};

const publicationReferenceModuleDetailsParams: tableParams = {
  tableName: "public_publication_reference_module_details",
  tableId: "publication_id",
};

export const getPublicationsCollectModuleDetails = getTableData(
  publicationsCollectModuleDetailsParams
);
export const getPublicationCollectModuleDetails = getTableData(
  publicationCollectModuleDetailsParams
);
export const getPublicationsCollectModuleCollectedRecords = getTableData(
  publicationsCollectModuleCollectedRecordsParams
);
export const getPublicationCollectModuleCollectedRecords = getTableData(
  publicationCollectModuleCollectedRecordsParams
);
export const getPublicationCollectModuleMultirecipientDetails = getTableData(
  publicationCollectModuleMultirecipientDetailsParams
);
export const getPublicationsCollectModuleMultirecipientDetails = getTableData(
  publicationsCollectModuleMultirecipientDetailsParams
);
export const getPublicationsReferenceModuleDetails = getTableData(
  publicationsReferenceModuleDetailsParams
);
export const getPublicationReferenceModuleDetails = getTableData(
  publicationReferenceModuleDetailsParams
);
