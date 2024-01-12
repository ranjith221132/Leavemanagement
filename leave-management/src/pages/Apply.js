// LeaveForm.js
import React, { useState } from "react";
import MiniDrawer from "../layout/nav";


import FormLeave from "../form/Leaveform";
import FormPermission from "../form/wfh-permission";


const LeaveForm = () => {


  return (
    <div>
      <MiniDrawer/>
      <div>
      <FormLeave/>
      <FormPermission/>
      </div>
    </div>
  );
};

export default LeaveForm;
