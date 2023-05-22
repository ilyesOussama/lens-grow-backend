import getTableData from "../utils/getTableData";

const indexedTransactionsParams = {
  tableName: "public_indexed_transaction",
};

const indexedTransactionParams = {
  tableName: "public_indexed_transaction",
  tableId: "block_hash",
};

export const getIndexedTransactions = getTableData(indexedTransactionsParams);
export const getIndexedTransaction = getTableData(indexedTransactionParams);
