
import React from "react";
import logo from "../assets/ark-logo.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-amber-50">
      <img src={logo} alt="ARK Restoration Logo" className="w-40 mb-6" />
      <h1 className="text-4xl font-bold text-yellow-700">Redeemed. Restored.</h1>
      <p className="text-gray-600 mt-4 text-center max-w-md">
        ARK Restoration provides water cleanup, mold remediation, air duct cleaning, trash can cleaning and more.
      </p>
      <button className="mt-6 px-6 py-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700">
        Book Now
      </button>
    </div>
  );
}
