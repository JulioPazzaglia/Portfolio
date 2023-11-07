import Image from "next/image";

export default function BackgroundDetails() {
  return (
    <div className='w-full'>
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
    </div>
  );
}
