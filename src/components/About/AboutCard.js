import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">NAVINKUMAR I </span>
            from <span className="purple"> Pondicherry, India.</span> 🎓 Currently pursuing B.Tech (Information Technology) at Manakula Vinayagar Institude of Technology, where I'm honing my skills and knowledge in all things related to web technologies.🌐 My journey started with HTML and CSS, and I've since delved into JavaScript and front-end frameworks like React. I'm on a mission to craft immersive and user-friendly digital experiences.💡 Eager to learn and grow, I'm constantly exploring new tools and techniques to stay up-to-date with the ever-evolving web landscape.🤝 I'm open to collaborations, internships, and opportunities to contribute to real-world projects. Let's connect and chat about all things web!🔗 Connect with me to discuss ideas, share insights, or simply geek out about web development. 🤓 Looking forward to connecting with fellow developers, tech enthusiasts, and mentors.
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Navinkumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
