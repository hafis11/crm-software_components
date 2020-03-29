import React from 'react';
import './App.css';
// import ProductCard from './component/productcard/productCard';
// import Addproduct from './component/AddProduct/addProduct';
// import SideMenu from './component/leadAdder/sideMenu'
import CallcheduleCard from './component/followUp/callScheduleCard/callScheduleCard'
import EmailSchedule from './component/followUp/emailScheduleCard/emailScheduleCard'
import CallTask from './component/followUp/callTask/callTask'
import EmailTask from './component/followUp/emailTask/emailTask'
import CallHistory from './component/followUp/callHistory/callHistory'
import EmailHistory from './component/followUp/emailHistory/emailHistory'

function App(){
  return (
    <div class="App d-flex flex-row ">
      <div class="d-flex flex-column my-view">
          <CallcheduleCard></CallcheduleCard>
          <EmailSchedule></EmailSchedule>
          <EmailSchedule></EmailSchedule>
          <EmailSchedule></EmailSchedule>
          <CallcheduleCard></CallcheduleCard>
          <CallcheduleCard></CallcheduleCard>
      </div>
      <div class="d-flex flex-column my-view1 justify-content-lg-around">
          <CallTask></CallTask>
          <EmailTask></EmailTask>
      </div>
      <div class="d-flex flex-column my-view">
          <CallHistory></CallHistory>
          <EmailHistory></EmailHistory>
          <CallHistory></CallHistory>
          <EmailHistory></EmailHistory>
          <CallHistory></CallHistory>
          <EmailHistory></EmailHistory>
          <CallHistory></CallHistory>
          <EmailHistory></EmailHistory>
          <CallHistory></CallHistory>
          <EmailHistory></EmailHistory>
          
      </div>
    </div>
  );
}

export default App;
