import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My NextJS App</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div>
        <div className="text-3xl font-bold underline text-orange-500 ">
          Click me again!
        </div>
      </div>
    </div>
  );
}
