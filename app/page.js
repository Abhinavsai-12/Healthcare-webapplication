import HomeSection1 from "./home-section/homesection-1";
import CorporateInfo from "./corporate-info/page";
import styles from "./page.module.css";
import ReachUs from "./contact/page";
import Manufacturing from "./manufacturing/page";
import Research from "./research/page";
import Stats from "./home-section/homesection2Stats";
import WhyChooseUs from "./home-section/WhyChooseUs";
import MissionSection from "./home-section/OurMission";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeSection1 />
      <Stats/>
      <MissionSection/>
      <WhyChooseUs/>
      <Manufacturing/>
      <Research/>
      <CorporateInfo />
      {/* <ReachUs/> */}
    </div>
  );
}
