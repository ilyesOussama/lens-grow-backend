import getTableData, { tableParams } from "../utils/getTableData";

const reorBlocksParams: tableParams = {
  tableName: "public_reorg_block_status",
};
const reorBlockParams: tableParams = {
  tableName: "public_reorg_block_status",
  tableId: "record_id",
};

export const getReorgBlocks = getTableData(reorBlocksParams);
export const getReorgBlock = getTableData(reorBlockParams);
