// Home.js
import React from 'react';
import './home.css'; // Import the CSS for styling
import Timeline from './Timeline'; // Import the Timeline component
import { MDBIcon } from 'mdb-react-ui-kit';
const Home = () => {
    return (
        <div>
            <div className="background-image"></div>
        
            <div className="content">
                <div className="main-content">
                    <div className="text-content">
                        <h1 className="title">Constitution of India</h1>
                        <p className="description">Being one of the lengthiest constitutions of the world, the Constitution of India is divided into 395 Articles, 22 Parts and 12 Schedules. The Part III of the Constitution of India provides for the fundamental rights, out of which some of them are applicable only to the citizens. They serve as a cornerstone of the country’s legal framework, and provide essential safeguards to individual liberties and aim to promote social justice. They cover a broad spectrum of rights including right to equality, right to freedom, right against exploitation, right to freedom of religion, cultural and educational rights, and the right to constitutional remedies.</p>
                        
                        <p className="description">The Fundamental Duties of the citizens of India are outlined in Article 51A of the Constitution and they represent a crucial aspect of civic responsibility and national consciousness. They include respecting the Constitution, promoting the spirit of common brotherhood, safeguarding public property, and cherishing the noble ideals that inspired the country’s struggle for freedom. Citizens are also placed under a duty to uphold and protect the sovereignty, unity, and integrity of India. They are to develop a scientific temper, humanism, and the spirit of inquiry and reform. While the Fundamental Duties are not legally enforceable, they play a vital role in nurturing a conscientious and socially aware citizenry, contributing to the overall well-being and progress of the nation.</p>

                        <p className="description">The Part IV of the Constitution puts forth the Directive Principles of State Policy (DPSPs). They are guidelines and principles that direct the State in matters of governance and public policy. They were promulgated with an objective to reshape the socio-political and socio-economic landscape of the country. They emphasize upon promotion of social and economic justice, equal opportunities, humane and just conditions of work, educational standards and minimization of social inequalities. They are instrumental in guiding legislative and executive action and seek to reaffirm the State’s commitment to the overall welfare and development of the nation.</p>

                        <blockquote className="quote">“Constitution is not a mere lawyers’ document, it is a vehicle of Life, and its spirit is always the spirit of Age.”</blockquote>
                    </div>
                    <div className="image-content">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsnk-P93h4-dNRXNyElsP-0hf3ESIFnAQXlw&s" alt="Constitution of India" className="side-image" />
                    </div>
                </div>
            </div>
            <Timeline /> {/* Add the Timeline component here */}
            <footer className="footer">
                <div className="footer-content">
                    <p>Connect with us:</p>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <MDBIcon fab icon="instagram" size="2x" className="me-3" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <MDBIcon fab icon="facebook" size="2x" className="me-3" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <MDBIcon fab icon="twitter" size="2x" className="me-3" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <MDBIcon fab icon="linkedin" size="2x" className="me-3" />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Home;
