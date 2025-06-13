import ResentItems from './ResentItems.jsx';
import LostFindButton from './LostFindButton.jsx';
import SideBar from './SideBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LostFoundText from './LostFoundText';



function App() {
  
  return (
    <>
      <LostFoundText/>
      <SideBar></SideBar>
      <LostFindButton></LostFindButton>
      <ResentItems></ResentItems>


    </>
  )
}

export default App
