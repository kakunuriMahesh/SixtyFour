
import { MdFeaturedPlayList } from "react-icons/md";


// import Carousel from '../Carousel'
import './index.css'

const Cards = ()=>{
    return(
            <div className="main-card-container">
                <div className="card">
                    <MdFeaturedPlayList className="light-blue"/>
                    <h6>My Saved Library 1</h6>
                    <p className="year">dd-mm-yyyy</p>
                </div>
                <div className="card">
                    <MdFeaturedPlayList className="blue"/>
                    <h6>My Saved Library 1</h6>
                    <p className="year">dd-mm-yyyy</p>
                </div>
                <div className="card">
                    <MdFeaturedPlayList className="red"/>
                    <h6>My Saved Library 1</h6>
                    <p className="year">dd-mm-yyyy</p>
                </div>
                <div className="card">
                    <MdFeaturedPlayList className="orange"/>
                    <h6>My Saved Library 1</h6>
                    <p className="year">dd-mm-yyyy</p>
                </div>
                <div className="card">
                    <MdFeaturedPlayList className="green"/>
                    <h6>My Saved Library 1</h6>
                    <p className="year">dd-mm-yyyy</p>
                </div>
            </div>
    )
}
export default Cards