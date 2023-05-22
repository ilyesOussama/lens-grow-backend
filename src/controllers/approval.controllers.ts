import getTableData from "../utils/getTableData";
import { tableParams } from "../utils/getTableData";

const approvalFollwersUsersDataParams: tableParams = {
  tableName: "public_approval_follower_user_data",
};

const approvalFollwerUserDataParams: tableParams = {
  tableName: "public_approval_follower_user_data",
  tableId: "address",
};

const approvalFollowersParams: tableParams = {
  tableName: "public_approval_follower",
};

const approvalFollowerParams: tableParams = {
  tableName: "public_approval_follower",
  tableId: "address",
};

export const getApprovalFollowersUsersData = getTableData(
  approvalFollwersUsersDataParams
);
export const getApprovalFollowerUserData = getTableData(
  approvalFollwerUserDataParams
);
export const getApprovalFollowers = getTableData(approvalFollowersParams);
export const getApprovalFollower = getTableData(approvalFollowerParams);
