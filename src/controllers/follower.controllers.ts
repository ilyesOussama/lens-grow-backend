import getTableData, { tableParams } from "../utils/getTableData";

const followersProfilesParams: tableParams = {
  tableName: "public_follower_profile_data",
};

const followerProfileParams: tableParams = {
  tableName: "public_follower_profile_data",
  tableId: "profile_id",
};

const followersUsersParams: tableParams = {
  tableName: "public_follower_user_data",
};

const followerUserParams: tableParams = {
  tableName: "public_follower_user_data",
  tableId: "address",
};
const followers: tableParams = {
  tableName: "public_follower",
};

const follower: tableParams = {
  tableName: "public_follower",
  tableId: "address",
};

export const getFollowersProfiles = getTableData(followersProfilesParams);
export const getFollowerProfile = getTableData(followerProfileParams);
export const getFollowersUsers = getTableData(followersUsersParams);
export const getFollowerUser = getTableData(followerUserParams);
export const getFollowers = getTableData(followers);
export const getFollower = getTableData(follower);
