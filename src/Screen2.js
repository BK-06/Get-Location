export default function Screen2() {
    const ip = localStorage.getItem('ip');
    let location = localStorage.getItem('geo');
    const loc = JSON.parse(location);
    const mapUrl = `https://maps.google.com/maps?q=${loc.loc}&z=15&output=embed`;
    // location = JSON.parse(location);
    console.log('Map url', mapUrl);
    const iframe = `<iframe src=${mapUrl} width="360" height="270" frameborder="0" style="border:0"></iframe>`;
    const c = {
        __html: iframe
    };
    let timezoneTime = new Date().toLocaleString("en-US", { timeZone: loc.timezone });

    return (
        <div>
            My Public IP Adress:
            <br/>
            {/* Location: {location} */}
            <ul>
                <li>Lat: {loc.loc.split(',').shift()}</li>
                <li>Long: {loc.loc.split(',').pop()}</li>
                <li>City: {loc.city}</li>
                <li>Region: {loc.region}</li>
                <li>Organisation: {loc.org}</li>
                <li>Hostname: {loc.ip}</li> 
            </ul>
            <div dangerouslySetInnerHTML= {c}>
            </div>
            
            <ul>
                <li>Timezone: {loc.timezone}</li>
                <li>Postal: {loc.postal}</li>
                <li>Date and Time: {timezoneTime}</li>
            </ul>

        </div>
    )
}