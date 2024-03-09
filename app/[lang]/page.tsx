import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { Locale } from "@/configs/i18n.config";

import { getDictionary } from "@/dictionaries/get-dictionary-server";

export default async function Home({params}: {params: {lang: Locale}}) {
  const dict = await getDictionary(params.lang)
  return (
    <main className="flex flex-col items-center px-4">
      <Intro dict={dict}/>
      <SectionDivider dict={dict}/>
      <About dict={dict}/>
      <Projects dict={dict}/>
      <Skills dict={dict}/>
      <Experience dict={dict}/>
      <Contact dict={dict}/>
    </main>
  );
}
