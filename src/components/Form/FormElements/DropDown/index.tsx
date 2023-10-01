import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Clicking me will not close the menu.",
    key: "1",
  },
  {
    label: "Clicking me will not close the menu also.",
    key: "2",
  },
  {
    label: "Clicking me will close the menu.",
    key: "3",
  },
];

const DropDown: React.FC = () => {
  const [loadings] = useState<boolean[]>([]);

  return (
    <Space direction="vertical">
      <Dropdown.Button
        icon={<DownOutlined />}
        type="primary"
        loading={loadings[0]}
        menu={{
          items,
        }}
        // className="bg-[#1D5ECD] rounded-[6px] h-[50px]"
        // style={{height: 300}}
      >
        Move To Video Interview
      </Dropdown.Button>
    </Space>
  );
};

export default DropDown;
