// assets
// import define_text from '.../assets/define-text.svg';
import define_logo_outline from '../assets/define-logo-outline.svg';

// styles
import '../styles/template.scss';
import '../styles/home.scss';

// scripts
// import '../scripts/intro';

// components
import Header from '../components/header';
import Footer from '../components/footer';
import PageTemplate from './PageTemplate';

import { HomeLanding } from '../components/HomeLanding';
import { HomeAboutUs } from '../components/HomeAboutUs';
import { HomeStats } from './HomeStats';

export default function Home ()
{
  return (
    <PageTemplate>
      
      <HomeLanding/>

      <HomeAboutUs/>
      
      <HomeStats/>

    </PageTemplate>
  );
}
