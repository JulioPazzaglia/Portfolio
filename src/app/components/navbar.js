import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <nav className='NavbarFade fixed w-full rounded-bl-xl flex flex-row items-center z-20'>
      <Link href={"./"}>
        <Image
          src={"/assets/LogoLataBlanco.png"}
          alt='logo'
          width='64'
          height='64'
          className='p-4'
        />
      </Link>
      <Link href={"#projects"}>
        <h1 className='p-4'>Projects</h1>
      </Link>
      <Link href={"#aboutMe"}>
        <h1 className='p-4'>About me</h1>
      </Link>
      <Link href={"#contactMe"}>
        <h1 className='p-4'>Contact me</h1>
      </Link>
    </nav>
  );
}
