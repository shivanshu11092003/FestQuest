import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import EventRegister from "../pages/organisation/EventRegister";
import OrganisationRegister from "../pages/organisation/OrganisationRegister";
import { Reports } from "../pages/organisation/Reports";
import UserDynamicForm from "../pages/organisation/User-Dynamic-Form";
import Register from "../pages/Register";
import EventPreview from "../pages/User/EventPreview";
import Root from "../Root";
import ProtectedRoute from "./Protected";
function Routing() {
  return (
    <Routes>
      <Route element={<Root />}>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="orgRegister" element={<OrganisationRegister />} />
        <Route path="" element={<Dashboard />}>
          <Route path="dashboard" element={<ProtectedRoute />} />
          {/* user routing */}
          <Route path="event/:id" element={<EventPreview />} />
          {/* organisation routing */}
          <Route path="eventRegister" element={<EventRegister />} />
          <Route path="dynamicForm" element={<UserDynamicForm />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Routing;
