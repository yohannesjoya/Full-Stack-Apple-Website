import { Component } from "react";

import LearnComp from "../LearnComp";
import TitDecPr from "../TitDecPr";

class Section4 extends Component {
  render() {
    return (
      <>
        <section className="fourth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <TitDecPr
                    TitleClassNAME="title-wraper"
                    titleContent="iPhone 11"
                    DescriptionContent=" Just the right amount of everything."
                    PriceContent="From $18.70/mo. or $499 with trade‑in.<sup>1</sup>"
                  />

                  <LearnComp
                    hREF1="Learn"
                    hREF2={`/${"Apply now"}`}
                    firstContent="Learn more"
                    secondContent="Apply now"
                  />
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <TitDecPr
                    TitleClassNAME="title-wraper"
                    titleContent="Get the latest CDC response to COVID-19."
                  />

                  <div className="links-wrapper white">
                    <ul>
                      <li>
                        <a href="/#">Watch the PSA</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Section4;
