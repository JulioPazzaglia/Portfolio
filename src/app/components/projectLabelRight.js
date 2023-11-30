import Image from "next/image";
import Link from "next/link";

export default function ProjectLabelRight({
  title,
  subtitle,
  linkto,
  link,
  image,
}) {
  return (
    <Link href={link} target='_blank'>
      <div className='flex flex-col lg:flex-row BannerFadeRight p-4 rounded-lg justify-end'>
        <div className='col flex justify-center items-center flex-col px-8'>
          <h1 className='text-2xl font-bold text-center'>{title}</h1>
          <p className='hidden xl:block text-lg text-center'>{subtitle}</p>
          <p className='hidden xl:block text-lg text-center'>{linkto}</p>
          <h1 className='hidden lg:block text-4xl text-center'>➤</h1>
        </div>
        <Image
          src={image}
          alt='logo'
          width='250'
          height='250'
          className='flex self-center'
        />
      </div>
    </Link>
  );
}
