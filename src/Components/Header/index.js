
import { FaRegClock ,FaRegBell, FaRegCalendar} from "react-icons/fa";


import './index.css'
import Home from "../Home";
// import Cards from "../Cards";
// import Carousel from "../Carousel";

const Header = ()=>{
    return(
        <div className="header-main-container">
            <div className="header">
                <div className="wish-container">
                    <h5>Good Afternoon, Akshay</h5>
                    <p>You are subscribed to Renral plan</p>
                </div>
                <div className="date">
                    <FaRegCalendar className="head-icon" />
                    <h6>Today, 14 February</h6>
                    <FaRegClock  className="head-icon"/>
                    <h6>16:42</h6>
                    <div className="notification">
                        <FaRegBell />
                    </div>
                </div>
            </div>
            {/* <Cards/> */}
            {/* <Carousel/> */}
            <Home/>
        </div>
    )
}
export default Header