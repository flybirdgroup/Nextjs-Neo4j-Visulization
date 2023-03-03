
<header className="bg-white shadow">
  <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
    <div className="flex items-center">
      <Image src="/logo.png" alt="Logo" width={120} height={40} />
      <div className="ml-4">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-l-lg focus:outline-none focus:shadow-outline">
          My Networks
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 focus:outline-none focus:shadow-outline">
          Find People
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 focus:outline-none focus:shadow-outline">
          Events
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-r-lg focus:outline-none focus:shadow-outline">
          Groups
        </button>
      </div>
    </div>
    <div className="flex items-center">
      <input className="bg-gray-200 rounded-l-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search..." />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-full focus:outline-none focus:shadow-outline" type="button">
        Search
      </button>
    </div>
  </nav>
</header>

<div class="relative">
  <input type="text" placeholder="Search" class="border border-gray-400 rounded-md pl-10 pr-4 py-2">
  <svg class="absolute left-3 top-3 h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M22 22L15.5 15.5M15.5 15.5C14.09 16.84 12.11 17.5 10 17.5C5.58 17.5 2 13.92 2 9.5C2 5.08 5.58 1.5 10 1.5C14.42 1.5 18 5.08 18 9.5C18 11.61 17.34 13.59 16 15L22 22Z"></path>
  </svg>
</div>





import { useState } from 'react';
import MyNetworks from '../components/MyNetworks';
import FindPeople from '../components/FindPeople';
import Events from '../components/Events';
import Groups from '../components/Groups';

const Home = () => {
  const [activeTab, setActiveTab] = useState('my-networks');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => handleTabClick('my-networks')}>My Networks</li>
          <li onClick={() => handleTabClick('find-people')}>Find People</li>
          <li onClick={() => handleTabClick('events')}>Events</li>
          <li onClick={() => handleTabClick('groups')}>Groups</li>
        </ul>
      </nav>
      {activeTab === 'my-networks' && <MyNetworks />}
      {activeTab === 'find-people' && <FindPeople />}
      {activeTab === 'events' && <Events />}
      {activeTab === 'groups' && <Groups />}
    </div>
  )
}

export default Home;
