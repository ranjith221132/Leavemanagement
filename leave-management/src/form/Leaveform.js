import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import axios from 'axios';


export default function FormLeave() {

  const initialData = {
    employeeId: "",
    email: "",
    employeeName: "",
    phoneNumber: "",
    leaveType: "",
    fromDate: "",
    fromSession: "",
    toDate: "",
    toSession: "",
    Reason: "",
    fileAttachment: null,
  };

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(initialData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setData({
      ...data,
      fileAttachment: e.target.files[0],
    });
  };


  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
  
    for (const key in data) {
      formData.append(key, data[key]);
    }
  
    // Append the file to the FormData
    formData.append('fileAttachment', data.fileAttachment);
  
    await axios.post("http://localhost:4000/createform", formData)
      .then((response) => {
        console.log("Step 1 API response:", response);
        setData(initialData);
      })
      .catch((error) => {
        console.error("Step 1 API error:", error);
      });
  
    handleClose();
  };
  
  const Appl = [
    { value: 'Sathya', label: 'Sathyakala' },
    { value: 'sobi', label: 'sobi' },
    { value: 'kavya', label: 'kavya' },

  ];

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Leave Form
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Leave Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the leave form.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="employeeId"
              name="employeeId"
              label="Employee ID"
              type="number"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              required
              margin="dense"
              id="email"
              name="email"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              required
              margin="dense"
              id="employeeName"
              name="employeeName"
              label="Employee Name"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              required
              margin="dense"
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              type="tel"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              required
              select
              margin="dense"
              id="leaveType"
              name="leaveType"
              label="Leave Type"
              fullWidth
              variant="standard"
              onChange={handleChange}
            >
              <MenuItem value="sick">Planned </MenuItem>
              <MenuItem value="vacation">Unplanned</MenuItem>
             
            </TextField>
           
            <TextField
              required
              select
              margin="dense"
              id="applyto"
              name="Applyto"
              label="apply to"
              fullWidth
              variant="standard"
              onChange={handleChange}
            >
              {Appl.map((Appl) => (
                <MenuItem key={Appl.value} value={Appl.value}>
                  {Appl.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              required
              margin="dense"
              id="fromDate"
              name="fromDate"
              label="From Date"
              type="date"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />

            <TextField
              required
              select
              margin="dense"
              id="fromsession"
              name="fromsession"
              label="From Session"
              fullWidth
              variant="standard"
              onChange={handleChange}
            >
              <MenuItem value="sick">Session1 </MenuItem>
              <MenuItem value="vacation">Session2</MenuItem>
            </TextField>

            <TextField
              required
              margin="dense"
              id="todate"
              name="todate"
              label="To Date"
              type="date"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />

                <TextField
              required
              select
              margin="dense"
              id="tosession"
              name="tosession"
              label="To session"
              fullWidth
              variant="standard"
              onChange={handleChange}
            >
              <MenuItem value="sick">Session1 </MenuItem>
              <MenuItem value="vacation">Session2</MenuItem>
            </TextField>

            <TextareaAutosize
              required
              minRows={3}
              id="reason"
              name="reason"
              placeholder="Reason"
              style={{ width: '100%', marginTop: '10px' }}
              onChange={handleChange}
            />

            <input
              accept="image/*,application/pdf"
              id="fileAttachment"
              name="fileAttachment"
              type="file"
              style={{ marginTop: '10px' }}
              onChange={handleFileChange}
            />
            
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>Apply</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
