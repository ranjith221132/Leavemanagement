const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
  employeeId: { type: Number },
  email: { type: String, unique: true },
  employeeName: { type: String },
  phoneNumber: { type: String },
  leaveType: { type: String },
  fromDate: { type: Date },
  fromSession: { type: String },
  toDate: { type: Date },
  toSession: { type: String },
  reason: { type: String },
  fileAttachment: {
    data: Buffer,
    contentType: String,
    filename: String,
  },
});

module.exports = mongoose.model("Leaveform", LeaveSchema);
