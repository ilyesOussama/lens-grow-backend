import getTableData from "../utils/getTableData";
import { tableParams } from "../utils/getTableData";

const appsAppPublicationsStatsParams: tableParams = {
  tableName: "public_approval_follower_user_data",
};

const appAppPublicationStatsParams: tableParams = {
  tableName: "public_approval_follower_user_data",
  tableId: "app_id",
};

const appsPubPublicationsStatsParams: tableParams = {
  tableName: "public_approval_follower",
};

const appPubPublicationStatsParams: tableParams = {
  tableName: "public_approval_follower",
  tableId: "publication_id",
};

const appsAppPublicationsTagsStatsParams: tableParams = {
  tableName: "public_approval_follower_user_data",
};

const appAppPublicationTagStatsParams: tableParams = {
  tableName: "public_approval_follower_user_data",
  tableId: "app_id",
};

const appsTagPublicationsTagsStatsParams: tableParams = {
  tableName: "public_approval_follower",
};

const appTagPublicationTagStatsParams: tableParams = {
  tableName: "public_approval_follower",
  tableId: "tag",
};

const appsAppProfilesStatsParams: tableParams = {
  tableName: "public_approval_follower_user_data",
};

const appAppProfileStatsParams: tableParams = {
  tableName: "public_approval_follower_user_data",
  tableId: "app_id",
};

const appsProfilesProfilesStatsParams: tableParams = {
  tableName: "public_approval_follower",
};

const appsProfileProfilesStatsParams: tableParams = {
  tableName: "public_approval_follower",
  tableId: "profile_id",
};

export const getAppsAppProfilesStats = getTableData(appsAppProfilesStatsParams);
export const getAppAppProfileStats = getTableData(appAppProfileStatsParams);
export const getAppsProfilesProfilesStats = getTableData(
  appsProfilesProfilesStatsParams
);
export const getAppProfileProfileStats = getTableData(
  appsProfileProfilesStatsParams
);

export const getAppsAppPublicationsStats = getTableData(
  appsAppPublicationsStatsParams
);
export const getAppAppPublicationStats = getTableData(
  appAppPublicationStatsParams
);
export const getAppPubPublicationsStats = getTableData(
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
