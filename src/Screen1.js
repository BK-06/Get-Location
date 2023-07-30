import { useState } from "react";
import { getIp, getLocation } from "./ip";
import { useNavigate } from "react-router";

export default function Screen1() {
    // https://ipinfo.io/ip
    const navigate = useNavigate();

    const [ip, setIP] = useState(null);
    const [error, setError] = useState(null);
    const getData = () => {
        setError(null);
        getIp().then((data) => {
            console.log('got ip', data);
            localStorage.setItem('ip', data);
            setIP(data);
            return getLocation(data).then((location) => {
                const js = JSON.stringify;
                localStorage.setItem('geo', js(location));
                navigate('/data')
            });
        }).catch((e) => {
            console.log('No err', e);
            setError('Error while fetching data, please try after sometime.');
            localStorage.setItem('error', 'Unknown');
        });
    }
    return (
        <div>
            My Public IP Adress:
            <br/>
            <button onClick={getData}>Get Data</button>

            {error ? error: null}
        </div>
    )
} 