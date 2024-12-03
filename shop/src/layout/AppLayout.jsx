import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import ToastMessage from "../common/component/ToastMessage";
import Sidebar from '../common/component/Sidebar';
import Navbar from '../common/component/Navbar';

const AppLayout = ({ children }) => {
  const location = useLocation();
  
  return (
    <div>
      <ToastMessage />
      {location.pathname.includes("admin") ? (
        <Row className="vh-100">
          <Col xs={12} md={3} className="sidebar mobile-sidebar">
            <Sidebar />
          </Col>
          <Col xs={12} md={9}>
            {children}
          </Col>
        </Row>
      ) : (
        <>
          <Navbar />
          {children}
        </>
      )}
    </div>
  )
}

export default AppLayout