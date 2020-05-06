import{ 
    faMusic, 
    faGuitar, 
    faDrum,
    faClock, 
    faSpinner,
    faMapMarkerAlt, 
    faPhoneAlt, 
    faEnvelope 
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
    faPhoneAlt, 
    faEnvelope, 
    );
};

export default Icons;