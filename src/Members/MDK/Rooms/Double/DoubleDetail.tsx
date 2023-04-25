import React from "react";
import {
  Col,
  Row,
  Image,
  Typography,
  Avatar,
  Tooltip,
  DatePicker,
  Button,
} from "antd";
// Calendar
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import Stars from "../../icon/Stars";
import feature from "@src/Members/MDK/icon/feature.svg";
import double_room from "@src/assets/double_room.jpg";

const { Title } = Typography;

// Calendar
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};

const DoubleDetail: React.FC = () => {
  return (
    <Row>
      <Col span={12}>
        <Image width={700} height={800} src={double_room} />
      </Col>
      <Col span={12}>
        <div style={{ padding: "3rem 1rem" }}>
          <Title level={2} className="!font-bold">
            Double Room
          </Title>
          <div className="flex item-center mt-[1.5rem]">
            <Stars />
          </div>
          <div className="flex item-center justify-between">
            <Avatar.Group
              className="mt-[1.5rem] mb-[1.5rem]"
              maxCount={2}
              maxPopoverTrigger="click"
              size="large"
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "pointer",
              }}
            >
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                style={{ backgroundColor: "#1890ff" }}
                icon={<AntDesignOutlined />}
              />
            </Avatar.Group>
            <Title level={5} className="!leading-[96px]">
              39 reviews
            </Title>
          </div>
          <Title level={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at
            ipsum quae iste totam quam illum officia blanditiis. Ullam voluptas
            et magnam totam quia facere vitae illo culpa minus eum?
          </Title>
          <div className="flex item-center justify-center mt-[2.5rem] mb-[2.5rem]">
            <Image preview={false} src={feature} />
          </div>
          <div className="calendar bg-[#F7F6FB] p-8 rounded-3xl flex items-center justify-center mt-[4.5rem] mb-[4.5rem]">
            <RangePicker disabledDate={disabledDate} />
          </div>
          <div className="flex items-center justify-center">
            <Button
              style={{
                background: "#F1E2D3",
                border: "2px solid #C18346",
                borderRadius: "20px",
                width: "490px",
                height: "60px",
                color: "#000",
                fontWeight: "700",
              }}
            >
              Chọn phòng
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default DoubleDetail;
