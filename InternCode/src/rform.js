import './components/Geo';
// import ReverseGeo from './components/reverseGeo';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import LocationIcon from './img/LI.png';

export default function Rfrom() {
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        if (navigator.geolocation) {
            const watchId = navigator.geolocation.watchPosition(
                position => {
                    setLat(position.coords.latitude);
                    setLng(position.coords.longitude);
                },
                error => {
                    console.error(error);
                },
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
            return () => navigator.geolocation.clearWatch(watchId);
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    // function which convert lat long to address ;
    const handleButtonClick = async () => {
        try {
            const response = await axios.get(
                `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=fe79cd45a8884fe38483b89cc613a8af`
            );
            setInputValue(response.data.results[0].formatted);
            setSuggestions([]);
        } catch (error) {
            console.log(error);
        }
    };


    const handleChange = async (event) => {
        const value = event.target.value;
        setInputValue(value);
        try {
            const response = await axios.get(
                `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=fe79cd45a8884fe38483b89cc613a8af&limit=5`
            );
            const results = response.data.results;
            const addresses = results.map((result) => result.formatted);
            setSuggestions(addresses);
        } catch (error) {
            console.log(error);
        }
    };
    const handleSelect = (address1) => {
        setInputValue(address1);
        setSuggestions([]);
    };
    const handleNoselect = () => {
        setSuggestions([]);
    };

    return (
        <div className='Form_wrap'>
            <form className="form-container">

                <div className="fheadings">
                    <p style={{ fontSize: "1.5em", color: "#ffff", lineHeight: "2" }}> <b> Book Services Now</b></p>
                    <p style={{ fontSize: ".9em", color: "#ffff" }}>Get Best experience here.</p>
                </div>
                {/* <ReverseGeo/> */}
                <div style={{ width: "100%" }}>
                    <input type="text" value={inputValue} onChange={handleChange} onClick={handleNoselect} className='edLocation' placeholder='Enter Your Location' />
                    <button className='locBtn' onClick={handleButtonClick}><img className='locImg' src={LocationIcon} alt=""></img></button>
                    <ul className='SuggestList-container'>
                        {suggestions.map((address1, index) => (
                            <li key={index} onClick={() => handleSelect(address1)} className="SuggestList">
                                {address1}
                            </li>
                        ))}
                    </ul>


                </div>

                <input className="inNumber" type={Number} placeholder='Enter Mobile Number :' id="UserNumber" />
                <button className="btn-gotoplans" id="btn-plans" >Check Price</button>
            </form>
        </div>
    )
}