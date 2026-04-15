import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="Home"
            className="h-screen flex items-center text-white relative"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-900/40"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    Trusted Legal Experts You Can Rely On
                </motion.h1>

                <p className="max-w-xl mb-6 text-lg opacity-90">
                    We provide professional legal services with proven results and
                    client-focused solutions.
                </p>

                <div className="flex gap-4">
                    <button className="bg-yellow-500 px-6 py-3 rounded-lg shadow hover:scale-105 transition">
                        Book Consultation
                    </button>
                    <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}