"use client";

import Link from "next/link";
import Image from "next/image";

export default function ContactMe() {
  return (
    <div className='bg-gradient-to-b from-baseGreen via-middleGreen to-transparent p-4 rounded-lg'>
      <div className='flex justify-center items-center flex-col px-8'>
        <h1 className='text-2xl font-bold text-center'>Contact me</h1>
        <div className='w-full flex flow-row justify-around'>
          <Link
            href='https://w.app/JulioPazzaglia'
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
          <Link href='https://github.com/juliopazzaglia' className='px-2'>
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
            href='https://drive.google.com/uc?export=download&id=1A84dO8k0Ky7dHBRb2LMReM9Gk9b2xJWj'
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
