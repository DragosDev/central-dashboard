import Chart from "../../chart/Chart"
import FeaturedInfo from "../../featuredInfo/FeaturedInfo"
import Homewidgetsm from "../../widgets/homewidgetsm/Homewidgetsm"
import Homewidgetlg from "../../widgets/homewidgetlg/Homewidgetlg"
import "./home.css";
import { userData } from "../../../fakeData";


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
