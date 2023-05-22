import getTableData, { tableParams } from "../utils/getTableData";

const postsCommentsParams: tableParams = {
  tableName: "public_post_comment",
};
const postCommentParams: tableParams = {
  tableName: "public_post_comment",
  tableId: "comment_id",
};
const profilesPostsParams: tableParams = {
  tableName: "public_profile_post",
};
const profilePostParams: tableParams = {
  tableName: "public_profile_post",
  tableId: "post_id",
};

export const getPostsComments = getTableData(postsCommentsParams);
export const getPostComment = getTableData(postCommentParams);
export const getProfilesPosts = getTableData(profilesPostsParams);
export const getProfilePost = getTableData(profilePostParams);
