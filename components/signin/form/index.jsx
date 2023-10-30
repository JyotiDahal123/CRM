import { Button, Form, Input, message, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const SigninForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };

  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = (values) => {
    //success message
    success();
    console.log("Success:", values);
    // waite for see success message
    setTimeout(() => {
      router.push("/admin");
    }, 1500);
  };

  // Random password generating function
  const generatePassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let password = "";
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    // Set the generated password in the password input field
    form.setFieldsValue({ password: password });
  };

  return (
    <div className="rounded-lg bg-blue-100 border-blue-600 px-8 py-12 shadow">
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
          className="text-red-500"
        >
          <Input className="w-full" />
        </Form.Item>
        <div className="flex gap-2">
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
            <Input.Password className="w-full" />
          </Form.Item>
          <Button onClick={generatePassword}>
            <i className="bx bx-sync text-md text-gray-500"></i>
          </Button>
        </div>

        <div className="text-center">
          {contextHolder}
          <Space>
            <Button className="bg-blue-600 text-white" htmlType="submit">
              Login
            </Button>
          </Space>
        </div>
      </Form>
      <div className="flex gap-2 justify-center mt-2">
        <h2>Don't have an account?</h2>
        <Link href="/signup" className="text-blue-500 hover:underline">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default SigninForm;
