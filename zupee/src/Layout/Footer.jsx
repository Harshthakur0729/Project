import React from "react";
import { Link } from "react-router-dom"; // or next/link if using Next.js

export default function Footer() {
  return (
    <footer className="bg-[#4611a7] text-white">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-10">
        {/* Info Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Info</h1>
          <Link to="#" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link to="/tnc-rewards-scheme" className="hover:underline">
            Rewards Scheme: Terms & Conditions
          </Link>
          <Link to="#" className="hover:underline">
            Privacy Policy
          </Link>
        </div>

        {/* Games Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Games</h1>
          <Link to="/" className="hover:underline">
            Ludo
          </Link>
          <Link to="#" className="hover:underline">
            Ludo Hindi
          </Link>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-white mx-auto w-11/12" />

      {/* Bottom Section */}
      <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <img
          src="https://assets.zupee.com/zupee-revemp/assets/zupee-logo-blue.webp"
          alt="Zupee Logo"
          className="h-10 md:h-20"
        />
        <p className="text-sm md:text-base text-center md:text-left">
          © Cashgrail Private Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
