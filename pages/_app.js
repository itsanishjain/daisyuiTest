import "../styles/globals.css";
import Navigation from "../src/components/Navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
        <Navigation />
        <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
