import getTableData from "../utils/getTableData";

const mentionsParams = {
  tableName: "public_mention",
};

const mentionParams = {
  tableName: "public_mention",
  tableId: "mention_id",
};

const mentionsStatsParams = {
  tableName: "public_mention_stats",
};

const mentionStatsParams = {
  tableName: "public_mention_stats",
  tableId: "mention",
};

export const getMentions = getTableData(mentionsParams);
export const getMention = getTableData(mentionParams);
export const getMentionsStats = getTableData(mentionsStatsParams);
export const getMentionStats = getTableData(mentionStatsParams);
