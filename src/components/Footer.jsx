import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent  text-white py-10">
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Bhavna. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
