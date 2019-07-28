import React from 'react';
import CountUp from 'react-countup';
import { Row, Col } from 'reactstrap';

const ThreeSlots = ({ data }) => {
  return (
    <div style={{ marginTop: '30rem' }}>
      <Row>
        <Col sm="4">
          <CountUp end={100} />
        </Col>
        <Col sm="4">
          <CountUp end={100} />
        </Col>
        <Col sm="4">
          <CountUp end={100} />
        </Col>
      </Row>
    </div>
  );
};

export default ThreeSlots;
