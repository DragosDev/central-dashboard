import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Homewidgetsm from "../../components/widgets/homewidgetsm/Homewidgetsm"
import Homewidgetlg from "../../components/widgets/homewidgetlg/Homewidgetlg"
import "./home.css";
import { userData } from "../../fakeData";


export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <Homewidgetsm />
          <Homewidgetlg />
        </div>
    </div>
  )
}
