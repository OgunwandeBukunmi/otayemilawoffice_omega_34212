// components/Testimonials.jsx
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "John Doe",
        text: "Excellent service and outstanding results.",
    },
    {
        name: "Jane Smith",
        text: "Highly professional and reliable legal team.",
    },
];

export default function Testimonials() {
    return (
        <section id="Testimonials" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-10">
                    Testimonials
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            whileInView={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            className="p-6 bg-white rounded-xl shadow"
                        >
                            <p className="italic mb-4">"{t.text}"</p>
                            <h4 className="font-semibold">{t.name}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}