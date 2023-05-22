import getTableData from "../utils/getTableData";
import { tableParams } from "../utils/getTableData";

const appsAppPublicationsStatsParams: tableParams = {
  tableName: "public_app_publication_stats",
};

const appAppPublicationStatsParams: tableParams = {
  tableName: "public_app_publication_stats",
  tableId: "app_id",
};

const appsPubPublicationsStatsParams: tableParams = {
  tableName: "public_app_publication_stats",
};

const appPubPublicationStatsParams: tableParams = {
  tableName: "public_app_publication_stats",
  tableId: "publication_id",
};

const appsAppPublicationsTagsStatsParams: tableParams = {
  tableName: "public_app_publication_tags_stats",
};

const appAppPublicationTagStatsParams: tableParams = {
  tableName: "public_app_publication_tags_stats",
  tableId: "app_id",
};

const appsTagPublicationsTagsStatsParams: tableParams = {
  tableName: "public_app_publication_tags_stats",
};

const appTagPublicationTagStatsParams: tableParams = {
  tableName: "public_app_publication_tags_stats",
  tableId: "tag",
};

const appsAppProfilesStatsParams: tableParams = {
  tableName: "public_app_profile_stats",
};

const appAppProfileStatsParams: tableParams = {
  tableName: "public_app_profile_stats",
  tableId: "app_id",
};

const appsProfilesProfilesStatsParams: tableParams = {
  tableName: "public_app_profile_stats",
};

const appsProfileProfilesStatsParams: tableParams = {
  tableName: "public_app_profile_stats",
  tableId: "profile_id",
};

export const getAppsAppPublicationsStats = getTableData(
  appsAppPublicationsStatsParams
);

export const getAppAppPublicationStats = getTableData(
  appAppPublicationStatsParams
);

export const getAppsPubPublicationsStats = getTableData(
  appsPubPublicationsStatsParams
);

export const getAppPubPublicationStats = getTableData(
  appPubPublicationStatsParams
);

export const getAppsAppPublicationsTagsStats = getTableData(
  appsAppPublicationsTagsStatsParams
);

export const getAppAppPublicationTagStats = getTableData(
  appAppPublicationTagStatsParams
);

export const getAppsTagPublicationsTagsStats = getTableData(
  appsTagPublicationsTagsStatsParams
);

export const getAppTagPublicationTagStats = getTableData(
  appTagPublicationTagStatsParams
);
export const getAppsAppProfilesStats = getTableData(appsAppProfilesStatsParams);

export const getAppAppProfileStats = getTableData(appAppProfileStatsParams);

export const getAppsProfilesProfilesStats = getTableData(
  appsProfilesProfilesStatsParams
);

export const getAppsProfileProfilesStats = getTableData(
  appsProfileProfilesStatsParams
);
