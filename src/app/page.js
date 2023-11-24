import Navbar from "./components/navbar";
import ProjectLabelLeft from "./components/projectLabelLeft";
import ProjectLabelRight from "./components/projectLabelRight";
import TitleBanner from "./components/banner";
import BackgroundDetails from "./components/backgroundDetails";
import AboutMeLabel from "./components/aboutMeLabel";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Navbar />
      <div className='w-full absolute z-10'>
        <BackgroundDetails />
      </div>
      <div className='p-4 w-4/5 p-12 mt-56 mt-24'>
        <TitleBanner />
      </div>
      <div className='w-full px-10 md:px-40 grid grid-cols-3 gap-y-20 my-40'>
        <div className='col-start-1 md:col-start-2 col-span-3'>
          <ProjectLabelRight />
        </div>
        <div className='col-start-1 col-span-3 md:col-span-2'>
          <ProjectLabelLeft />
        </div>
        <div className='col-start-1 md:col-start-2 col-span-3'>
          <ProjectLabelRight />
        </div>
      </div>
      <div className='px-20 md:px-40 my-20'>
        <AboutMeLabel />
      </div>
      <div className='grid grid-cols-4 gap-4 px-20 md:px-40 my-20'>
        <AboutMeLabel />
        <AboutMeLabel />
        <AboutMeLabel />
        <AboutMeLabel />
      </div>
    </main>
  );
}