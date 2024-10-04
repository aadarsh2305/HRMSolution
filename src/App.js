// import { MsalProvider } from "@azure/msal-react";
// import { msalInstance } from "./Auth/msalConfig";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Dashboard from "./Pages/Dashboard";
import TalentPool from "./Pages/TalentPool";
import EmployeeProfile from "./Pages/Themes";
import MyList from "./Pages/MyList";
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/Navbar/ProfilePage";
import Opportunities from "./Pages/Opportunities";

function App() {
  const user ="Aadarsh";

  return (
    // <MsalProvider instance={msalInstance}>
    //   <Navbar />
    //   <AppRoutes />
    // </MsalProvider>
    <div className="flex flex-row h-screen">
      <div className="fixed top-0 left-0 h-screen w-64">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow ml-64">
        <div className="fixed top-0 left-64 right-0">
          <Navbar />
        </div>
        <div className="flex-grow pt-16 overflow-y-auto">
          <MainContent />

          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/talent-pool" element={<TalentPool />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/themes" element={<EmployeeProfile />} />
            <Route path="/profile" element={<ProfilePage user={user}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
