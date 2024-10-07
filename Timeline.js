// Timeline.js
import React, { useState } from 'react';
import './Timeline.css';

const Timeline = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = [
        {
            date: "1947",
            title: "Independence",
            description: "India gained independence from British rule.",
            additionalInfo: "On 15th August 1947, India finally achieved independence after nearly 200 years of British colonial rule. This momentous event marked the beginning of a new chapter for the Indian subcontinent, paving the way for the drafting of its constitution.",
            image: "https://www.nationsonline.org/gallery/India/Red_Fort_New_Delhi.jpg",
        },
        {
            date: "1950",
            title: "Adoption of the Constitution",
            description: "The Constitution of India came into effect.",
            additionalInfo: "On 26th January 1950, the Constitution of India was adopted, making India a sovereign, democratic republic. Dr. B.R. Ambedkar played a pivotal role as the Chairman of the Drafting Committee.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Constitution_of_India.jpg/320px-Constitution_of_India.jpg",
        },
        {
            date: "1976",
            title: "42nd Amendment",
            description: "The amendment added the words 'Socialist' and 'Secular' to the Preamble.",
            additionalInfo: "The 42nd Amendment is one of the most significant changes made to the Indian Constitution. It added the words 'Socialist', 'Secular', and 'Integrity' to the Preamble during the Emergency period in India.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Preamble_to_Constitution_of_India.pdf/page1-1024px-Preamble_to_Constitution_of_India.pdf.jpg",
        },
        {
            date: "2002",
            title: "Judicial Review",
            description: "The Supreme Court reaffirmed its power to review constitutional amendments.",
            additionalInfo: "In a landmark ruling, the Supreme Court upheld its power of judicial review, maintaining the balance of power between the Judiciary, Executive, and Legislature.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Supreme_Court_of_India_-_200705.JPG/320px-Supreme_Court_of_India_-_200705.JPG",
        },
        {
            date: "2020",
            title: "Supreme Court Rulings",
            description: "Significant rulings on various fundamental rights were delivered.",
            additionalInfo: "In 2020, the Supreme Court of India issued critical judgments regarding individual rights, freedom of expression, and the right to privacy, continuing its role as the protector of constitutional values.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png",
        },
    ];

    const handleHover = (event) => {
        setSelectedEvent(event);
    };

    const handleMouseLeave = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="timeline-container">
            <h2>Timeline of the Constitution of India</h2>
            <div className="timeline">
                <div className="timeline-track">
                    {events.map((event, index) => (
                        <div 
                            className="timeline-item" 
                            key={index}
                            onMouseEnter={() => handleHover(event)} 
                            onMouseLeave={handleMouseLeave}
                            onTouchStart={() => handleHover(event)} // For touch devices
                        >
                            <div className="timeline-pointer" />
                            <div className="timeline-content">
                                <span className="timeline-date">{event.date}</span>
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Display detailed content about the hovered event */}
            {selectedEvent && (
                <div className="hover-info">
                    <h3>{selectedEvent.title} - {selectedEvent.date}</h3>
                    <p>{selectedEvent.additionalInfo}</p>
                    <img src={selectedEvent.image} alt={selectedEvent.title} className="event-image" />
                </div>
            )}
        </div>
    );
};

export default Timeline;
