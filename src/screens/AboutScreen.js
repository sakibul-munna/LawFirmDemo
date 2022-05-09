import React from "react";

const AboutScreen = () => {
  return (
    <div className="py-3">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#037ffc", paddingBottom: "10px" }}>
          My Personal Information
        </h1>
        <img
          src={require("../assets/mamun_pic.png")}
          alt="personal"
          style={{ height: "200px", width: "200px", marginBottom: "10px" }}
        />
        <h4>
          <b>Name: </b>Abdullah Al Mamun
        </h4>
        <p>
          <b>Profession: </b>Software Engineer
        </p>
        <p>
          <b>Company: </b>TechKnowGram Limited
        </p>
        <p>
          <b>Nationality: </b>Bangladeshi
        </p>
      </div>
      <div className="m-3">
        <p>
          <b className="text-success"> My Mission: </b>I want to be a skilled
          software Engineer. For this reasion I want to join any renowned
          Software company. I want to gather knowledge from there.
        </p>
        <p>
          <b className="text-success"> My Vission: </b>My future goal is to
          acquire knowledge on latest technology and modern science from those
          developed countries. So, I will try to complete my MSC and higher
          studies from USA/ Canada/ Europe.
        </p>
        <p>
          <b className="text-success"> My Goal: </b>I want to be a establish my
          own IT software company after 10 years. I want to help poor students
          to fullfill there dream from my company.
        </p>
        <p>
          <b className="text-success"> My Hardworks: </b>To fullfill my goals, i
          started to developed my skills. For that reason I admit programming
          Hero course to learn MERN stack. I already to complete BYLC's Art and
          Practice of Leadership (APL) program to develop my leadership skill.
          Besides this, i learn my many things from Edx and Udemy.
        </p>
      </div>
    </div>
  );
};

export default AboutScreen;
