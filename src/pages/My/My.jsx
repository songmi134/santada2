import React from "react";
import { Tabs } from "antd";
import MyMountains from "./MyMountains";

const My = () => {
  const { TabPane } = Tabs;
  return (
    <>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="찜한 산" key="1">
          <MyMountains />
        </TabPane>
      </Tabs>
    </>
  );
};

export default My;
