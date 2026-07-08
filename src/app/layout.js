import NavBar from '@/components/navbar';
import '../styles/globals.css';


export const metadata = {
  title: {
    default: "Caleb Boateng | Field Notes and Living Portfolio",
    template: "%s | Caleb Boateng",
  },
  description: "A public learning archive, digital commonplace book, and living portfolio across statistics, finance, technology, squash, faith, and community.",
  openGraph: {
    title: "Caleb Boateng | Field Notes and Living Portfolio",
    description: "Statistics, finance, technology, squash, faith, community, and notes from a polymath in progress.",
    type: "website",
  },
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
