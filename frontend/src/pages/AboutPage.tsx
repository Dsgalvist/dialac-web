import AboutCommitments from "../components/about/AboutCommitments";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutTimeline from "../components/about/AboutTimeLine";
import MissionVision from "../components/about/MissionVision";

function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <MissionVision />
      <AboutTimeline />
      <AboutCommitments />
    </>
  );
}

export default AboutPage;