import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <nav class='NavbarFade fixed w-full rounded-bl-xl flex flex-row items-center'>
      <Link href={"./"}>
        {/* Scroll to top?? */}
        <Image
          src={"/assets/LogoLataBlanco.png"}
          alt='logo'
          width='64'
          height='64'
          className='p-4'
        />
      </Link>
      <h1 className='p-4'>Projects</h1>
      <h1 className='p-4'>About me</h1>
      <h1 className='p-4'>Contact me</h1>
    </nav>
  );
}
