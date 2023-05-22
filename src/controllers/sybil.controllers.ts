import getTableData, { tableParams } from "../utils/getTableData";

const sybilParams: tableParams = {
  tableName: "sybil_dot_org_address_verified_twitter",
};

const sybilUserParams: tableParams = {
  tableName: "sybil_dot_org_address_verified_twitter",
  tableId: "address",
};

export const getSybilsVerified = getTableData(sybilParams);
export const getSybilVerified = getTableData(sybilUserParams);
