import { Component } from "react";
import HorizontalSecs from "../HorizontalSecs";
class Section3 extends Component {
  render() {
    return (
      <>
        <HorizontalSecs
          secClassNAME="third-hightlight-wrapper"
          // alertContent="New"
          titleContent="iPhone 11 Pro"
          secondLearnCompArg="Buy"
          descriptionContent="Pro cameras. Pro display. Pro performance."
          priceContent="From $24.95/mo. or $599 with trade‑in."
          //   childeren={ }
        />
      </>
    );
  }
}

export default Section3;
