import { Layout } from "antd"
import { Route, Routes } from "react-router-dom";
import { paths } from "../../../routing/paths";
import { Navbar } from "../../organism/Navbar/Navbar"
import { Activity } from "../Activity/Activity";
import { Employee } from "../Employee/Employee";
import { Profile } from "../Profile/Profile";
import './Home.less';

const { Content } = Layout;

export const Home = () => {
  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      <Navbar />
      <Content className="content">
        <Routes>
          <Route path={paths.PROFILE} element={<Profile />} />
          <Route path={paths.EMPLOYEE} element={<Employee />} />
          <Route path={paths.ACTIVITY} element={<Activity />} />
        </Routes>
      </Content>
    </Layout>
  )
}