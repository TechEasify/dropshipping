import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { LoginService } from '../../../../demo/service/LoginService';

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                if(credentials?.username === "" || credentials?.password  === ""){
                    return null;
                }
                const response = await new LoginService().validateLogin(credentials);
                const user = response.data.user;
                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    session:{
        strategy: "jwt"
    },
    secret: 'MYNEXTAPP',
    
}
