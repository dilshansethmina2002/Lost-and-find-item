import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import './SideBar.css'
import { Link } from "react-router-dom";

import {
  CBadge,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CNavGroup,
  CNavItem,
  CNavTitle,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilCloudDownload, cilLayers, cilPuzzle, cilSpeedometer,cilZoom,cilBell ,cilAddressBook,cilBlur} from '@coreui/icons'

function SideBar() {
  return (
    <CSidebar className="border-end" unfoldable>
      <CSidebarHeader className="border-bottom">
        <CIcon className='nav-icon' icon={cilBlur}></CIcon>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Dashbord
        </CNavItem>
        
        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilPuzzle} /> My Items{' '}
            </>
          }
        >
          <CNavItem href="#">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{' '}
            <Link to="/mylostitem" style={{ textDecoration: 'none', color: 'inherit' }}>My Lost Item</Link>
          </CNavItem>
          <CNavItem href="#">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{' '}
            <Link to="/myfounditem" style={{ textDecoration: 'none', color: 'inherit' }}>My Found Item</Link>
          </CNavItem>
        </CNavGroup>

        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilBell} /> Notification{' '}
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavItem>
        
        <CNavItem href="https://coreui.io">
          <CIcon customClassName="nav-icon" icon={cilAddressBook} /> Post
        </CNavItem>
        <CNavItem href="https://coreui.io/pro/">
          <CIcon customClassName="nav-icon" icon={cilZoom} /> Help
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  )
}

export default SideBar;
