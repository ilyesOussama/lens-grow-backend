import getTableData, { tableParams } from "../utils/getTableData";

const followsNftsParams: tableParams = {
  tableName: "public_follow_nft_ownership",
};

const followNftParams: tableParams = {
  tableName: "public_follow_nft_ownership",
  tableId: "owner_address_id",
};

const commentsNftsParams: tableParams = {
  tableName: "public_collect_comment_nft_ownership",
};

const commentNftParams: tableParams = {
  tableName: "public_collect_comment_nft_ownership",
  tableId: "owner_address",
};
const postsNftsParams: tableParams = {
  tableName: "public_collect_post_nft_ownership",
};

const postNftsParams: tableParams = {
  tableName: "public_collect_post_nft_ownership",
  tableId: "owner_address",
};

export const getFollowsNfts = getTableData(followsNftsParams);
export const getFollowNft = getTableData(followNftParams);
export const getCommentsNfts = getTableData(commentsNftsParams);
export const getCommentNft = getTableData(commentNftParams);
export const getPostsNfts = getTableData(postsNftsParams);
export const getPostNft = getTableData(postNftsParams);
