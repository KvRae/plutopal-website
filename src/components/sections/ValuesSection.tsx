import { FaLightbulb, FaLeaf, FaUsers, FaHandshake, FaRocket, FaGlobe, FaBullseye, FaPaintBrush, FaHeart, FaBalanceScale } from 'react-icons/fa';

export default function ValuesSection() {
    const values = [
        { text: "Creativity & Innovation", icon: <FaLightbulb /> },
        { text: "Ethical Fashion", icon: <FaBalanceScale /> },
        { text: "Social Sustainability", icon: <FaLeaf /> },
        { text: "Collaboration", icon: <FaHandshake /> },
        { text: "Empowerment", icon: <FaUsers /> },
        { text: "Think Bold", icon: <FaRocket /> },
        { text: "Global Reach", icon: <FaGlobe /> },
        { text: "Purpose-Driven", icon: <FaBullseye /> },
        { text: "Artistic Freedom", icon: <FaPaintBrush /> },
        { text: "Compassion & Care", icon: <FaHeart /> },
    ];

    return (
        <section className="values-section">
            <h1>Our values</h1>
            <p>
                At Plutopal, we foster creativity and collaboration to drive ethical
                fashion and social sustainability, empowering designers to share their
                unique styles and connect with an audience that values conscious
                choices.
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="explore-link">
                Explore values
            </a>

            <div className="values-cards">
                {values.map((value, idx) => (
                    <div key={idx} className="value-card">
                        <div className="card-icon">{value.icon}</div>
                        <p>{value.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
