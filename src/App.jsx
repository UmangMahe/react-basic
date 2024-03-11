import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import CollegeData from "./data/college_data.json";
import CollegeCard from "./components/CollegeCard";
import { Row } from "antd";
import axios from "axios";

function App() {
  console.log(CollegeData);

  return (
    <>
      <h2 className="page-heading">Top 200 Engineering Colleges in India</h2>
      <div className="page-content">
        <Row gutter={[32, 32]}>
          {CollegeData.map((item, index) => {
            return (
              <CollegeCard
                link={item.Wikipedia_Link}
                key={index}
                name={item["College Name"]}
                location={item.Location}
                rating={item.Rating}
                type={item["College Type"]}
                nirf={item["NIRF Rankings"]}
              />
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default App;
