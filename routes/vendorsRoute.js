import express from "express";
import { Vendor } from "../models/vendorModel.js";
import logger from "../logger.js";

const router = express.Router();

// Save a new Vendor

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

// Get all vendors
router.get("/", async (request, response) => {
  try {
    const vendors = await Vendor.find({});

    return response.status(200).json({
      count: vendors.length,
      data: vendors,
    });
  } catch (error) {
    logger.log("error", error.message);
    response.status(500).send({ message: error.message });
  }
});

// Get a particular vendor by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const vendor = await Vendor.findById(id);
    return response.status(200).json(vendor);
  } catch (error) {
    logger.log("error", error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
