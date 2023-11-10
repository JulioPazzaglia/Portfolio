import Image from "next/image";

export default function projectLabelLeft() {
  return (
    <div className='flex-col-reverse lg:flex-row  BannerFadeLeft p-4 rounded-lg flex'>
      <Image
        src={"/assets/placeholderProjecto1.png"}
        alt='logo'
        width='250'
        height='250'
        className='flex self-center'
      />
      <div className='col flex justify-center items-center flex-col px-8'>
      <h1 className='text-2xl font-bold text-center'>Dynamita Comics</h1>
        <p className='hidden xl:block text-lg text-center'>Ecommerce de Comics</p>
        <p className='hidden xl:block text-lg text-center'>Github repository</p>
        <h1 className='hidden lg:block text-4xl text-center'>➤</h1>
      </div>
    </div>
  );
}
