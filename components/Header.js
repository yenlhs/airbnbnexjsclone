import React from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon, GlobeAltIcon, UserCircleIcon, UsersIcon, MenuIcon, Bars3Icon } from '@heroicons/react/24/solid';

function Header() {
	return (
		<header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
			{/* left */}
			<div className='relative flex items-center h-10 cursor-pinter my-auto'>
				<Image src='https://links.papareact.com/qd3' fill style={{ objectFit: 'contain' }} alt='' />
			</div>

			{/* search */}
			<div className='md:border-2 rounded-full flex items-center py-2 md:shadow-sm '>
				<input
					className='pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400'
					type='text'
					placeholder='Start your search'
				/>
				<MagnifyingGlassIcon className='hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex mx-auto md:mx-2' />
			</div>

			{/* right */}
			<div className='flex items-center justify-end space-x-4 text-gray-500'>
				<p className='hidden md:inline cursor-pointer'>Become a host</p>
				<GlobeAltIcon className='h-6' />
				<div className='flex space-x-2 border-2 rounded-full p-2'>
					<Bars3Icon className='h-6' />
					<UserCircleIcon className='h-6' />
				</div>
			</div>
		</header>
	);
}

export default Header;
