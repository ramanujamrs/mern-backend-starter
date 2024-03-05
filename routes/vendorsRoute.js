import express from "express";
import { Vendor } from "../models/vendorModel.js";
import logger from "../logger.js";

const router = express.Router();

//Route to save a new Vendor

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.firstName ||
      !request.body.lastName ||
      !request.body.active
    ) {
      logger.log(
        "info",
        request.body.firstName + request.body.lastName + request.body.active
      );
      return response.status(400).send({
        message: "Enter all required fields - FirstName, LastName, active",
      });
    }

    const newVendor = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      active: request.body.active,
    };
    const vendor = await Vendor.create(newVendor);

    return response.status(201).send(vendor);
  } catch (error) {
    logger.log("error", error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
