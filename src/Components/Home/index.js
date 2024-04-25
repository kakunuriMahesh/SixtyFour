import Cards from "../Cards"
import Carousel from "../Carousel"
import TimeLine from "../TimeLine"

import './index.css'
const Home = ()=>{
    return(
        <div>
            <Cards/>
            <div className="details-container">
                <Carousel className='carousel'/>
                <TimeLine className='timeline'/>
            </div>
        </div>
    )
}
export default Home