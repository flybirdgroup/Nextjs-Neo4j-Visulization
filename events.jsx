<header className="bg-white shadow">
  <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
    <div className="flex items-center">
      <div>
        <Image src="/logo.png" alt="Logo" width={120} height={40} />
      </div>
      <ul className="flex ml-6">
        <li className="mr-6">
          <button className="text-gray-600 hover:text-gray-800 font-medium focus:outline-none">My Networks</button>
        </li>
        <li className="mr-6">
          <button className="text-gray-600 hover:text-gray-800 font-medium focus:outline-none">Events</button>
        </li>
        <li className="mr-6">
          <button className="text-gray-600 hover:text-gray-800 font-medium focus:outline-none">Find People</button>
        </li>
        <li className="mr-6">
          <button className="text-gray-600 hover:text-gray-800 font-medium focus:outline-none">Groups</button>
        </li>
      </ul>
    </div>
    <div className="flex items-center">
      <input className="bg-gray-200 rounded-l-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search..." />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-full focus:outline-none focus:shadow-outline" type="button">
        Search
      </button>
    </div>
  </nav>
</header>







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
