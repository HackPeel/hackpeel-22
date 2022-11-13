import Layout from "../components/Layout"
import AboutEvent from "../components/AboutSectionEvent"
import TeamSection from "../components/TeamSection"
import SponsorsSection from "../components/SponsorsSection"

import { getDocumentsProps } from "../lib/sanity/util"

export function getStaticProps() {
  return getDocumentsProps("team", true)
}

export default function Home({ documentsRaw }) {
  // TODO: Refactor this once we add sponsors to CMS
  const team = documentsRaw;
  return (
    <Layout name="About">
      <AboutEvent />
      <TeamSection team={team}/>
      <SponsorsSection />
    </Layout>
  );
}