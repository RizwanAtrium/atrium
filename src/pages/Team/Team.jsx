import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NaikMuhammad from "../../assets/Hannan.jpg";
import Professional from "../../assets/Professional.jpg";
import Ali from "../../assets/Ali.jpg";
import MAbrar from "../../assets/Abrar Ali.jpg";
import AsadBahi from "../../assets/Asad Bhai.jpg";
import Saif from "../../assets/Saif.jpg";
import Sharon from "../../assets/Sharon.jpg";
import Umair from "../../assets/Umair.jpg";
import Ashlay from "../../assets/Ashlay.jpg";
import HamzaJavaid from "../../assets/Hamza Javaid.jpg";
import MuhammadSajidManzoor from "../../assets/Muhammad Sajid Manzoor.jpg";
import HafizNaveedAhmad from "../../assets/Hafiz Naveed Ahmad.jpg";
import aliabdullah from "../../assets/Ali Abdullah.jpg";
import Arham from "../../assets/Arham.jpg";
import Aliraza from "../../assets/Ali raza.jpg";
import RohanKashif from "../../assets/Rohan Kashif.jpeg";
import AbdullahRasoolButt from "../../assets/Abdullah Rasool Butt.jpg";
import HassanMuneer from "../../assets/Hassan Muneer.jpg";
import AmmaraZahoor from "../../assets/Ammara Zahoor.jpg";
import HafizMuhammadUmer from "../../assets/Hafiz Muhammad Umer.jpg";
import Irtiza from "../../assets/Irteza.jpg";
import HamzaQasim from "../../assets/Hamza Qasim.jpg";
import IzamAzam from "../../assets/Izam Azam.jpg";
import HaronKhalid from "../../assets/Haroon Khalid.jpg";
import Rizwanulhaq from "../../assets/Rizwan BHai.jpg";
import AsifAli from "../../assets/Asif Ali.jpg";
import Footer from "../../component/Footer/Footer";

// import Placeholder29 from "../../assets/placeholder-29.webp";
// import Ashlay from "../../assets/Ashlay.jpg";

import "../../component/Champs/TeamCard.css";
import "./Team.css";

