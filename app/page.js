"use client";

import Hero from "./components/Hero/Hero";
import Blurbs from "./components/Blurbs/Blurbs";
import Offers from "./components/Offers/Offers";
import CallToAction from "./components/CallToAction/CallToAction";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

import { MainWrapper } from './page.style';

export default function Home() {
  return (

    <MainWrapper id='home'>
      <Hero />
      <Blurbs />
      <Offers />
      <CallToAction />
      <Team />
      <Footer />
    </MainWrapper>
  );
}
