import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import Listings from "./components/Listings/featured";
import Mentor from "./components/Mentor/index";
import Testimonials from "./components/Testimonials/index";
import Newsletter from "./components/Newsletter/Newsletter";
import HomeListings from "./components/Home/index";
import { Looking, FooterBanner } from "./components/";

export default function Home() {
  return (
    <main>
      <Banner />
      <Listings />
      <HomeListings />
      <Looking />
      {/* <Mentor /> */}
      <Testimonials />
      <FooterBanner />
      {/* <Newsletter /> */}
      <Companies />
    </main>
  );
}
