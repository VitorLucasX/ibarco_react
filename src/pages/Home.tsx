import AllDestination from "../components/All_destination";
import Assistance from "../components/Assistance";
import Footer from "../components/Footer";
import HeroDiv from "../components/Hero_div";
import LatestPackage from "../components/Latest_package";
import Navbar from "../components/Navbar";
import RecommendedTours from "../components/Recommended_tours";
import SearchDiv from "../components/Search_div";

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroDiv />
        <SearchDiv />
        <AllDestination />
        <RecommendedTours />
        <Assistance />
        <LatestPackage />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
