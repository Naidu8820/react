import React from 'react'
import Slicemobile from '../Slicedata/Slicemobile';
import Slicelaptop from '../Slicedata/Slicelaptop';
import Sliceearbuds from '../Slicedata/Sliceearbuds';
import Slicetv from '../Slicedata/Slicetv';
import Sidenav from '../Components/Slidenav';
import Header from '../Components/Header';
import { Col, Row } from 'react-bootstrap';


function Dashboard() {
  return (
    <>
      <Row>
        <Header />
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
          <Slicemobile />
          <Slicelaptop />
          <Sliceearbuds />
          <Slicetv />
        </Col>
      </Row>
    </>
  )
}

export default Dashboard