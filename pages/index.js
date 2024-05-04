import Head from "next/head";
import { HomePage } from "../src/components/home/home-page";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>Events app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const {events_categories} = await import('/data/data.json')

  return {
    props: {
      data: events_categories
    }
  }
}