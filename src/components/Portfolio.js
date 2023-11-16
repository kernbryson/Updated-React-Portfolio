import React, { Component } from "react";
const styles = {
  test: {
    height: "100%",
    width: "100vw",
    flexDirection: "row",
    display: "flex",
  },
  img: {
    height: "20vh",
    width: "20vw",
  },
  row: {
    marginLeft: "5%",
    marginRight: "5%",
    textAlign: "center",
  },
  overflow: {
    overflow: "hidden",
  },
};
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio" style={styles.overflow}>
        <h1>My Portfolio</h1>
        <div className="row" style={styles.row}>
          <div className="twelve columns collapsed">
            <div
              id="portfolio-wrapper"
              className="cf portmedia"
              style={styles.test}
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href={item.link} target="_blank">
                          <img
                            style={styles.img}
                            src={item.imgurl}
                            className="item-img= imagemedia"
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
