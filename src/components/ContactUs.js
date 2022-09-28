import React, { Component } from 'react';
const styles={
  contact:{
    display:"flex",
    flexDirection:"row"
  }
}
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me  below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">

              <div class="row contactmedia" style={styles.contact}>
          <div class="col-md-9 mb-md-0 mb-5 ">
            <form className='row contactmedia'style={styles.contact}
              id="contact-form"
              name="contact-form"
              action="https://formsubmit.co/1710c7e7c3d3c27a730533f295e38925 "
              method="POST"
            >
             
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                      placeholder='Name'
                    />
                  </div>
                </div>

                <div class="col-md-6 ">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                      placeholder='Email'
                    />
                  </div>
                </div>
             

             
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                      placeholder='Subject'
                    />
                 
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="md-form">
                    <input
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                      placeholder='Message'
                    ></input>
                  </div>
                </div>
              <div class="text-center text-md-left">
                <button class="btn btn-dark" type="submit">
                  Send
                </button>
              </div>
              <div class="status"></div>
            </form>
          </div>
        </div>
     
              </div>
            </aside>
          </div>
          
        </section>
        );
  }
}