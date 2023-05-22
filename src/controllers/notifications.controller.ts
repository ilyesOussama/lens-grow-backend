import getTableData from "../utils/getTableData";

const notification = {
  tableName: "public_notification",
  tableId: "notification_id",
};

const notificationStats = {
  tableName: "public_notification_stats",
  tableId: "profile_id",
};

const notificationTtpe = {
  tableName: "public_notification_stats",
  tableId: "name",
};

export const getNotification = getTableData(notification);
export const getNotificationStats = getTableData(notificationStats);
export const getNotificationType = getTableData(notificationTtpe);
