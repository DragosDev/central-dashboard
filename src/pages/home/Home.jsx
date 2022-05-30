import Chart from "../../components/chart/Chart"
import ChartProduct from "../../components/chart-product/ChartProduct"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Homewidgetsm from "../../components/widgets/homewidgetsm/Homewidgetsm"
import Homewidgetlg from "../../components/widgets/homewidgetlg/Homewidgetlg"
import "./home.css";
import { userData } from "../../fakeData";
import { productData } from "../../fakeData";


export default function Home() {
  return (
    
    <div className="home">
      
        <FeaturedInfo/>
        <Chart data={userData} title="User Data" grid dataKey="Active User"/>
        <ChartProduct data={productData} title="Product Data" grid dataKey="Sales"/>
        <div className="homeWidgets">
          <Homewidgetsm />
          <Homewidgetlg />
        </div>
        
    </div>
    
  )
}
