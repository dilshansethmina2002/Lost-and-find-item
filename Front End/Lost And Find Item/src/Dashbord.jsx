import ResentItems from './ResentItem.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar.jsx';
import AddLostItem from './AddLostItem.jsx';
import AddFoundItem from './AddFoundItem.jsx';
import LostFoundText from './LostFoundText';

import React from 'react';

function Dashbord() {
  return (
    <>    
      <LostFoundText/>
      
      <div className='button-container'>
        <AddLostItem></AddLostItem> {/* Add Button */}
        <AddFoundItem></AddFoundItem> {/* Lost Button */}
      </div>
      
      <SideBar></SideBar>  {/* Side nav bar */}
      <ResentItems></ResentItems> {/* Recent Items */}
  
    </>
  );
}

export default Dashbord;