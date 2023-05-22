import getTableData from "../utils/getTableData";

const collectModulesWhitelistedParams = {
  tableName: "public_mention",
};

const collectModuleWhitelistedParams = {
  tableName: "public_mention",
  tableId: "mention_id",
};

const followModulesWhitelistedParams = {
  tableName: "public_mention",
};

const followModuleWhitelistedParams = {
  tableName: "public_mention",
  tableId: "mention_id",
};

const refrenceModulesWhitelistedParams = {
  tableName: "public_mention",
};

const refrenceModuleWhitelistedParams = {
  tableName: "public_mention",
  tableId: "mention_id",
};

export const getCollectModulesWhitelisted = getTableData(
  collectModulesWhitelistedParams
);
export const getCollectModuleWhitelisted = getTableData(
  collectModuleWhitelistedParams
);
export const getFollowModulesWhitelisted = getTableData(
  followModulesWhitelistedParams
);
export const getFollowModuleWhitelisted = getTableData(
  followModuleWhitelistedParams
);
export const getRefrenceModulesWhitelisted = getTableData(
  refrenceModulesWhitelistedParams
);
export const getRefrenceModuleWhitelisted = getTableData(
  refrenceModuleWhitelistedParams
);
