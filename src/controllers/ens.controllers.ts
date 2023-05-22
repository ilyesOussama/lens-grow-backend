import getTableData from "../utils/getTableData";
import { tableParams } from "../utils/getTableData";

const ensParams: tableParams = {
  tableName: "ens_address_reverse_record",
};
const addressReverseRecord: tableParams = {
  tableName: "ens_address_reverse_record",
  tableId: "address",
};

export const getEnsReverseRecord = getTableData(ensParams);
export const getAddressReverseRecord = getTableData(addressReverseRecord);
