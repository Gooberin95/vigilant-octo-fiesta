import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Apple() {
	return (
		<BrowserRouter>
		<Routes>
		 <Route path="/" element={<Layout />} >
		 <Route path="blogs" element={<Blogs />} />
		 <Route path="contact" element={<Contact />} />
		 <Route path="*" element={<Home />} />
	        </Route>
	       </Routes>
	      </BrowserRouter>
	);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Apple />
  </React.StrictMode>
);

