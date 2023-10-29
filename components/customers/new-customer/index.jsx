import React, { useState } from "react";
import Layout from "@/components/layout/shared/navbar";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Select, Space } from "antd";
import BottomBox from "./bottom-box";
const { Option } = Select;

const NewCustomer = () => {
  const [open, setOpen] = useState(false);
  // for box open
  const [openBox, setOpenBox] = useState(false);

  const [form] = Form.useForm(); // Create a form instance
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    // Handle form submission here
    // save the value on local storage
    const objectString = JSON.stringify(values);
    localStorage.setItem("customerData", objectString);
    // reset form
    form.resetFields();
    // close form
    onClose();
    // open box model for details of customer
    setOpenBox(true);
  };

  return (
    <Layout>
      <div className="w-9/12 mt-10 m-auto">
        <Button
          className="bg-blue-500 text-white"
          onClick={showDrawer}
          icon={<PlusOutlined />}
        >
          Add New Customer
        </Button>
        <Drawer
          title="Add a new Customer"
          width={720}
          onClose={onClose}
          closable={false}
          open={open}
          styles={{
            body: {
              paddingBottom: 80,
            },
          }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish} // Handle form submission
          >
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
                  <Input
                    style={{
                      width: "100%",
                    }}
                    placeholder="Please enter email"
                  />
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
              <Space>
                <Button className="bg-blue-500 text-white" htmlType="submit">
                  Start
                </Button>
                <Button onClick={onClose}>Cancel</Button>
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
