import ResentItems from './ResentItems.jsx';
import LostFindButton from './LostFindButton.jsx';
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
        <AddLostItem></AddLostItem>
        <AddFoundItem></AddFoundItem>
      </div>
      <SideBar></SideBar>
      <ResentItems></ResentItems>
      


    </>
  )
}

export default App
