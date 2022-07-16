import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Photography Website</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Hero
				heading="Africa calls!"
				message="When African the beats calls, you need to answer!"
			/>
		</div>
	);
}
