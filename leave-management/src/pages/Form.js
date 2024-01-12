import React, { useState, useEffect,useRef, useMemo} from 'react';
// import Sidebar from './sidebar';
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
// import { useSnackbar } from "notistack";
import FeedbackIcon from '@mui/icons-material/Feedback';
import IconButton from "@mui/material/IconButton";
import MiniDrawer from '../layout/nav';
 
const Formtable = () => {
  // const { enqueueSnackbar } = useSnackbar();
  const [rowData, setRowData] = useState([]);
  const gridRef = useRef();
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );
 
 
  const columnDefs = [
    { headerName: 'S.No', field: 'employee_ID' },
    { headerName: 'Form Id', field: 'employee_name' },
    { headerName: 'Status ', field: 'employee_email' },
    { headerName: 'Date Submission', field: 'gender' },
    { headerName: 'FormType', field: 'role' },
    { field: "Action", headerName: "View", cellRenderer: View }
  ];


  function View(params) {
    return (
      <div>
     
      </div>
    );
  }
 
  const handleClickOpen = (data, index) =>{
   
  }
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/getform');
        if (!response) {
          console.log('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setRowData(data.db);
      } catch (error) {
      
      }
    };
 
    fetchData();
  }, []);
 
  return (
    <div className="ag-theme-alpine" style={{ height: '200vh', width: '100%', margin:'80px'}}>
      <MiniDrawer />
      <AgGridReact
     
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection="multiple"
        />
    </div>
  );
};
 
export default Formtable;