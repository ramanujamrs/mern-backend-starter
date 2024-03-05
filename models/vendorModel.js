import mongoose from "mongoose";

const vendorSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  active: {
    type: String,
    required: true,
  },
  registeredDate: {
    type: Date,
    required: false,
  },
});

export const Vendor = mongoose.model("Vendor", vendorSchema);
