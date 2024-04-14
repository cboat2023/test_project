import NavBar from '@/components/navbar';


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        </body>
    </html>
  );
}
