import "../styles/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/next.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
