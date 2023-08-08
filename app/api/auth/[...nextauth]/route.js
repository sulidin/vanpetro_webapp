import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

import User from '@models/user';
import { connectToDB } from '@utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Credentials({
    //     name: 'Credentials',
    //     credentials: {
    //         username: { label: "Username", type: "text", placeholder: "jsmith" },
    //         password: {  label: "Password", type: "password" },
    //         email: { label: "Email", type: "email", placeholder: "email@email.com" },
    //     }
    // })

  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      session.user.role = sessionUser.role;

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
        // console.log('account', account);
        // console.log('profile', profile);
      try {
        await connectToDB();
        console.log('database connected');

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });
        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),     
          });
        }
        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
  }
})

export { handler as GET, handler as POST }
