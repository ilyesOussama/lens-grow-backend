import express, { Express } from "express";
import dotenv from "dotenv";

import tablesRoutes from "./routes/tables.routes";
import profileRoutes from "./routes/profile.routes";
import ensRoutes from "./routes/ens.routes";
import pohRoutes from "./routes/poh.routes";
import sybilRoutes from "./routes/sybil.routes";
import worldcoinRoutes from "./routes/worldcoin.routes";
import approvalRoutes from "./routes/approval.routes";
import appstatsRoutes from "./routes/appstats.routes";
import followerRoutes from "./routes/follower.routes";
import hashtagsRoutes from "./routes/hashtags.routes";
import indexedIntractionRoutes from "./routes/indexedtransactions.routes";
import lastSeenBlockInfoRoutes from "./routes/lastSeenBlockInfo.routes";
import mentionsRoutes from "./routes/mentions.routes";
import moduleWhitelistsRoutes from "./routes/moduleWhitelists.routes";
import notificationsRoutes from "./routes/notifications.routes";
import postsRoutes from "./routes/posts.routes";
import protocolStateRoutes from "./routes/protocolState.routes";
import publicationfollowNftRoutes from "./routes/pubfollowNft.routes";
import publicationAccessControlRoutes from "./routes/publicationAccessControl.routes";
import publicationCollectReferenceModulesRoutes from "./routes/publicationCollectReferenceModules.routes";
import publicationPointerRoutes from "./routes/publicationPointer.routes";
import publicationStatsRoutes from "./routes/publicationStats.routes";
import publicationTagsRoutes from "./routes/publicationTags.routes";
import reactionsRoutes from "./routes/reactions.routes";
import reorgBlockStatusRoutes from "./routes/reorgBlockStatus.routes";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/publicationaccesscontrol", publicationAccessControlRoutes);
app.use(
  "/api/v1/publicationcollectreferencemodules",
  publicationCollectReferenceModulesRoutes
);
app.use("/api/v1/publicationpointer", publicationPointerRoutes);
app.use("/api/v1/publicationstats", publicationStatsRoutes);
app.use("/api/v1/publicationtags", publicationTagsRoutes);
app.use("/api/v1/reactions", reactionsRoutes);
app.use("/api/v1/reorgBlockStatus", reorgBlockStatusRoutes);
app.use("/api/v1/approval", approvalRoutes);
app.use("/api/v1/appstats", appstatsRoutes);
app.use("/api/v1/follower", followerRoutes);
app.use("/api/v1/hashtags", hashtagsRoutes);
app.use("/api/v1/indexedintraction", indexedIntractionRoutes);
app.use("/api/v1/lastseenblockinfo", lastSeenBlockInfoRoutes);
app.use("/api/v1/mentions", mentionsRoutes);
app.use("/api/v1/modulewhitelists", moduleWhitelistsRoutes);
app.use("/api/v1/notifications", notificationsRoutes);
app.use("/api/v1/posts", postsRoutes);
app.use("/api/v1/protocolstate", protocolStateRoutes);
app.use("/api/v1/publicationfollownftroutes", publicationfollowNftRoutes);
app.use("/api/v1/tables", tablesRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/ens", ensRoutes);
app.use("/api/v1/poh", pohRoutes);
app.use("/api/v1/sybil", sybilRoutes);
app.use("/api/v1/worldcoin", worldcoinRoutes);

export default app;
