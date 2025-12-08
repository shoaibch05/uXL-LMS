import { Button, Form, Input, Typography } from "antd";
import lms from "../../assets/lms.png";

const StudentLogin = () => {
  const [form] = Form.useForm();
  const { Text, Link } = Typography;

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="w-screen h-screen text-center flex py-3 items-center justify-center bg-[#f0f8ff]">
      <div className=" rounded-3xl bg-white shadow-2xl p-14 flex flex-col gap-5">
        <div className="UpperBody flex flex-col justify-center items-center">
          <img src={lms} height={"50px"} width={"50px"} alt="not found" />
          <h1 className="text-3xl font-bold ">Hello, Future Leaders!</h1>
          <h5>Ready to dive into your learning journey?</h5>
        </div>
        <div className="LowerBody w-full flex flex-col gap-5 ">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            name="StudentLogin"
            scrollToFirstError
          >
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "Please input your Email Address!" },
              ]}
            >
              <Input
                type={"email"}
                placeholder="your.email@example.com"
                style={{ backgroundColor: "#f9fafb" }}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Enter your password"
                style={{ backgroundColor: "#f9fafb" }}
              />
            </Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "16px",
              }}
            >
              <Link href="/Forgot_Password">Forgot Password?</Link>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full rounded-md"
            >
              Start Learning
            </Button>
          </Form>
          <Text>
            Need help? Contact{" "}
            <a href="#" style={{ color: "#646e7f", fontWeight: "bold" }}>
              Support
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
