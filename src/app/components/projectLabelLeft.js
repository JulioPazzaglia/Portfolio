import Image from "next/image";
import Link from "next/link";

export default function projectLabelLeft({
  title,
  subtitle,
  linkto,
  link,
  image,
}) {
  return (
    <Link href={link} target='_blank'>
      <div className='flex-col-reverse lg:flex-row BannerFadeLeft p-4 rounded-lg flex'>
        <Image
          src={image}
          alt='logo'
          width='250'
          height='250'
          className='flex self-center'
        />
        <div className='col flex justify-center items-center flex-col px-8'>
          <h1 className='text-2xl font-bold text-center'>{title}</h1>
          <p className='hidden xl:block text-lg text-center'>{subtitle}</p>
          <p className='hidden xl:block text-lg text-center'>{linkto}</p>
          <h1 className='hidden lg:block text-4xl text-center'>➤</h1>
        </div>
      </div>
    </Link>
  );
}
