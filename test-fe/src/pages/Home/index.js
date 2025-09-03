import { Link } from "react-router-dom";
import "../Home/home.css"

export default function Home() {
    return (
        <>
            <div id="ft-app">
                <main className="ft-main">
                    <section className="ft-hero">
                        <div className="ft-container">
                            <div className="ft-hero-content">
                                <h1 className="ft-hero-title">Bài Test Frontend</h1>
                                <ul className="ft-hero-cards">
                                    <li className="ft-hero-card-item">
                                        <Link to="/a1" className="ft-hero-card">
                                            <p className="ft-hero-card-title">A1: Layout Implementation</p>
                                        </Link>
                                    </li>
                                    <li className="ft-hero-card-item">
                                        <Link to="/a2" className="ft-hero-card">
                                            <p className="ft-hero-card-title">A2: Multi-Step Form</p>
                                        </Link>
                                    </li>
                                    <li className="ft-hero-card-item">
                                        <Link to="/a3" className="ft-hero-card">
                                            <p className="ft-hero-card-title">A3: Map & Location Sync</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        </>
    );
}
