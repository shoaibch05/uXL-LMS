import Navbar from "../components/Admin/Navbar";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import StatCard from "../components/Admin/StatCard";

const Dashboard = () => {
  return (
    <div className="h-screen w-screen bg-[#f0f8ff] px-6 pt-3 ">
      <Navbar />
      <div className="flex justify-between items-center align-middle h-40 px-4">
        <div>
          <h1 className="text-5xl font-bold ">Welcome Back, Priya!</h1>
          <p className="text-xl">Here's a Summary of Your Institute Activity</p>
        </div>
        <div className="flex gap-3">
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            Invite User
          </Button>
          <Button size="large">Manage Courses</Button>
        </div>
      </div>
      <Row gutter={16}>
        <Col span={6}>
          <StatCard Name={"Students"} StatNumber={"4567"} Percentage={8} />
        </Col>
        <Col span={6}>
          <StatCard Name={"Instructors"} StatNumber={"234"} Percentage={-5} />
        </Col>
        <Col span={6}>
          <StatCard Name={"Total User"} StatNumber={"23,445"} Percentage={50} />
        </Col>
        <Col span={6}>
          <StatCard Name={"Courses"} StatNumber={"14"} Percentage={12} />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
