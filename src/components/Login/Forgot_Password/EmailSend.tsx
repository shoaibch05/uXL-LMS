import { NotificationTwoTone } from "@ant-design/icons";
import { Button, Typography } from "antd";

const EmailSend = () => {
  const { Text } = Typography;
  return (
    <div className="w-screen h-screen text-center flex py-3 items-center justify-center bg-[#f0f8ff]">
      <div className=" rounded-3xl bg-white shadow-2xl p-14 flex flex-col justify-center items-center gap-5">
        <NotificationTwoTone
          twoToneColor={"#66BD2C"}
          className="bg-amber-100 p-4 rounded-full"
        />
        <h1 className="text-xl font-bold ">Check Your Email</h1>
        <h5 className="text-sm w-64 flex flex-wrap justify-center">
          We've sent a password reset link to your email address. Please check
          your inbox or spam and follow the instructions.
        </h5>

        <Button type="primary" href="/login" className="w-full my-1">
          Back to Login
        </Button>
        <Text>
          Didn't receive the email?{" "}
          <a href="/forgot_Password">Click to Resend</a>
        </Text>
      </div>
    </div>
  );
};

export default EmailSend;
