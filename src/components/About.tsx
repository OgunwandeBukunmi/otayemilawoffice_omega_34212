// components/About.jsx
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="About" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    src="https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="rounded-xl shadow"
                />

                <div>
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">
                        About Our Firm
                    </h2>
                    <p className="text-gray-600 mb-4">
                        With over 20 years of experience, we have helped clients win cases
                        and protect their rights.
                    </p>
                    <p className="text-gray-600">
                        Our mission is to deliver exceptional legal services with integrity
                        and professionalism.
                    </p>
                </div>
            </div>
        </section>
    );
}