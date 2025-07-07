
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6
    }
  })
};

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-[#fefefe] text-center p-4"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <motion.header className="mb-6" custom={1} variants={fadeUp}>
        <img src="/ark_logo_drops.png" alt="ARK Logo" className="mx-auto w-24" />
        <h1 className="text-3xl font-bold mt-2">ARK Restoration</h1>
        <p className="text-md italic text-gray-600">Redeemed..Restored</p>
      </motion.header>

      <motion.img
        src="/ark_elephant_vent.png"
        alt="Elephant Cleaning"
        className="mx-auto w-full max-w-md rounded-xl shadow mb-6"
        custom={2}
        variants={fadeUp}
      />

      <motion.div className="space-y-6 max-w-md mx-auto" custom={3} variants={fadeUp}>
        <Card>
          <CardContent>
            <p className="mb-4 text-gray-700">Book your service or get a quote.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-full"
            >
              Book Now
            </motion.button>
          </CardContent>
        </Card>

        <motion.div className="text-left mt-8" custom={4} variants={fadeUp}>
          <h2 className="text-xl font-bold mb-2">Our Services</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Water & Mold Mitigation</li>
            <li>Air Duct Cleaning</li>
            <li>Carpet Cleaning</li>
            <li>Trash Can Sanitization</li>
            <li>Interior & Exterior Painting</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
