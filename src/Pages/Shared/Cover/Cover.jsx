import React from "react";
import { Link } from "react-router-dom";

const Cover = () => {
  return (
	<div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
	<div className="hero-overlay bg-opacity-60"></div>
	<div className="hero-content text-center text-neutral-content">
	  <div className="max-w-md">
	    <h1 className="mb-5 text-5xl font-bold">Welcome to PH Care </h1>
	    <p className="mb-5">Here you we care you and also your beloved Pets. You and your pets is our responsibility.</p>
	    <button className="btn btn-primary"><Link to="/login">Get Started</Link></button>
	  </div>
	</div>
    </div>
	
  );
};

export default Cover;
