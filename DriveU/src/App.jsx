import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Sign/Login";
import DriverReg from "./Components/Dashboard/DriverDash/DriverRegister/DriverReg";
import CustomerDash from "./Components/Dashboard/CustomerDash/CustomerDash";
import DriverDash from "./Components/Dashboard/DriverDash/DriverDash";
import Forgot from "./Components/Sign/Forgot";
import PersonalInfo from "./Components/Sign/Register/PersonalInfo";
import UserInfo from "./Components/Sign/Register/UserInfo";
import Address from "./Components/Sign/Register/Address";
import RecentDrivers from "./Components/Dashboard/CustomerDash/RecentDrivers";
import Hire from "./Components/Dashboard/CustomerDash/Hire";
import Status from "./Components/Dashboard/CustomerDash/Status";
import CProfile from "./Components/Dashboard/CustomerDash/CProfile";
import CHistory from "./Components/Dashboard/CustomerDash/CHistory";
import { Provider } from "react-redux";
import store from "./ReduxStore";
import DProfile from "./Components/Dashboard/DriverDash/DProfile";
import DHistory from "./Components/Dashboard/DriverDash/DHistory";
import JobPost from "./Components/Dashboard/DriverDash/JobPost";
import Payment from "./Components/Dashboard/DriverDash/Payment";
import TStatus from "./Components/Dashboard/DriverDash/TStatus";
import Dpersonal from "./Components/Dashboard/DriverDash/DriverRegister/Dpersonal";
import DuserInfo from "./Components/Dashboard/DriverDash/DriverRegister/DuserInfo"


function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register-Driver" element={<DriverReg />} />
          <Route path="/Dashboard-Customer" element={<CustomerDash />} />
          <Route path="/Dashboard-Driver" element={<DriverDash />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Personal-Info" element={<PersonalInfo />} />
          <Route path="/User-Info" element={<UserInfo />} />
          <Route path="/Address-Info" element={<Address />} />
          <Route path="/Recent-Drivers" element={<RecentDrivers />} />
          <Route path="/Hire" element={<Hire />} />
          <Route path="/Status" element={<Status />} />
          <Route path="/Customer-Profile" element={<CProfile />} />
          <Route path="/Customer-History" element={<CHistory />} />
          <Route path="/Driver-Profile" element={<DProfile />}/>
          <Route path="/Driver-History" element={<DHistory/>}/>
          <Route path="/Job-Post" element={<JobPost/>}/>
          <Route path="/Payment" element={<Payment/>}/>
          <Route path="/Trip-Status" element={<TStatus/>}/>
          <Route path="/Driver-Personal" element={<Dpersonal/>}/>
          <Route path="/Driver-User" element={<DuserInfo/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
