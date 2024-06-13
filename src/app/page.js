"use client";
import { createContext } from "react";

const Context = createContext();

import Navbar from "./components/navbar";
import ProjectLabelLeft from "./components/projectLabelLeft";
import ProjectLabelRight from "./components/projectLabelRight";
import TitleBanner from "./components/banner";
import BackgroundDetails from "./components/backgroundDetails";
import AboutMeLabel from "./components/aboutMeLabel";
import Interests from "./components/Interests";
import ContactMe from "./components/contactMe";

import {
  tabletopData,
  gamesData,
  filmData,
  skateData,
} from "../../public/data/interestData";

import {
  bambaData,
  shipMathData,
  portfolioData,
} from "../../public/data/proyectsData";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Navbar />
      <div className='p-4 w-4/5 p-12 mt-56 mt-24 z-20'>
        <TitleBanner />
      </div>
      <div
        className='w-full px-10 md:px-40 grid grid-cols-3 gap-y-20 my-40 pt-40 z-10'
        id='projects'
      >
        <div className='col-start-1 md:col-start-2 col-span-3'>
          <ProjectLabelRight
            title={bambaData.title}
            subtitle={bambaData.subtitle}
            linkto={bambaData.linkTo}
            link={bambaData.link}
            image={bambaData.image}
          />
        </div>
        <div className='col-start-1 col-span-3 md:col-span-2'>
          <ProjectLabelLeft
            title={shipMathData.title}
            subtitle={shipMathData.subtitle}
            linkto={shipMathData.linkTo}
            link={shipMathData.link}
            image={shipMathData.image}
          />
        </div>
        <div className='col-start-1 md:col-start-2 col-span-3'>
          <ProjectLabelRight
            title={portfolioData.title}
            subtitle={portfolioData.subtitle}
            linkto={portfolioData.linkTo}
            link={portfolioData.link}
            image={portfolioData.image}
          />
        </div>
      </div>
      <div className='px-10 md:px-40 my-20 pt-40' id='aboutMe'>
        <AboutMeLabel />
      </div>
      <h1 className='text-xl font-bold text-center'>Intereses</h1>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 px-10 md:px-40 my-20'>
        <Interests image={tabletopData.image} name={tabletopData.name} />
        <Interests image={gamesData.image} name={gamesData.name} />
        <Interests image={filmData.image} name={filmData.name} />
        <Interests image={skateData.image} name={skateData.name} />
      </div>
      <div className='w-full mt-20' id='contactMe'>
        <ContactMe />
      </div>
      <div className='w-full absolute'>
        <BackgroundDetails />
      </div>
    </main>
  );
}
