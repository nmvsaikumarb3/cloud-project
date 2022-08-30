import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Triggercloudevent from "./components/triggercloudevent";
import AWS from "./components/AWS";
import Asure from "./components/Asure";
import O365 from "./components/O365";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/login`} element={<Login />} />
          <Route path={`/create-account`} element={<Signup />} />
          <Route path={`/triggercloudevent`} element={<Triggercloudevent />} />
          <Route path={`/AWS`} element={<AWS />} />
          <Route path={`/Asure`} element={<Asure />} />
          <Route path={`/O365`} element={<O365 />} />
          <Route path="*" element={<Navigate to={"/login"} replace />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
