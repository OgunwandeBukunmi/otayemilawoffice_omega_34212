// components/PracticeAreas.jsx
import { motion } from "framer-motion";
import { FaGavel, FaUserShield, FaBriefcase } from "react-icons/fa";

const areas = [
    { icon: FaBriefcase, title: "Corporate Law" },
    { icon: FaUserShield, title: "Criminal Defense" },
    { icon: FaGavel, title: "Family Law" },
];

export default function PracticeAreas() {
    return (
        <section id="Practice Areas" className="py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-10">
                    Practice Areas
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {areas.map((area, i) => {
                        const Icon = area.icon;
                        return (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
                            >
                                <Icon className="text-3xl text-yellow-500 mb-4 mx-auto" />
                                <h3 className="font-semibold text-lg">{area.title}</h3>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}