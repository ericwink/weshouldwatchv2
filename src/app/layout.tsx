"use client";

import { useState } from "react";
import "./globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "./theme/theme";
import NavBar from "./components/NavBar";

// export const metadata = {
//   title: "We Should Watch",
//   description: "An app for tracking media to watch with your friends and family",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const switchTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <html lang="en">
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <body>
          <NavBar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
