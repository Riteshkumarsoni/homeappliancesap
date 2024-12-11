import './index.css'

const FeaturedVendor = (props) => {
    const {vendorDetails} = props
    const {imageUrl, role, reviews, rating, services} = vendorDetails

    return(
    <li className="featured-vendor-list-item">
        <div className="featured-card1-container">
            <img src={imageUrl} alt="technician" />
            <p className='technician-title'>{role}</p>
        </div>
        <div className="featured-card2-container">
            <div>
                <p className="vendor-value">{services}</p>
                <p className="vendor-title">Services</p>
            </div>
            <div>
                <p className="vendor-value">{rating}</p>
                <p className="vendor-title">Rating</p>
            </div>
            <div>
                <p className="vendor-value">{reviews}</p>
                <p className="vendor-title">Reviews</p>
            </div>
            <button className="show-more-btn" type="button">Show more</button>
        </div>
    </li>
)}
export default FeaturedVendor