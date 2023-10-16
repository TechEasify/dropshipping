import getConfig from 'next/config';
import axios from 'axios';
export class LoginService {
    constructor() {
        // this.contextPath = getConfig().publicRuntimeConfig.contextPath;
        this.contextPath = 'https://shopifyapp.iihtsrt.com/public/user/naturescure-api/v1/';
    }

    async validateSignUp(client) {
        const res = await axios.post(this.contextPath + 'register', client, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res;

        // const res = await fetch(this.contextPath + '/login?email=' + email + '&password=' + password, { headers: { 'Cache-Control': 'no-cache' } });
        // return res;
    }

    async validateLogin(client) {
        const res = await axios.post(this.contextPath + 'login', client, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res;

        // const res = await fetch(this.contextPath + '/login?email=' + email + '&password=' + password, { headers: { 'Cache-Control': 'no-cache' } });
        // return res;
    }

    async validateAccessToken(token) {
        const res = await fetch('https://apidropshipping/auth?token=' + token, { headers: { 'Cache-Control': 'no-cache' } });
        return res;
    }

    async getCustomersLarge() {
        const res = await fetch(this.contextPath + '/demo/data/customers-large.json', { headers: { 'Cache-Control': 'no-cache' } });
        const d = await res.json();
        return d.data;
    }
}
