import lms from "../../assets/lms.png";

import {
  GoogleOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";
import { Button, Typography, Form, Input } from "antd";

const SignUp = () => {
  const [form] = Form.useForm();
  const { Text } = Typography;

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="w-full h-full">
      <main className="flex flex-col justify-center items-center p-5">
        <img src={lms} height={"50px"} width={"50px"} alt="not found" />
        <h1 className="text-3xl font-bold ">Create New Account</h1>
        <h5>Get Started with uXL LMS 360</h5>
        <Form
          form={form}
          className="flex flex-col gap-2 w-[30%]"
          style={{ paddingTop: "16px" }}
          layout="vertical"
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail Address"
            style={{ marginBottom: "0px" }}
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input placeholder="Enter your Email Address" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            style={{ marginBottom: "0px" }}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 6,
                message: "Password must be at least 6 characters long!",
              },
              {
                pattern:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                message:
                  "Password must contain at least one letter and one number and a Special Character!",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            style={{ marginBottom: "0px" }}
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm your Password" />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Create Account
          </Button>

          <Divider
            style={{
              margin: "4px 0px",
              borderColor: "red",
            }}
          >
            OR
          </Divider>
          <div className="flex flex-col gap-1">
            <Button
              type="default"
              icon={<GoogleOutlined style={{ color: "red" }} />}
              size="large"
              className="bg-gray-100"
            >
              Continue with Google
            </Button>
            <Button
              icon={<FacebookOutlined style={{ color: "blue" }} />}
              size="large"
            >
              Continue With Facebook
            </Button>
            <Button
              icon={<LinkedinOutlined style={{ color: "blue" }} />}
              size="large"
            >
              Continue With Linkedin
            </Button>
          </div>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            style={{ marginBottom: "0px" }}
          >
            {" "}
            <Text></Text>
            <Text className="flex flex-wrap  text-center content-center items-center justify-center">
              Already have an Account? &nbsp;<a href="/login">SignIn</a>
              <br /> By Creating Account you will be agree to our &nbsp;
              <a
                href=""
                style={{
                  color: "#616363",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Terms and Services{" "}
              </a>{" "}
              &nbsp; and &nbsp;
              <a
                href=""
                style={{
                  color: "#616363",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Privacy Policy
              </a>
            </Text>
          </Form.Item>
        </Form>
      </main>
    </div>
  );
};

export default SignUp;
