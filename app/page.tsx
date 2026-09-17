import About from "./about/page";
import ContactPage from "./contact/page";
import FamilySponsorshipPage from "./family-sponsorship/page";
import GetInvolvedPage from "./get_involved/page";
import HomePage from "./home/page";
import CommunitySponsorshipPage from "./community-sponsorship/page";

export default function Index() {
  return (
    <main>
      <HomePage />
      <About />
      <ContactPage />
      <FamilySponsorshipPage />
      <GetInvolvedPage />
      <CommunitySponsorshipPage />
    </main>
  );
}