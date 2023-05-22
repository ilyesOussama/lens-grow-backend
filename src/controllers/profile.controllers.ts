import getTableData from "../utils/getTableData";

const profileDispatcherParams = {
  tableName: "public_profile_dispatcher",
  tableId: "profile_id",
};

const ProfileFollowNftParams = {
  tableName: "public_profile_follow_nft",
  tableId: "profile_id",
};

const ProfileFollowModuleFollowRecordParams = {
  tableName: "public_profile_follow_module_follow_record",
  tableId: "profile_id",
};

const profileParams = {
  tableName: "public_profile",
  tableId: "profile_id",
};

const profileRecommendedDismissedParams = {
  tableName: "public_profile_recommended_dismissed",
  tableId: "profile_id",
};

const profileNftGalleryParams = {
  tableName: "public_profile_nft_gallery",
  tableId: "profile_id",
};

const profileStatsParams = {
  tableName: "public_profile_stats",
  tableId: "profile_id",
};

const profileCuratedParams = {
  tableName: "public_profile_stats",
  tableId: "profile_id",
};

const profileFollowModuleDetailsParams = {
  tableName: "public_profile_follow_module_details",
  tableId: "profile_id",
};

const profileFollowModuleDetailsHistoryParams = {
  tableName: "public_profile_follow_module_details_history",
  tableId: "profile_id",
};

export const getProfileDispatcher = getTableData(profileDispatcherParams);
export const getProfileFollowNft = getTableData(ProfileFollowNftParams);
export const getProfileFollowModuleFollowRecord = getTableData(
  ProfileFollowModuleFollowRecordParams
);
export const getProfile = getTableData(profileParams);
export const getProfileRecommendedDismissed = getTableData(
  profileRecommendedDismissedParams
);
export const getProfileNftGallery = getTableData(profileNftGalleryParams);
export const getProfileStats = getTableData(profileStatsParams);
export const getProfileCurated = getTableData(profileCuratedParams);
export const getProfileFollowModuleDetails = getTableData(
  profileFollowModuleDetailsParams
);
export const getProfileFollowModuleDetailsHistory = getTableData(
  profileFollowModuleDetailsHistoryParams
);
