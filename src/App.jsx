import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";
import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Email from "./component/Email";
import Phone from "./component/Phone";
import Own from "./component/Own";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route path="/home" element={<Home />}>
        <Route path="own" element={<Own />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />}>
        <Route path="email" element={<Email />} />
        <Route path="phone" element={<Phone />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
