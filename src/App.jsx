import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Guests from "./pages/Guests";
import Contacts from "./pages/Contacts";
import Pricing from "./pages/Pricing";
import Profiles from "./pages/Profiles";
import PageNotFound from "./pages/PageNotFound";
import "flowbite/dist/flowbite.min.js";
import Subscription from "./pages/Subscription";
import Members from "./pages/Members";
import Notification from "./pages/Notification";
import LoginEmailPage from "./pages/LoginEmailPage";
import LoginPhonePage from "./pages/LoginPhonePage";
import SignupPage from "./pages/SignupPage";
import PhoneVerificationPage from "./pages/PhoneVerificationPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Guests />} />
            <Route path="/login/email" element={<LoginEmailPage />} />
            <Route path="/login/phone" element={<LoginPhonePage />} />
            <Route path="/verify/phone" element={<PhoneVerificationPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/members" element={<Members />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/pricing" element={<Pricing />} replace />
            <Route path="/profile" element={<Profiles />} />
            <Route path="/subscription" element={<Subscription />} />
          </Route>

          {/* <Route path="login" element={<Login />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
