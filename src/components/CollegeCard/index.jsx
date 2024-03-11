import { Badge, Col, Row } from "antd";
import React, { useState } from "react";
import { StarOutlined } from "@ant-design/icons";

function CollegeCard({ name, link, location, rating, type, nirf, ...props }) {
  const [image, setImage] = useState("/images/default.png");
  return (
    <Col span={6}>
      <div className="college-card-container">
        <img src={"/images/default.png"} className="college-image" />

        <span className="nirf-rating">#{nirf}</span>
        <div className="college-card-content">
          <a href={link} target="_blank" className="college-name">{name}</a>
          <Row className="college-meta">
            <Col span={18}>
              <p className="location">{location}</p>
            </Col>
            <Col span={6}>
              <p className="rating">
                <span>
                  <StarOutlined />
                </span>
                {rating}
              </p>
            </Col>
            <Col span={24}>
              <div className="college-type">
                <span className={`badge ${type==='Private'?'badge-private':'badge-public'}`}>{type}</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
}

export default CollegeCard;
