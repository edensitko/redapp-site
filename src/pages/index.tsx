import { type NextPage } from 'next';
import dynamic from 'next/dynamic';
import SEO from '../components/SEO';
import CallToAction from '../components/CallToAction';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Projects from '../components/Projects';
import HomeBlog from '../components/HomeBlog';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';

// Dynamic imports for better performance
const Hero = dynamic(() => import('../components/Hero'));

const Home: NextPage = () => {
  return (
    <>
      <SEO 
        title="רד אפ - RedApp | פיתוח אפליקציות ותוכנה מותאמת אישית"
        description="רד אפ מתמחה בפיתוח אפליקציות מתקדמות ופתרונות טכנולוגיים חדשניים. אנו מספקים שירותי פיתוח מקצועיים, מעיצוב ועד השקה, עם דגש על חווית משתמש מעולה וביצועים מיטביים."
        keywords={[
          'רד אפ',
          'RedApp',
          'פיתוח אפליקציות',
          'פיתוח תוכנה',
          'אפליקציות מובייל',
          'פיתוח אפליקציות iOS',
          'פיתוח אפליקציות אנדרואיד',
          'בניית אפליקציות',
          'פיתוח תוכנה מותאם אישית',
          'חברת פיתוח אפליקציות',
          'סטארטאפ טכנולוגי',
          'פתרונות טכנולוגיים',
          'עיצוב UI/UX',
          'פיתוח אפליקציות בישראל'
        ]}
      />
      <main className="min-h-screen bg-white dark:bg-[rgb(26,27,27)]">
        <Hero />
        <CallToAction />
        <About />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <Pricing />
        <HomeBlog />
        <FAQ />
        <Contact />
      </main>
    </>
  );
};

export default Home;
