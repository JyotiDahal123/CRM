import { Button, Form, Input } from "antd";
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
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="on"
      className=""
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

      <Form.Item className="flex justify-center ">
        <Button className="bg-blue-500  w-60 text-white" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SignupForm;
