import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Pozz",
      credentials: {
        name: {
          label: "Nom d'utilisateur :",
          type: "text",
          placeholder: "Entrer votre nom d'utilisateur",
        },
        password: { label: "Mot de passe :", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("/api/login", {
          method: "POST",
          body: JSON.stringify({
            name: credentials?.name,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        return user || null;
      },
    }),
  ],
};
export { handler as GET, handler as POST };

export default NextAuth(authOptions);
