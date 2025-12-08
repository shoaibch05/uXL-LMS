import lms from "../../../assets/lms.png";
import { Button, Form, Image, Input } from "antd";
import { useNavigate } from "react-router";

const Forgot = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    navigate("email");
  };
  return (
    <div className="w-screen h-screen text-center flex py-3 items-center justify-center bg-[#f0f8ff]">
      <div className=" rounded-3xl bg-white shadow-2xl p-14 flex flex-col gap-3">
        <div className="UpperBody flex flex-col justify-center items-center">
          <Image
            src={lms}
            style={{
              borderRadius: "50%",
              backgroundColor: "#f0f8ff",
              padding: "5px",
            }}
            height={"50px"}
            width={"50px"}
            alt="not found"
          />
          <h5 className="text-sm font-bold  mb-1.5">uXL LMS 360</h5>
          <h1 className="text-xl font-bold ">Forgot Your Password?</h1>
          <h5 className="text-sm w-64 ">
            Enter your email and we'll send you a link to reset your password
          </h5>
        </div>
        <div className="LowerBody w-full flex flex-col gap-5 ">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            name="Forgot_Password"
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

            <Button
              type="primary"
              htmlType="submit"
              className="w-full rounded-md"
            >
              Send Reset Link
            </Button>
            <Button type="link" href="/login" className=" w-full border-2">
              Back to Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
