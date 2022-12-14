import { Component } from "react";
import LearnComp from "../LearnComp";
import TitDecPr from "../TitDecPr";

// assets importing
import Watch5logo from "../../../commonResources/images/icons/watch-series5-logo.png";
import appleTvLogo from "../../../commonResources/images/icons/apple-tv-logo.png";
import bankerPng from "../../../commonResources/images/home/banker.png";

class Section5 extends Component {
  render() {
    return (
      <>
        <section className="fifth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={appleTvLogo} alt=""></img>
                    </div>
                  </div>

                  <div className="tvshow-logo-wraper">
                    <img src={bankerPng} alt=""></img>
                  </div>
                  <TitDecPr DescriptionContent="Watch now on the Apple TV App" />
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="top-logo-wrapper">
                    <TitDecPr
                      TitleClassNAME="logo-wrapper"
                      titleContent={<img src={Watch5logo} alt=""></img>}
                    />
                    <TitDecPr
                      DescriptionContent="  With the Always-On Retina display.<br></br>
                    You’ve never seen a watch like this."
                    />
                  </div>

                  <LearnComp
                    hREF1="/Learn"
                    hREF2="/more"
                    firstContent="Learn more"
                    secondContent="Buy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Section5;
