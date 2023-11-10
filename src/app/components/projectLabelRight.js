import Image from "next/image";

export default function ProjectLabelRight() {
  return (
    <div className='flex flex-col lg:flex-row BannerFadeRight p-4 rounded-lg justify-end'>
      <div className='col flex justify-center items-center flex-col px-8'>
        <h1 className='text-2xl font-bold text-center'>Dynamita Comics</h1>
        <p className='hidden xl:block text-lg text-center'>Ecommerce de Comics</p>
        <p className='hidden xl:block text-lg text-center'>Github repository</p>
        <h1 className='hidden lg:block text-4xl text-center'>➤</h1>
      </div>
      <Image
        src={"/assets/placeholderProjecto1.png"}
        alt='logo'
        width='250'
        height='250'
        className='flex self-center'
      />
    </div>
  );
}
