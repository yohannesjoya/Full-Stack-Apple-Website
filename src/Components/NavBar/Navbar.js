import { Component } from "react";
import NavLinks from "./NavLinks";

import SearchIcon from "../../commonResources/images/icons/search-icon-sm.png";
import CartIcon from "../../commonResources/images/icons/cart-sm.png";
import BrandImg from "../../commonResources/images/icons/logo-sm.png"

class Navbar extends Component{
    render() {
        return (
          <>
            <div className="nav-wrapper fixed-top">
              <div className="container">
                <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                  <button
                    className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    ☰
                  </button>
                  <a className="navbar-brand mx-auto" href="/">
                    <img src={BrandImg} alt=""></img>
                  </a>

                  <div className="navbar-collapse collapse">
                    <ul className="navbar-nav nav-justified w-100 nav-fill">
                        
                      <NavLinks
                        MainLiClass="nav-item"
                        innerAncClass="nav-link js-scroll-trigger"
                        hrefURL="/mac/"
                        Content="Mac"
                      />
                      <NavLinks
                        MainLiClass="nav-item"
                        innerAncClass="nav-link js-scroll-trigger"
                        hrefURL="/iphone/"
                        Content="iphone"
                      />

                      <NavLinks
                        MainLiClass="nav-item"
                        innerAncClass="nav-link js-scroll-trigger"
                        hrefURL="/ipad/"
                        Content="ipad"
                      />
                      <NavLinks
                        MainLiClass="nav-item"
                        innerAncClass="nav-link js-scroll-trigger"
                        hrefURL="/watch/"
                        Content="watch"
                      />
                      <NavLinks
                        MainLiClass="nav-item"
                        innerAncClass="nav-link js-scroll-trigger"
                        hrefURL="/tv/"
                        Content="tv"
                      />

                      <NavLinks
                        MainLiClass="nav-item"
                        innerAncClass="nav-link js-scroll-trigger"
                        hrefURL="/music/"
                        Content="Music"
                      />
                      <NavLinks
                        MainLiClass="nav-item"
                        innerAncClass="nav-link js-scroll-trigger"
                        hrefURL="/support/"
                        Content="Support"
                      />

                      <NavLinks
                        MainLiClass="nav-item"
                        innerAncClass="nav-link js-scroll-trigger"
                        hrefURL="/search/"
                        Content={<img src={SearchIcon} alt=""></img>}
                      />
                      <NavLinks
                        MainLiClass="nav-item"
                        innerAncClass="nav-link js-scroll-trigger"
                        hrefURL="/cart/"
                        Content={<img src={CartIcon} alt=""></img>}
                      />

                      
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </>
        );
    }
}
export default Navbar;