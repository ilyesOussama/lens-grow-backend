import getTableData from "../utils/getTableData";
import { tableParams } from "../utils/getTableData";

const worldCoinBlocksParams: tableParams = {
  tableName: "worldcoin_last_seen_block_info",
};
const worldCoinBlockParams: tableParams = {
  tableName: "worldcoin_last_seen_block_info",
  tableId: "block_hash",
};

const worldcoinHumansCheckParams: tableParams = {
  tableName: "worldcoin_human_check",
};

const worldcoinHumanCheckParams: tableParams = {
  tableName: "worldcoin_human_check",
  tableId: "profile_id",
};

export const getWorldcoinBlocksInfo = getTableData(worldCoinBlocksParams);
export const getWorldcoinBlockInfo = getTableData(worldCoinBlockParams);
export const getWorldcoinHumansCheck = getTableData(worldcoinHumansCheckParams);
export const getWorldcoinHumanCheck = getTableData(worldcoinHumanCheckParams);
