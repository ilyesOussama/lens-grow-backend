import getTableData from "../utils/getTableData";

const lastSeenBlocksInfoParams = {
  tableName: "public_last_seen_block_info",
};

const lastSeenBlockInfoParams = {
  tableName: "public_last_seen_block_info",
  tableId: "block_hash",
};

export const getLastSeenBlocksInfoParams = getTableData(
  lastSeenBlocksInfoParams
);
export const getLastSeenBlockInfoParams = getTableData(lastSeenBlockInfoParams);
