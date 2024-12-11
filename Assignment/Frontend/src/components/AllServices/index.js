import { BiFridge } from "react-icons/bi"
import { TbAirConditioning } from "react-icons/tb"
import { PiTelevisionLight } from "react-icons/pi"
import { GiGasStove } from "react-icons/gi"
import './index.css'

const AllServices = () => (
    <div className="all-services-bg-container">
        <h1 className="all-services-heading">All Services</h1>
        <p className="all-services-description">
            The time is now for it to be okay to be great. For being a bright color. For standing out.
        </p>
        <div className="service-card-container">
            <div className="subCard-container">
                <BiFridge className="service-icon"/>
                <p className="service-title">Fridge</p>
                <p className="service-description">
                    We get insulted by others, lose trust for those others. We get back 
                    stabbed by friends. It becomes harder for us to give others a hand
                </p>
            </div>
            <div className="subCard-container">
                <TbAirConditioning className="service-icon"/>
                <p className="service-title">Air Conditioner</p>
                <p className="service-description">
                    Don't get your heart broken by people we love, even that we give them 
                    all we have. Then we lose family over time. As we live, our hearts turn colder.
                </p>
            </div>
            <div className="subCard-container">
                <PiTelevisionLight className="service-icon"/>
                <p className="service-title">Television</p>
                <p className="service-description">
                    What else could rust the heart more over time? Blackgold. The time is now for it to 
                    be okay to be great. or being a bright color. For standing out.
                </p>
            </div>
            <div className="subCard-container">
                <GiGasStove className="service-icon"/>
                <p className="service-title">Gas Stove</p>
                <p className="service-description">
                    We get insulted by others, lose trust for those others. We get back 
                    stabbed by friends. It becomes harder for us to give others a hand
                </p>
            </div>
            <div className="subCard-container">
                <TbAirConditioning className="service-icon"/>
                <p className="service-title">Air Conditioner</p>
                <p className="service-description">
                    Don't get your heart broken by people we love, even that we give them 
                    all we have. Then we lose family over time. As we live, our hearts turn colder.
                </p>
            </div>
            <div className="subCard-container">
                <PiTelevisionLight className="service-icon"/>
                <p className="service-title">Television</p>
                <p className="service-description">
                    What else could rust the heart more over time? Blackgold. The time is now for it to 
                    be okay to be great. or being a bright color. For standing out.
                </p>
            </div>
        </div>
    </div>
)
export default AllServices