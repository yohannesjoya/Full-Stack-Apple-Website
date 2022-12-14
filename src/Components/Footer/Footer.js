import { Component } from "react";
import FooterLinks from "./FooterLinks";

import UsaFlag from "../../commonResources/images/icons/16.png";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-wrapper">
        <div className="container">
          <div className="upper-text-container">
            <p>
              1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
              promotional pricing is after trade‑in of iPhone 8 Plus and iPhone
              X in good condition. Additional trade‑in values require purchase
              of a new iPhone, subject to availability and limits. Must be at
              least 18. Apple or its trade-in partners reserve the right to
              refuse or limit any Trade In transaction for any reason. In‑store
              trade‑in requires presentation of a valid, government-issued photo
              ID (local law may require saving this information). Sales tax may
              be assessed on full value of new iPhone. Additional terms from
              Apple or Apple’s trade-in partners may apply. Monthly pricing:
              Available to qualified customers and requires 0% APR, 24-month
              installment loan with Citizens One or Apple Card Monthly
              Installments and iPhone activation with AT&T, Sprint, T-Mobile, or
              Verizon. Taxes and shipping not included. Additional Apple Card
              Monthly Installments terms are in the{" "}
              <a
                href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Customer Agreement
              </a>
              . Additional iPhone Payments terms are{" "}
              <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
                {" "}
                here
              </a>
              .
            </p>
            <p>
              2. Subscription required.<br></br>
              <br></br>
              Magic Keyboard sold separately.<br></br>
              <br></br>
              Apple TV+ is $4.99/month after free trial. One subscription per
              Family Sharing group. Offer good for 3 months after eligible
              device activation. Plan automatically renews until cancelled.
              Restrictions and other{" "}
              <a href="https://www.apple.com/promo/">terms </a> apply.
            </p>
          </div>
          <div className="footer-links-wrapper row">
            <div className="links-wrapper-1 col-sm-12 col-md">
              <FooterLinks
                ColTitle="Shop and Learn"
                ContentsArray={[
                  "Mac",
                  "iPad",
                  "iPhone",
                  "Watch",
                  "TV",
                  "Music",
                  "AirPods",
                  "HomePod",
                  "iPod",
                  "touch",
                  "Accessories",
                  "Gift",
                  "Cards",
                ]}
              />
            </div>
            <div className="links-wrapper-2 col-sm-12 col-md">
              <FooterLinks
                ColTitle="Services"
                ContentsArray={[
                  "Apple Music",
                  "Apple",
                  "News",
                  "Apple",
                  "TV+",
                  "Apple",
                  "Arcade",
                  "Apple",
                  "Card",
                  "iCloud",
                ]}
              />

              <FooterLinks
                ColTitle="Account"
                ContentsArray={[
                  "Manage Your Apple ID",
                  "Apple Store Account",
                  "iCloud.com",
                ]}
              />
            </div>
            <div className="links-wrapper-3 col-sm-12 col-md">
              <FooterLinks
                ColTitle="Services"
                ContentsArray={[
                  "Apple Store",
                  "Find a Store",
                  "Genius Bar",
                  "Today at Apple",
                  "Apple Cam",
                  "Field Trip",
                  "Apple Store",
                  "Refurbished and Clearance",
                  "Financing",
                  "Apple Trade In",
                  "Order Status",
                  "Shopping Help",
                ]}
              />
            </div>
            <div className="links-wrapper-4 col-sm-12 col-md">
              <FooterLinks
                ColTitle="For Business"
                ContentsArray={[
                  "For Business",
                  "Apple and Business",
                  "Shop for Business",
                ]}
              />
              <FooterLinks
                ColTitle="For Education"
                ContentsArray={["Apple and Education", "Shop for College"]}
              />
              <FooterLinks
                ColTitle="For Healthcare"
                ContentsArray={[
                  "Manage Your Apple ID",
                  "Apple Store Account",
                  "iCloud.com",
                ]}
              />
              <FooterLinks
                ColTitle="For Government"
                ContentsArray={["Apple and Education", "Shop for College"]}
              />
            </div>
            <div className="links-wrapper-5 col-sm-12 col-md">
              <FooterLinks
                ColTitle="Apple Values"
                ContentsArray={[
                  "Find a Store",
                  "Genius Bar",
                  "Today at Apple",
                  "Apple Cam",
                  "Field Trip",
                  "Apple Store",
                  "Shopping Help",
                ]}
              />
              <FooterLinks
                ColTitle="About Apple"
                ContentsArray={[
                  "Find a Store",
                  "Genius Bar",
                  "Today at Apple",
                  "Apple Cam",
                  "Field Trip",
                  "Apple Store",
                  "Shopping Help",
                ]}
              />
            </div>
          </div>
          <div className="my-apple-wrapper">
            More ways to shop: <a href="/#">Find an Apple Store</a> or{" "}
            <a href="/#">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </div>
          <div className="copyright-wrapper row">
            <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
              Copyright &copy; 2020 Apple Inc. All rights reserved.
            </div>
            <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
              <FooterLinks
                ColTitle={null}
                ContentsArray={[
                  " Privacy Policy",
                  "Terms of Use",
                  "Sales and Refunds",
                  "Legal",
                  "Site Map",
                ]}
              />
            </div>
            <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
              <div className="flag-wrapper">
                <img src={ UsaFlag} alt=""></img>
              </div>
              <div className="footer-country-name">United States</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