const teamGroups = [
    {
    title: "Legal Advisor",
    members: [
      {
        id: "email-1",
        name: "Ali Abdulllah ",
      
        role: "Head Of Legal Affairs",
        image: aliabdullah,
        socials: { linkedin: "#" },
      },
     
    ],
  },
  {
    title: "Creative Squad",
    members: [
      {
        id: "creative-1",
        name: "Syed Irtiza Kazmi",
        role: "Brand and Marketing Manager",
        image: Irtiza,
        socials: {
          facebook: "#",
          linkedin: "https://www.linkedin.com/in/syed-irtiza-kazmi/",
          instagram: "#",
        },
      },
      {
        id: "prod-5",
        name: "Ali Haider",
       
        role: "Creative Designer",
        image: Ali,
        socials: {
   
          linkedin: "https://www.linkedin.com/in/ali-haider-47360b279/",

        },
      },
      {
        id: "prod-5",
        name: "Umair Ali",
       
        role: "Full Stack Developer",
        image: Umair,
        socials: {
          facebook: "#",
          linkedin: "https://www.linkedin.com/in/umair-ali-99767b24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram: "#",
        },
      },
      {
        id: "prod-5",
        name: "Hamaza Javaid",
       
        role: "Ai Prompt Engineer",
        image: HamzaJavaid,
        socials: {
          facebook: "#",
          linkedin: "https://www.linkedin.com/in/m-hamza-javaid-16181b180/",
          instagram: "#",
        },
      },
     
      {
        id: "prod-6",
        name: "Ashlay",
       
        role: "Video Editor",
        image: Ashlay,
        socials: {
          facebook: "#",
          linkedin: "https://www.linkedin.com/in/ashlay-nadeem-8482a5299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram: "#",
        },
      },
    ],
  },
  {
    title: "Revenue Generators",
    members: [
    
      {
        id: "biz-2",
        name: "Hafiz Naveed Ahmad",
        role: "BD Executive",
        image: HafizNaveedAhmad,
        socials: { linkedin: "https://www.linkedin.com/in/saeed-ahmad-244a4813b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      },
        {
        id: "email-1",
        name: "Naik Muhammad",
      
        role: "Email Marketing Lead",
        image: NaikMuhammad,
        socials: { linkedin: "https://www.linkedin.com/in/naikmuhammad-dmm" },
      },
      {
        id: "email-2",
        name: "Hafiz Muhammad Umer",
        role: "Email Marketer",
        image: HafizMuhammadUmer,
        socials: { linkedin: "https://www.linkedin.com/in/hafiz-muhammad-umer2118" },
      },
    ],
  },
  {
    title: "Deal Openers",
    members: [
      {
        id: "sales-0",
        name: "Asad Ullah Ghalib",
        role: "Director Of international Sales",
        image: AsadBahi,
        socials: {
          facebook: "#",
          linkedin: "https://www.linkedin.com/in/asad-ullah-ghalib/",
          instagram: "#",
        },
      },
      {
        id: "sales-1",
        name: "Saif Malik",
     
        role: "Sales Spacialist",
        image: Saif,
        socials: { linkedin: "#" },
      },
      {
        id: "sales-1",
        name: "Arham Mansoor",
     
        role: "Project Manager",
        image: Arham,
        socials: { linkedin: "https://www.linkedin.com/in/muhammad-arham-a72663375/" },
      },
    {
        id: "sales-1",
        name: "Ali Raza",
        role: "Sales Executive",
        image: Aliraza,
        socials: { linkedin: "https://www.linkedin.com/in/ali-raza-368465380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
      },
      {
        id: "sales-2",
        name: "Rohan Kashif",
      
        role: "Sales Executive",
        image: RohanKashif,
        socials: { linkedin: "https://www.linkedin.com/in/rohan-kashif-a72065367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      },
   
    ],
  },
  {
    title: "Customer Support Representatives",
    members: [
      {
        id: "csr-1",
        name: "Abdullah Rasool Butt",
        role: "CSR Specialist",
        image: AbdullahRasoolButt,
        socials: { linkedin: "https://www.linkedin.com/in/abdullahrb2026?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      },
      {
        id: "csr-2",
        name: "Hassan Muneer",
       
        role: "CSR Executive",
        image: HassanMuneer,
        socials: { linkedin: "https://www.linkedin.com/in/hassan-muneer-304a1a295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      },
   
    ],
  },

  {
    title: "HR & Admin Squad",
    members: [
      {
        id: "hr-1",
        name: "Muhammad Abrar",
        role: "HR Manager",
        
        image: MAbrar,
        socials: {
          linkedin: "https://www.linkedin.com/in/mohammad-abrar-229866361/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BnG2CgvNYRpaEG%2BNRtTLA8w%3D%3D",
         
        },
      },
      {
        id: "email-1",
        name: "Asif Ali",
      
        role: "Staff Support",
        image: AsifAli,
        socials: { linkedin: "#" },
      },
     
    ],
  },
];

function Team() {
  return (
    <section className="team-page bg_champs">
      <Container fluid className="px-5 pt-5 mt-5 mb-5">
        <Row className="team-hero mb-5 mt-5">
          <Col lg={12}>
            <span className="team-hero-subtitle">Our Team</span>
            <h1 className="team-hero-title">
              Champs<span>.</span>
            </h1>
            <p className="team-hero-desc mt-4">
              We have passionate and creative minds and a huge hunger to grow.
            </p>
            <div className="team-hero-line mb-4"></div>
            <button type="button" className="team-hero-btn">
              Grow Your Business
            </button> 

          </Col>
        </Row>

        <Row className="team-feature pt-5 mt-5 pb-5">
          <Col lg={5} md={12} className="team-feature__image">
            <div className="team-feature__frame">
              <img src={Rizwanulhaq} alt="Rizwan ul Haq" />
            </div>
          </Col>
          <Col lg={7} md={12} className="team-feature__content">
            <h2 className="team-feature__name">
Rizwan ul Haq
</h2>
            <div className="team-feature__role">
Founder CEO

            </div>
            <p className="team-feature__desc">
            <span style={{color: "#A150FF", fontWeight: "600"}}>CodeName: </span>The Architect

            </p>

              <div className="team-feature__about mb-4 mt-3">
             
              
              <p>
               As a leader, my mission is to create impactful designs and experiences 
              <br></br>that resonate with people, combining innovation, creativity, and purpose.
              </p>
            </div>

            <div className="team-feature__actions">
              
              <button type="button" className="team-feature__btn">
                Get in Touch
              </button>
            </div>

         
          </Col>
        </Row>

        {teamGroups.map((group, groupIndex) => (
          <section className="team-group" key={group.title}>
            <div className="team-group-header">
              <h2 className="team-group-title">
                <span className="team-group-index">{groupIndex + 1}.</span>
                {group.title}
              </h2>
            </div>
            <Row className="team-group-grid">
              {group.members.map((member) => (
                <Col lg={3} md={4} sm={6} className="mb-4" key={member.id}>
                  <div className="team-block-style2 team-item wow fadeInUp">
                    <div className="image-box">
                      <figure className="image">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="img-fluid"
                        />
                      </figure>

                      {member.socials?.linkedin && (
                        <div className="social-links">
                          <a
                            aria-label="linkedin"
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      )}

                      <span className="share-icon fa fa-share-alt"></span>
                    </div>

                    <div className="info-box">
                      <h4 className="team-title">
                        <span>{member.name}</span>
                      </h4>
                      <div className="team-subtitle">
                        
                        {member.span}
                      </div>
                      <div className="team-subtitle" style={{ fontWeight: "600" }}>
                        {member.role}
                      </div>
                    </div>

                    <div className="nexella-hover-bx hover-bx"></div>
                    <div className="nexella-hover-bx hover-bx2"></div>
                    <div className="nexella-hover-bx hover-bx3"></div>
                    <div className="nexella-hover-bx hover-bx4"></div>
                  </div>
                </Col>
              ))}
            </Row>
          </section>
        ))}
      </Container>
        <Footer transparent />
    </section>
  );
}

export default Team;
