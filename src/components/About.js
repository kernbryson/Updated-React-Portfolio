import React, { Component } from "react";

const styles = {
  text: {
    fontSize: "18px",
    marginBottom: "2px", // Adjust the margin between paragraphs as needed
  },
};

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    const paragraphs = resumeData.aboutme
      .split("\n")
      .map((paragraph, index) => (
        <p key={index} style={styles.text}>
          {paragraph}
          <br />
        </p>
      ));

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            {paragraphs}

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span style={styles.text}>{resumeData.name}</span>
                  <br />
                  <span style={styles.text}>{resumeData.address}</span>
                  <br />
                  <span style={styles.text}>{resumeData.website}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
