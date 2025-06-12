import ResentItems from './ResentItems.jsx';
import LostFindButton from './LostFindButton.jsx';
import SideBar from './SideBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  
  return (
    <>
      <SideBar></SideBar>
      <LostFindButton></LostFindButton>
      <ResentItems></ResentItems>
    </>
  )
}

export default App
