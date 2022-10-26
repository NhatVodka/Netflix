import Head from "next/head";
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtoms";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Row from "../components/Row";
import useAuth from "../hooks/useAuth";
import { Movie } from "../typing";
import requests from "../utils/requests";

interface Props {
  NowPlaying: Movie[];
  TopRated: Movie[];
  Popular: Movie[];
  Upcoming: Movie[];
}

const Home = ({ NowPlaying, TopRated, Popular, Upcoming }: Props) => {
  const { loading } = useAuth();
  const showModal = useRecoilValue(modalState);
  if (loading) return "Loading...";
  return (
    <div className="relative h-screen bg-gradient-to-blg:h-[140vh]">
      <Head>
        <title>Home-Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y24 lg:pl-16">
        <Banner NowPlaying={NowPlaying} />
        <section className=" md:space-y-24">
          <Row title="Now Playing" movies={NowPlaying} />
          <Row title="Top Rated" movies={TopRated} />
          <Row title="Popular" movies={Popular} />
          {/* My List */}
          {/* {list.length > 0 && <Row title="My List" movies={list} />} */}

          <Row title="Upcoming" movies={Upcoming} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [NowPlaying, TopRated, Popular, Upcoming] = await Promise.all([
    fetch(requests.fetchNowPlaying).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchPopular).then((res) => res.json()),
    fetch(requests.fetchUpcoimg).then((res) => res.json()),
  ]);
  return {
    props: {
      NowPlaying: NowPlaying[0].results,
      TopRated: TopRated[0].results,
      Popular: Popular[0].results,
      Upcoming: Upcoming[0].results,
    },
  };
};
