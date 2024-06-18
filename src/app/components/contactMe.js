"use client";
//FALTA EL HOVER DE LOS BOTONES PARA QUE DIGAN QUE ES CAPAZ HACERLO MAS CHETO Y MAS CHETO EL ALERT
import Link from "next/link";
import Image from "next/image";

export default function ContactMe() {
  return (
    <div className='bg-gradient-to-b from-baseGreen via-middleGreen to-transparent p-4 rounded-lg'>
      <div className='flex justify-center items-center flex-col px-8'>
        <h1 className='text-2xl font-bold text-center'>Contact me</h1>
        <div className='w-full flex flow-row justify-around'>
          <Link
            href='https://wa.me/2325423315'
            target='_blank'
            className='px-2'
          >
            <Image
              src='/assets/contact/whatsapp.png'
              alt='details'
              width='80'
              height='80'
              className='pt-5 pb-2'
            />
          </Link>
          <Link
            href='https://github.com/juliopazzaglia'
            target='_blank'
            className='px-2'
          >
            <Image
              src='/assets/contact/github.png'
              alt='details'
              width='80'
              height='80'
              className='pt-5 pb-2'
            />
          </Link>
          <Link
            href='https://www.linkedin.com/in/julio-pazzaglia/'
            target='_blank'
            className='px-2'
          >
            <Image
              src='/assets/contact/linkedin.png'
              alt='details'
              width='80'
              height='80'
              className='pt-5 pb-2'
            />
          </Link>
          <Link
            href='https://drive.google.com/uc?export=download&id=1HgaFKYd4sBOWrvT1y2RKW4RPwmcu2Pec'
            target='_blank'
            className='px-2'
          >
            <Image
              src='/assets/contact/resume.png'
              alt='details'
              width='80'
              height='80'
              className='pt-5 pb-2'
            />
          </Link>
          <button
            onClick={() => {
              navigator.clipboard.writeText("julitopazzaglia@gmail.com");
              alert("Copied to clipboard");
            }}
            className='px-2'
          >
            <Image
              src='/assets/contact/email.png'
              alt='details'
              width='80'
              height='80'
              className='pt-5 pb-2'
            />
          </button>
        </div>
      </div>
    </div>
  );
}
