import AuthProvider from "../utils/authProvider";
import { TrpcProvider } from "../utils/trpcProvider";
import { Inter } from "@next/font/google";

const inter = Inter();

import "../styles/globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <TrpcProvider>
        <AuthProvider>
          <body>{children}</body>
        </AuthProvider>
      </TrpcProvider>
    </html>
  );
};

export default RootLayout;
