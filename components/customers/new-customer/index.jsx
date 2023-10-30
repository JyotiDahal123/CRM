import React, { useState } from "react";
import Layout from "@/components/layout/shared/navbar";
import { AppstoreAddOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  message,
} from "antd";
import BottomBox from "../bottom-box";
const { Option } = Select;

const NewCustomer = ({ children }) => {
  // for open or close drawer
  const [open, setOpen] = useState(false);
  // for customer details box open or close
  const [openBox, setOpenBox] = useState(false);
  // Create a form instance
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };
  // form submission
  const onFinish = (values) => {
    // save the value on local storage
    const objectString = JSON.stringify(values);
    localStorage.setItem("customerData", objectString);
    // reset form
    form.resetFields();
    // close form
    setOpen(false);
    // open box model for details of customer
    success();
    setTimeout(() => {
      setOpenBox(true);
    }, 1500);
  };

  return (
    <Layout>
      <div className="w-9/12 mt-10 m-auto">
        <Button
          className="bg-blue-500 text-white"
          onClick={() => setOpen(true)}
          icon={<AppstoreAddOutlined style={{ fontSize: "24" }} />}
        >
          Add New Customer
        </Button>
        <Drawer
          title="Add a new Customer"
          width={720}
          onClose={() => setOpen(false)}
          closable={false}
          open={open}
          className="p-10 text-xl"
        >
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Customer Name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter customer name",
                    },
                  ]}
                >
                  <Input placeholder="Please enter customer name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter email",
                    },
                  ]}
                >
                  <Input placeholder="Please enter email" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="mobile"
                  label="Mobile"
                  rules={[
                    {
                      required: true,
                      message: "Please enter mobile number",
                    },
                  ]}
                >
                  <Input placeholder="Please enter mobile number" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="query"
                  label="Query"
                  rules={[
                    {
                      required: true,
                      message: "Please enter query",
                    },
                  ]}
                >
                  <Input placeholder="Please enter query" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              {contextHolder}
              <Space>
                <Button className="bg-blue-500 text-white" htmlType="submit">
                  Start
                </Button>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
              </Space>
            </Form.Item>
          </Form>
        </Drawer>
        <BottomBox openBox={openBox} setOpenBox={setOpenBox} />
      </div>
    </Layout>
  );
};

export default NewCustomer;
