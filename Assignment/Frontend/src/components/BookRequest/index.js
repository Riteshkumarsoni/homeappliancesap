import './index.css'

const BookRequest = () => (
    <div className="book-request-bg-container">
        <h1 className="book-request-heading">Book a request in 3 simple steps</h1>
        <div className="book-request-card-section">
            <div className="book-request-subcard">
                <img src="https://res.cloudinary.com/dh8g9mloe/image/upload/v1733834412/undraw_forms_re_pkrt_1_zuamic.png" alt="request" />
                <h1 className="subcard-title">Provide your appliance details</h1>
                <p className="subcard-description">
                    Let us know your appliance details and your issue.
                </p>
            </div>
            <div className="book-request-subcard">
                <img src="https://res.cloudinary.com/dh8g9mloe/image/upload/v1733834387/Untitled_vflv4z.png" alt="request" />
                <h1 className="subcard-title">Choose your technician</h1>
                <p className="subcard-description">
                    Choose from a wide variety of technicians and vendors.
                </p>
            </div>
            <div className="book-request-subcard">
                <img src="https://res.cloudinary.com/dh8g9mloe/image/upload/v1733834403/undraw_certification_re_ifll_1_ltumrj.png" alt="request" />
                <h1 className="subcard-title">Get it fixed!</h1>
                <p className="subcard-description">
                    The technician will arive at your doorstep shortly to fix it!
                </p>
            </div>
        </div>
    </div>
)

export default BookRequest