// components/Footer.jsx
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h3 className="font-bold text-lg mb-4">LexFirm</h3>

                <div className="flex justify-center gap-6 mb-4">
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                </div>

                <p className="text-sm opacity-70">
                    © {new Date().getFullYear()} LexFirm. All rights reserved.
                </p>
            </div>
        </footer>
    );
}