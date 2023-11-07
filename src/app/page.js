import Navbar from "./components/navbar";
import ProjectLabel from "./components/projectLabel";
import TitleBanner from "./components/banner";
import BackgroundDetails from "./components/backgroundDetails";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Navbar />
      <div className="w-full absolute z-10">
        <BackgroundDetails/>
      </div>
      <div className='p-4 w-4/5 p-12 mt-56 mt-24'>
        <TitleBanner />
      </div>
      <div className='w-full p-8 grid grid-cols-3 gap-12 mt-36'>
        <div className='col-start-2 col-span-2'>
          <ProjectLabel />
        </div>
        <div className='col-start-1 col-span-2 transform'>
          <ProjectLabel />
        </div>
        <div className='col-start-2 col-span-2 '>
          <ProjectLabel />
        </div>
        <div className='col-start-1 col-span-2'>
          <ProjectLabel />
        </div>
      </div>
    </main>
  );
}
