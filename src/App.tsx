import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Wrapper from "./Layout/Wrapper";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Help = lazy(() => import("./pages/Help"));
const Plugins = lazy(() => import("./pages/Plugins"));
const Support = lazy(() => import("./pages/Support"));

const App = () => {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/support" element={<Support />} />
            <Route path="/plugins" element={<Plugins />} />
            <Route path="/help" element={<Help />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
