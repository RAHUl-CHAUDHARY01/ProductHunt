import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getConnection } from '@/lib/db';
import bcrypt from 'bcrypt';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const conn = await getConnection();
        const [rows] = await conn.execute('SELECT * FROM users WHERE email = ?', [email]);
        await conn.end();

        const users = rows as any[];
        if (users.length === 0) return null;

        const user = users[0];
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login', // Optional: custom login page
  },
  secret: process.env.NEXTAUTH_SECRET, // Required for JWT
});

export { handler as GET, handler as POST };
