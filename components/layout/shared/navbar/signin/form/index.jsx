import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/router";

const SigninForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = (values) => {
    console.log("Success:", values);
    router.push("/customers");
  };

  // Function to generate a random password
  const generatePassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let password = "";
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    form.setFieldsValue({ password: password }); // Set the generated password in the form
  };

  return (
    <>
      <Form
        form={form}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="on"
      >
        <h2 className="text-xl text-center mb-4">Sign In</h2>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <div className="text-center hover:to-blue-400 my-4">
          <Button onClick={generatePassword}>Generate password</Button>
        </div>
        <div className="text-center">
          <Button className="bg-blue-500 text-white w-60" htmlType="submit">
            Login
          </Button>
        </div>
      </Form>
    </>
  );
};

export default SigninForm;
