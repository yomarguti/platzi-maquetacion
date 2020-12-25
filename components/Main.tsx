import Link from 'next/link';

const Main = () => {
  return (
    <main className="flex flex-col items-center h-screen bg-home-main bg-no-repeat bg-center bg-fixed">
      <section className="flex flex-col items-center pt-32 z-30 px-36">
        <h1 className="text-4xl text-white tracking-widest text-center pb-10">
          Conoce las Novedades y noticias del mundo Tech
        </h1>
        <Link href="/blogs">
          <div className="bg-primary px-5 py-1 border border-gray-500 shadow-md rounded font-bold cursor-pointer font-sans">
            Entra ya!!
          </div>
        </Link>
      </section>
    </main>
  );
};

export default Main;
