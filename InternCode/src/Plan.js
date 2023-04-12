// import Appnav from './navbar';
import Nav from '../src/components/Navbar';
// import GeoLocation from '../src/components/Geo';
// import Auto from '../src/components/Autocomplete';
import Address from '../src/components/reverseGeo';

const Plan = () => {
    return(
        <>
        <Nav/>
        <div style={{padding:"10px", width:"300px"}}>     
        {/* <GeoLocation/> */}
        {/* <Auto/> */}
        <Address/></div>
  
        </>
    )
  };
  
  export default Plan;