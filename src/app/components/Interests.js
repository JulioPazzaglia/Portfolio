import Image from "next/image";

export default function Interests({ image, name }) {
  console.log(image);
  return (
    <div className='bg-gradient-to-t from-baseGreen via-middleGreen to-transparent p-4 rounded-lg'>
      <div className='flex justify-center items-center flex-col px-8'>
        <Image
          src={image}
          alt='details'
          width='80'
          height='80'
          className='py-5'
        />
        <h1 className='text-xl font-bold text-center'>{name}</h1>
      </div>
    </div>
  );
}
