
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="text-center py-10">
        <motion.img
          src="/ark_logo_drops.png"
          alt="ARK Logo"
          className="mx-auto w-40 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <h1 className="text-4xl font-bold tracking-tight">Redeemed. Restored.</h1>
        <p className="text-md mt-2 text-gray-700">Water, Mold, Cleaning, Ducts, Haul Offs, and More.</p>
      </header>
      <main className="max-w-4xl mx-auto px-4">
        <motion.img
          src="/ark_elephant_vent.png"
          alt="Elephant Hero"
          className="w-full rounded-xl shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="mt-10 space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 rounded-full font-bold"
          >
            Book Now
          </motion.button>
        </div>
      </main>
    </div>
  );
}
