import React from "react";
import { Row, Col } from "reactstrap";
import { TextSecondary, TextThumbnail } from "./ThumbnailElements";

export default (props) => {
  return (
    <>
      <Row className="mt-5 mb-2">
        <Col xs={12}>
          <TextThumbnail>{props.header}</TextThumbnail>
        </Col>
        <Col xs={12}>
          <TextSecondary>{props.secondary}</TextSecondary>
        </Col>
      </Row>
    </>
  );
};
