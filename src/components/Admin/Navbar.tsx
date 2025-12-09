import {
  Avatar,
  Button,
  Image,
  Input,
  Layout,
  Menu,
  Space,
  type MenuProps,
} from "antd";
import { BellOutlined } from "@ant-design/icons";
import lms from "../../assets/lms.png";
const items: MenuProps["items"] = [
  "Dashboard",
  "Users",
  "Courses",
  "Reports",
].map((key) => ({
  key,
  label: `${key}`,
}));
const Navbar = () => {
  const { Header } = Layout;
  const { Search } = Input;
  return (
    <div>
      <Layout>
        <Header
          className="rounded-lg"
          style={{
            display: "flex",
            alignItems: "center",
            height: "4rem",
            backgroundColor: "white",
          }}
        >
          <div className="logo flex align-middle items-center">
            <Image src={lms} alt="Logo" width={"50px"} height={"50px"} />
            <h1 className=" mt-1 text-xl font-bold ml-2">uXL 360</h1>
          </div>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["Dashboard"]}
            items={items}
            style={{
              flex: 1,
              alignItems: "center",
              fontWeight: "bold",
              justifyContent: "center",
              height: "100%",
            }}
          />
          <div>
            <Space style={{ gap: "1rem" }}>
              <Search placeholder="Search Here" style={{ width: 200 }} />

              <Button icon={<BellOutlined />} shape="square" />
              <Avatar size={40} src="https://avatar.iran.liara.run/public/15" />
            </Space>
          </div>
        </Header>
      </Layout>
    </div>
  );
};

export default Navbar;
