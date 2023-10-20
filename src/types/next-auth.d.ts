import NextAuth from "next-auth"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            email
            :
            string,
            first_name
            :
            string,
            forgot_password_token
            :
            string,
            last_name
            :
            string,
            password
            :
            string,
            phone_number
            :
            string,
            role
            :
            string,
            user_id
            :
            string,

        }
    }
}