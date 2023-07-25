import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Head from 'next/head';

export default function Home(props) {
	console.log(props);
	return (
		<div className=''>
			<Head>
				<title>Airbnb</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Header */}
			<Header />

			{/* Banner */}
			<Banner />

			<main className='max-w-7xl mx-auto px-8 sm:px-16'>
				<section className='pt-6'>
					<h2 className='text-4xl font-semibold pb-5'> Explore Nearby</h2>
					{/* pull some data from a server - API endpoints */}
					{exploreData?.map((item) => (
						<h1>{item.location}</h1>
					))}
				</section>
				<section>
					<h2>Live Anywhere</h2>
				</section>
			</main>
		</div>
	);
}

export async function getStaticProps() {
	try {
		const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());
		console.log(exploreData);
		return {
			props: { exploreData },
		};
	} catch (err) {
		console.log(err);
	}
}
