import { Button, Form, Image, Input, Progress } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import lms from "../../../assets/lms.png";
import { useState, useEffect } from "react";
const SetNewPass = () => {
  const [form] = Form.useForm();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // Password validation rules
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[@$!%*#?&]/.test(password);
  const allRulesMet =
    hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;

  // Calculate password strength percentage for progress bar
  const strengthPercent =
    [
      password.length >= 8,
      hasUppercase,
      hasLowercase,
      hasNumber,
      hasSpecialChar,
    ].filter(Boolean).length * 20;

  // Check if the entire form is valid (including confirm password)
  const checkFormValidity = async () => {
    try {
      await form.validateFields();
      setIsFormValid(true);
    } catch {
      setIsFormValid(false);
    }
  };

  useEffect(() => {
    checkFormValidity();
  }, [password, confirmPassword, form]);

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col w-md justify-center items-center py-10 px-6 shadow-2xl bg-white rounded-xl">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Image
            src={lms}
            height={"50px"}
            width={"50px"}
            alt="LMS"
            className="bg-green-100 rounded-full p-2"
          />
          <h1 className="text-xl font-bold">uXL 360</h1>
        </div>
        <h1 className="text-2xl font-bold ">Set a New Password</h1>
        <h5 className=" text-xs text-center">
          your new password must be diffrent from previous one.
        </h5>
        <Form
          form={form}
          className="flex flex-col gap-2 w-[85%]"
          style={{ paddingTop: "16px" }}
          layout="vertical"
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="password"
            label="New Password"
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
          >
            <Input.Password
              placeholder="Enter your new password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="new_confirm"
            label="Confirm New Password"
            style={{ marginBottom: "5px" }}
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
            <Input.Password
              placeholder="Confirm your Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </Form.Item>
          {/* Password Strength Indicator */}
          {allRulesMet
            ? ""
            : password && (
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold">
                      Password Strength
                    </span>
                    <span className="text-xs text-gray-500">
                      {strengthPercent === 0
                        ? "Weak"
                        : strengthPercent <= 60
                        ? "Fair"
                        : strengthPercent <= 80
                        ? "Good"
                        : "Strong"}
                    </span>
                  </div>
                  <Progress
                    percent={strengthPercent}
                    strokeColor={
                      strengthPercent <= 40
                        ? "#f5222d"
                        : strengthPercent <= 70
                        ? "#faad14"
                        : "#52c41a"
                    }
                    showInfo={false}
                  />

                  {/* Requirements Checklist */}
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      {hasMinLength ? (
                        <CheckCircleOutlined
                          style={{ color: "#52c41a", fontSize: "16px" }}
                        />
                      ) : (
                        <CloseCircleOutlined
                          style={{ color: "#d9d9d9", fontSize: "16px" }}
                        />
                      )}
                      <span
                        className={`text-sm ${
                          hasMinLength ? "text-green-600" : "text-gray-400"
                        }`}
                      >
                        At least 8 characters
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {hasUppercase ? (
                        <CheckCircleOutlined
                          style={{ color: "#52c41a", fontSize: "16px" }}
                        />
                      ) : (
                        <CloseCircleOutlined
                          style={{ color: "#d9d9d9", fontSize: "16px" }}
                        />
                      )}
                      <span
                        className={`text-sm ${
                          hasUppercase ? "text-green-600" : "text-gray-400"
                        }`}
                      >
                        One uppercase letter
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {hasLowercase ? (
                        <CheckCircleOutlined
                          style={{ color: "#52c41a", fontSize: "16px" }}
                        />
                      ) : (
                        <CloseCircleOutlined
                          style={{ color: "#d9d9d9", fontSize: "16px" }}
                        />
                      )}
                      <span
                        className={`text-sm ${
                          hasLowercase ? "text-green-600" : "text-gray-400"
                        }`}
                      >
                        One lowercase letter
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {hasNumber ? (
                        <CheckCircleOutlined
                          style={{ color: "#52c41a", fontSize: "16px" }}
                        />
                      ) : (
                        <CloseCircleOutlined
                          style={{ color: "#d9d9d9", fontSize: "16px" }}
                        />
                      )}
                      <span
                        className={`text-sm ${
                          hasNumber ? "text-green-600" : "text-gray-400"
                        }`}
                      >
                        One number
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {hasSpecialChar ? (
                        <CheckCircleOutlined
                          style={{ color: "#52c41a", fontSize: "16px" }}
                        />
                      ) : (
                        <CloseCircleOutlined
                          style={{ color: "#d9d9d9", fontSize: "16px" }}
                        />
                      )}
                      <span
                        className={`text-sm ${
                          hasSpecialChar ? "text-green-600" : "text-gray-400"
                        }`}
                      >
                        One special character (@$!%*#?&)
                      </span>
                    </div>
                  </div>
                </div>
              )}

          <Button
            type="primary"
            htmlType="submit"
            disabled={!isFormValid}
            className="w-full mt-2 rounded-md"
          >
            Reset Password
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SetNewPass;
