import getTableData, { tableParams } from "../utils/getTableData";

const pohParams: tableParams = {
  tableName: "proof_of_humanity_address_to_proof_record",
};

export const getPOH = getTableData(pohParams);
