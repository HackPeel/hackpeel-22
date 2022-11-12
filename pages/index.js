import Layout from "../components/Layout"
import Hero from "../components/Home/Hero"
import TeamSection from "../components/TeamSection"
import SponsorsSection from "../components/SponsorsSection"
import AboutSection from "../components/AboutSection"
import FAQ from "../components/Home/FAQ"

import { getDocumentsProps } from "../lib/sanity/util"

export function getStaticProps() {
  return getDocumentsProps("team", true)
}

export default function Home({ documentsRaw }) {
  // TODO: Refactor this once we add sponsors to CMS
  const team = documentsRaw;
  return (
    <Layout name="Home">
      <Hero />
      <AboutSection />
      <FAQ />
      <SponsorsSection />
        <TeamSection team={team} />
    </Layout>
  )
}
