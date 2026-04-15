// components/Contact.jsx
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="Contact" className="py-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
                <div>
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">
                        Contact Us
                    </h2>
                    <p className="mb-4 text-gray-600">
                        Get in touch for a free consultation.
                    </p>

                    <div className="space-y-3">
                        <p className="flex items-center gap-2">
                            <FaPhone /> +123 456 7890
                        </p>
                        <p className="flex items-center gap-2">
                            <FaEnvelope /> info@lawfirm.com
                        </p>
                        <p className="flex items-center gap-2">
                            <FaMapMarkerAlt /> 123 Legal Street
                        </p>
                    </div>
                </div>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full border p-3 rounded-lg"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border p-3 rounded-lg"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full border p-3 rounded-lg"
                    />
                    <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}