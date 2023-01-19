import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Alerts from "./alerts/Alerts";
import Statistics from "./statistics/Statistics";
import Tickets from "./tickets/Tickets";
function App() {
  return (
    <Routes>
      <Route path="/*" element={<Dashboard />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/alerts/*" element={<Alerts />} />
      <Route path="/statistics/*" element={<Statistics />} />
      <Route path="/tickets/*" element={<Tickets />} />
    </Routes>
  );
}

export default App;
