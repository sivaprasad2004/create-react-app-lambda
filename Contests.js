import React from 'react';
import './Contests.css';

const Contests = () => {
  return (
    <div>
      <div className="parallax"></div>
      <div className="navbar">
        <a href="/home">Home</a>
        <a href="/blogs">Blogs</a>
        <a href="/about">About</a>
        <a href="/gallery">Gallery</a>
        <a href="/contests">Contests</a>
      </div>

      <div className="content">
        <h1>Contests</h1>
        <p>Here we can upload about photos, videos, blogs.</p>

        {/* Contest Containers with Submit Buttons */}
        <div className="contests-container">
          <div className="contest-box">
            <h2>Photo Contest</h2>
            <p>Participate in our photo contest and share your best shots!</p>
            <a href="mailto:nallasivaprasad2004@gmail.com?subject=Photo Contest Submission&body=Please attach your photos here." className="submit-button">Submit Photo</a>
          </div>
          <div className="contest-box">
            <h2>Video Contest</h2>
            <p>Showcase your creativity by submitting your videos in this contest.</p>
            <a href="mailto:nallasivaprasad2004@gmail.com?subject=Video Contest Submission&body=Please attach your videos here." className="submit-button">Submit Video</a>
          </div>
          <div className="contest-box">
            <h2>Blogs Contest</h2>
            <p>Write and submit your blogs to be a part of our blog contest.</p>
            <a href="mailto:nallasivaprasad2004@gmail.com?subject=Blog Contest Submission&body=Please paste your blog or attach your document here." className="submit-button">Submit Blog</a>
          </div>
        </div>

        {/* Rewards & Recognition Section */}
        <div className="rewards-container">
          <div className="rewards-box">
            <h2>Rewards & Recognition</h2>
            <p><strong>Showcase Your Talent:</strong><br />
              To participate, simply send an email to <a href="mailto:nallasivaprasad2004@gmail.com">nallasivaprasad2004@gmail.com</a> with your entry attached. Don't forget to include your name, contact details, and a brief description of your submission. Multiple entries are welcome!
            </p>
          </div>

          <div className="recognition-box">
            <h2>Awards & Reach New Heights</h2>
            <p><strong>Awards:</strong><br />
              The best photos, videos, and blogs will be featured prominently on our website. Winners in each category will receive cash rewards as a token of appreciation for their outstanding work.
            </p>
            <p><strong>Reach New Heights:</strong><br />
              Selected entries will not only be showcased on our website but also shared on government-handled social media platforms, giving you the exposure you deserve.
            </p>
            <p><strong>Deadline: 23rd Feb 2024</strong><br />
              Hurry, unleash your creativity, and be part of a community that celebrates diverse talents! Good luck to all participants!
            </p>
            <a href="mailto:contest.coi.gok@gmail.com" className="submit-button">Submit Today!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contests;
