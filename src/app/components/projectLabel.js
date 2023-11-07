import Image from "next/image";

export default function ProjectLabel() {
  return (
    <div className='BannerFade p-4 rounded-lg grid grid-cols-3 gap-4 justify-center'>
      <Image
        src={"/assets/placeholderProjecto1.png"}
        alt='logo'
        width='250'
        height='250'
        className=''
      />
      <div className='col flex justify-center items-center flex-col'>
        <h1 className='text-2xl font-bold'>Dynamita Comics</h1>
        <p className='text-lg'>Ecommerce de Comics</p>
        <p className='text-lg'>Github repository</p>
      </div>
      <div className='col flex justify-center flex-col'>
        <h1 className='text-4xl'>➤</h1>
      </div>
    </div>
  );
}
