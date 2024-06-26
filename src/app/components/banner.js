import Link from "next/link";

export default function TitleBanner() {
  return (
    <div className='BannerFadeLeft rounded-3xl grid grid-cols-2'>
      <div className='col-span-2 md:col-span-1 p-12'>
        <h1 className='text-3xl lg:text-5xl sm:text-4xl py-2'>Julio</h1>
        <h2 className='text-3xl lg:text-5xl sm:text-4xl py-2 pl-8'>
          Pazzaglia
        </h2>
        <h3 className='lg:text-3xl text-2xl py-2'>Full Stack Developer</h3>
      </div>
      <Link
        href={"#projects"}
        className='flex flex-col pr-12 justify-center items-center invisible md:visible'
      >
        <h1 className='text-2xl'>My Work</h1>
        <h1 className='text-4xl'>➤</h1>
      </Link>
    </div>
  );
}
