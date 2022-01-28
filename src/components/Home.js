import React, { useContext } from 'react';
import { FaOutdent } from 'react-icons/fa';
import { useGlobalContext } from './context';
function Home () {
	const { openSidebar, isSidebarOpen } = useGlobalContext();

	return (
		<main>
			<button
				onClick={openSidebar}
				className={`${
					isSidebarOpen ? '-translate-x-8' : 'translate-x-0'
				} fixed top-2 transition transform ease-linear duration-500 text-gray-400 mt-1 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800`}
			>
				<FaOutdent className="w-5 h-5 rotate-180" />
			</button>
		</main>
	);
};

export default Home;
