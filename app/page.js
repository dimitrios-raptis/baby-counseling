"use client";

import Image from "next/image";
import Hero from "./components/Hero/Hero";
import styles from "./page.module.css";

import { MainWrapper } from './page.style';

export default function Home() {
  return (

    <MainWrapper>
      <Hero />
    </MainWrapper>
  );
}
