import ResentItems from './ResentItems.jsx';
import SideBar from './SideBar.jsx';
import AddLostItem from './AddLostItem.jsx';
import AddFoundItem from './AddFoundItem.jsx';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LostFoundText from './LostFoundText';



function App() {
  
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
  )
}

export default App
