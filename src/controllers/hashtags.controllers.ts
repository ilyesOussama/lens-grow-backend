import getTableData, { tableParams } from "../utils/getTableData";

const hashtagsParams: tableParams = {
  tableName: "public_hashtag",
};

const hashtagParams: tableParams = {
  tableName: "public_hashtag",
  tableId: "hashtag_id",
};

const hashtagsStatsParams: tableParams = {
  tableName: "public_hashtag_stats",
};

const hashtagStatsParams: tableParams = {
  tableName: "public_hashtag_stats",
  tableId: "hashtag",
};

export const getHashtags = getTableData(hashtagsParams);
export const getHashtag = getTableData(hashtagParams);
export const getHashtagsStats = getTableData(hashtagsStatsParams);
export const getHashtagStats = getTableData(hashtagStatsParams);
