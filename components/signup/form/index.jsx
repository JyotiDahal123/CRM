import { Button, Form, Input } from "antd";
import Link from "next/link";
const onFinish = (values) => {
  console.log("Success:", values);
};

const SignupForm = () => {
  const inputField = [
    {
      label: "Company's Name",
      name: "company's name",
      required: true,
      message: "Enter your company's name.",
    },
    {
      label: "Founder",
      name: "founder",
      required: true,
      message: "Enter founder's name.",
    },
    {
      label: "Contact",
      name: "contact",
      required: true,
      message: "Enter your contact number.",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      message: "Enter your email.",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      message: "Enter password.",
    },
    {
      label: "GST",
      name: "gst",
      required: false,
      message: "Enter gst",
    },
  ];
  return (
    <div className="rounded-lg bg-blue-100 border-blue-600 px-8 py-12 shadow">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="on"
      >
        <h2 className="text-xl text-center mb-4">Let's SignUp</h2>

        {inputField.map((item, index) => (
          <Form.Item
            key={index}
            label={item.label}
            name={item.name}
            rules={[
              {
                required: item.required,
                message: item.message,
              },
            ]}
          >
            <Input />
          </Form.Item>
        ))}

        <div className="flex justify-center ">
          <Button className="bg-blue-500  w-60 text-white" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
      <div className="flex gap-2 mt-2 justify-center">
        <h2>Already have an account?</h2>
        <Link href="/signin" className="text-blue-500 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
};
export default SignupForm;
