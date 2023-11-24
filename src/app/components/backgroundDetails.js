import Image from "next/image";

export default function BackgroundDetails() {
  return (
    <div className='w-full h-full absolute'>
      <Image
        src={"/assets/backgroundImage2.png"}
        alt='details'
        width='400'
        height='400'
        className='sticky left-full'
      />
      <Image
        src={"/assets/backgroundImage1.png"}
        alt='details'
        width='400'
        height='400'
        className='absolute top-72'
      />
      <Image
        src={"/assets/backgroundImage3.png"}
        alt='details'
        width='250'
        height='250'
        className='absolute top-[40rem] right-0 '
      />
      <Image
        src={"/assets/backgroundImage4.png"}
        alt='details'
        width='400'
        height='400'
        className='absolute top-[65rem] left-0 '
      />
    </div>
  );
}
