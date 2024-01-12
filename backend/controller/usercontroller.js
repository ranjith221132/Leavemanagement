const Leave = require('../schema/Leaveschema');
const permission = require('../schema/Permissionschema')


const createform = async (req, res) => {
  
  try {
    const {
      employeeId,
      email,
      employeeName,
      phoneNumber,
      leaveType,
      fromDate,
      fromSession,
      toDate,
      toSession,
      reason,
      requestType,

    } = req.body || {};

    const newLeave = new Leave({
      employeeId,
      email,
      employeeName,
      phoneNumber,
      leaveType,
      fromDate,
      fromSession,
      toDate,
      toSession,
      reason,
    });

    const newPermission = new permission({
      employeeId,
      email,
      employeeName,
      phoneNumber,
      requestType,
      fromDate,
      fromSession,
      toDate,
      toSession,
      reason,
    });

    if (req.file) {
      newLeave.fileAttachment.data = req.file.buffer;
      newLeave.fileAttachment.contentType = req.file.mimetype;
      newLeave.fileAttachment.filename = req.file.originalname;
    
    }

    const result = await newLeave.save();


    res.status(200).json({ message: 'Leave application submitted successfully', result });
  } catch (error) {
    console.error('Error during leave application submission', error);
    res.status(500).send({ message: 'Server error' });
  }
};



// Get form
const getform = async (req, res) => {
  try {
    const db = await Leave.find();
    console.log(db);
 
    if (db.length > 0) {
      return res.status(200).json({ message: "Data fetched successfully", db });
    } else {
      return res.status(404).json({ message: "No data found in the DB" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createform, getform };
