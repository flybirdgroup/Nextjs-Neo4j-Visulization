import React, { useState } from "react";

function MainComponent() {
  const [activeTab, setActiveTab] = useState("networking");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <TabBar activeTab={activeTab} handleTabClick={handleTabClick} />
      {activeTab === "networking" && <NetworkingComponent />}
      {activeTab === "findPeople" && <FindPeopleComponent />}
      {activeTab === "events" && <EventsComponent />}
      {activeTab === "groups" && <GroupsComponent />}
    </div>
  );
}
