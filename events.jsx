// import React, { useState } from "react";

// function MainComponent() {
//   const [activeTab, setActiveTab] = useState("networking");

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//   };

//   return (
//     <div>
//       <TabBar activeTab={activeTab} handleTabClick={handleTabClick} />
//       {activeTab === "networking" && <NetworkingComponent />}
//       {activeTab === "findPeople" && <FindPeopleComponent />}
//       {activeTab === "events" && <EventsComponent />}
//       {activeTab === "groups" && <GroupsComponent />}
//     </div>
//   );
// }


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
