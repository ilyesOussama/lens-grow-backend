import express from "express";
import {
  getPublicationCollectModuleCollectedRecords,
  getPublicationCollectModuleDetails,
  getPublicationCollectModuleMultirecipientDetails,
  getPublicationReferenceModuleDetails,
  getPublicationsCollectModuleCollectedRecords,
  getPublicationsCollectModuleDetails,
  getPublicationsCollectModuleMultirecipientDetails,
  getPublicationsReferenceModuleDetails,
} from "../controllers/publicationCollectReferenceModules.controllers";

const router = express.Router();

router.get("/collectedrecords", getPublicationsCollectModuleCollectedRecords);
router.get(
  "/collectedrecords/:id",
  getPublicationCollectModuleCollectedRecords
);

router.get("/collectdetails", getPublicationsCollectModuleDetails);
router.get("/collectdetails/:id", getPublicationCollectModuleDetails);

router.get(
  "/collectedmultireipient",
  getPublicationsCollectModuleMultirecipientDetails
);
router.get(
  "/collectedmultireipient/:id",
  getPublicationCollectModuleMultirecipientDetails
);

router.get("/refrencedetails", getPublicationsReferenceModuleDetails);
router.get("/refrencedetails/:id", getPublicationReferenceModuleDetails);

export default router;
