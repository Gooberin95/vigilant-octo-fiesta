import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   	<BrowserRouter>
		<Routes>
		 <Route path="/" element={<Layout />} >
		 <Route index element={<Home />} />
		 <Route path="blogs" element={<Blogs />} />
		 <Route path="links" element={<Contact/>} />
		 <Route path="*" element={<NoPage/>} />
	        </Route>
	       </Routes>
	      </BrowserRouter>

  </React.StrictMode>
);

