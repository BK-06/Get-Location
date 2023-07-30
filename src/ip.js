const root = 'https://ipinfo.io'
const token = '?token=54dfe5c2ff6777';

export function getIp() {
    const url = `${root}/ip${token}`;
    return fetch(url).then((r) => r.text()).then((data) => {
        return data;
    }).catch((e) => {
        console.log('ip error', e);
        return null;
    });
}


export function getLocation(ip) {
    const url = `${root}/${ip}/geo${token}`;
    return fetch(url).then((r) => r.json()).then((data) => {
        console.log('location', data);
        return data;
    }).catch((e) => {
        console.log('ip error', e);
        return null;
    });
}
