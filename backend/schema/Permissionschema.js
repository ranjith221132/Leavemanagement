const mongoose = require("mongoose");

const PermissionSchema = new mongoose.Schema({
  employeeId: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  employeeName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  requestType: {
    type: String,
  },
  fromDate: {
    type: Date,
  },
  toDate: {
    type: Date,
  },
  session: {
    type: String,
  },
  Reason: {
    type: String,
  },
  fileAttachment: {
    data: Buffer,
    contentType: String,  
    filename: String, 
  },
});

module.exports = mongoose.model("permissionForm", PermissionSchema);
