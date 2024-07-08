import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Guests from "./pages/Guests";
import Contacts from "./pages/Contacts";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Guests />} />
            <Route path="contact" element={<Contacts />} />
            {/* <Route path="bookings/:bookingId" element={<Booking />} /> */}
            <Route path="pricing" element={<Pricing />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* <Route path="login" element={<Login />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
