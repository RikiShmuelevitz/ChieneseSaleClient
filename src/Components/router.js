import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Donation from "./donation";
import DonationForm from "./donationForm";
import AddDonation from "./addDonation";
import Points from "./points";



export default function Router(){
    return(
        <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/addDonation" element={<AddDonation/>}/>
              <Route path="/donation" element={<Donation/>}/>
              <Route path="/donationForm" element={<DonationForm/>}/>
              <Route path="/donation" element={<Donation/>}/>
              <Route path="/points" element={<Points/>}/>
              
        </Routes>
      
    )
}