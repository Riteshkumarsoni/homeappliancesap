import {Component} from 'react'
import { FaSearchPlus } from "react-icons/fa"
import Header from '../Header'
import AllServices from '../AllServices'
import BookRequest from '../BookRequest'
import FeaturedVendor from '../FeaturedVendor'
import CustomerRating from '../CustomerRating'
import Footer from '../Footer'
import './index.css'

class Home extends Component{
    state = {locationList: [], technicianList: []}

    componentDidMount(){
        this.getLocationList()
        this.getTechnicianList()
    }

    getLocationList = async() => {
        const response = await fetch("/locations")
        const fetchedData = await response.json()
        this.setState({locationList: fetchedData})
    }

    getTechnicianList = async () => {
        const response = await fetch("/featured-technicians")
        const fetchedData = await response.json()
        this.setState({technicianList: fetchedData})
    }

    render(){
        const {locationList, technicianList} = this.state
        return (
    <>
        <Header />
        <div className="home-bg-container">
            <div className="home-card-container">
                <h1 className="home-heading">Take care of your home needs now!</h1>
                <p className="home-description">ServicePro is your one-stop solution
                    to troubleshoot, choose a vendor and book a techinician.
                </p>
                <div className="select-container">
                    <select className="select-input-container">
                        {
                            locationList.map(eachItem => 
                                <option key={eachItem.id} value={eachItem.value}>{eachItem.displayText}</option>
                            )
                        }
                    </select>
                    <p className="select-title">Only in Ameerpet, Gachibowli, & Madhapur</p>
                </div>
                <div className="searchInput-btn-section">
                    <div className="search-icon-section">
                        <FaSearchPlus />
                        <input type="search" placeholder="Search Home Appliances" className="input-search-El" />
                    </div>
                        <button type="button" className="searchBtn">Search</button>
                    </div>
            </div>
            <img src="https://res.cloudinary.com/dh8g9mloe/image/upload/v1733834427/Frame_fmtxvv.png" alt="home" className="home-img" />
        </div>
        <AllServices />
        <BookRequest />
        <h1 className="heading">
            Featured Vendor
        </h1>
        <ul className='list-container'>
            {
                technicianList.map((eachItem) => 
                    <FeaturedVendor key={eachItem.id} vendorDetails={eachItem} />
                )
            }
        </ul>
        <CustomerRating />
        <Footer />
    </>
        )
    }
}

export default Home