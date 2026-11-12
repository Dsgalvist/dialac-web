import HomeAbout from "../components/home/HomeAbout";
import HomeCategories from "../components/home/HomeCategories";
import HomeCta from "../components/home/HomeCta";
import HomeHero from "../components/home/HomeHero";
import HomeProcess from "../components/home/HomeProcess";
import HomeWhyUs from "../components/home/HomeWhyUs";
import ReviewsSection from "../components/reviews/ReviewsSection";

function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeCategories />
      <HomeProcess />
      <HomeWhyUs />
      <ReviewsSection />
      <HomeCta />
    </>
  );
}

export default HomePage;