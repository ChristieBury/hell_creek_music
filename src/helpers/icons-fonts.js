import{ 
    faMusic, 
    faGuitar, 
    faDrum,
    faClock, 
    faSpinner,
    faMapMarkerAlt, 
    // faFacebook, 
    faPhoneAlt, 
    faEnvelope 
    // faInstagram
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


const Icons = () => {
return library.add(
    faMusic, 
    faGuitar, 
    faDrum,
    faClock, 
    faSpinner,
    faMapMarkerAlt, 
    // faFacebook, 
    faPhoneAlt, 
    faEnvelope, 
    // faInstagram 
    );
};

export default Icons;