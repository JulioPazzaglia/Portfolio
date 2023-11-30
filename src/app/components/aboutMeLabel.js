export default function AboutMeLabel() {
  return (
    <div className='bg-gradient-to-b from-baseGreen via-middleGreen to-transparent p-4 rounded-lg'>
      <div className='flex justify-center items-center flex-col px-8'>
        <h1 className='text-2xl font-bold text-center'>About me</h1>
        <h1 className='text-lg pt-5 text-center'>
          I&apos;m a skilled developer from Argentina specializing in full-stack
          development. I work with technologies such as React.js, Node.js,
          PostgreSQL, Next.js, Express, and Redux.
          <br />
          <div className='hidden lg:block'>
            I also have apassion for game development using Unity and C#,
            delivering engaging interactive experiences.
            <br />
            I&apos;m eager to contribute my skills and enthusiasm to your
            projects, whether in web development or game design.
          </div>
        </h1>
      </div>
    </div>
  );
}
