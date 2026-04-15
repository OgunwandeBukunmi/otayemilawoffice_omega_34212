// components/Navbar.jsx

export default function Navbar() {
    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur shadow z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-xl font-bold text-blue-900">BAM & GAD SOLICITORS</h1>

                <div className="hidden md:flex gap-8 items-center">
                    {["Home", "About", "Practice Areas", "Testimonials", "Contact"].map(
                        (link) => (
                            <a
                                key={link}
                                href={`#${link}`}
                                className="relative group text-sm font-medium"
                            >
                                {link}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all group-hover:w-full"></span>
                            </a>
                        )
                    )}
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition">
                        Free Consultation
                    </button>
                </div>
            </div>
        </nav>
    );
}