import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>My Website</title>
        <meta name="description" content="My website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div>
            <Image src="/logo.png" alt="Logo" width={120} height={40} />
          </div>
          <ul className="flex">
            <li className="mr-6">
              <Link href="/">
                <a className="text-gray-600 hover:text-gray-800 font-medium">My Networks</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/events">
                <a className="text-gray-600 hover:text-gray-800 font-medium">Events</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/find-people">
                <a className="text-gray-600 hover:text-gray-800 font-medium">Find People</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/groups">
                <a className="text-gray-600 hover:text-gray-800 font-medium">Groups</a>
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            <input className="bg-gray-200 rounded-l-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search..." />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-full focus:outline-none focus:shadow-outline" type="button">
              Search
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-medium mb-4">Events</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md">
              <Image src="/event-image-1.jpg" alt="Event" width={400} height={225} className="rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2">Event Title</h2>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-600">Date: March 15, 2023</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px




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
