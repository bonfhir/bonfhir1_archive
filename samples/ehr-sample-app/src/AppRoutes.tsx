import { ReactElement } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { Home } from "./pages/Home";
import { PatientHub } from "./pages/patients/PatientHub";
import { Patients } from "./pages/patients/Patients";

export function AppRoutes(): ReactElement | null {
  return (
    <Routes>
      <Route
        element={
          <AppLayout>
            <Outlet />
          </AppLayout>
        }
        path="/"
      >
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/patients/:patientId" element={<PatientHub />} />
      </Route>
    </Routes>
  );
}
