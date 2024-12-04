

import React, { useState } from "react";
import "./Main.css";

function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="body">
      <nav>

        <div className="logodiv">
          <div className="logo"></div>
        </div>

        <div className={`navdirect ${isMenuOpen ? "active" : ""}`}>
          <p>Home</p>
          <p>
            Products<i className="fa-solid fa-angle-down"></i>
          </p>
          <p>
            Resources<i className="fa-solid fa-angle-down"></i>
          </p>
          <p>Pricing</p>
        </div>


        <div className="image">
          <div className="profile"></div>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div id="newcenter">
        <div className="newfeature">
          <p><sapn id="new">New feature</sapn> Check out the team dashboard <i class="fa-solid fa-arrow-right"></i></p>
        </div>
      </div>
      <div className="beauty">
        <h1>Beautiful analytics to grow smarter</h1>
      </div>
      <div className="powerfull">
        <p>Powerfull, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
      </div>
      <div className="buttons">
        <button id="button1"><i class="fa-regular fa-circle-play"></i> Demo</button>
        <button id="button2">Sign up</button>
      </div>

      <div className="statusimage">

      </div>

      <div className="joindiv">
        <p>Join 4,000+ companies alredy growing</p>
      </div>

      <div className="companylist">
        <p>Boltshift</p>
        <p>Lightbox</p>
        <p>FeatherDev</p>
        <p>Spherule</p>
        <p>GlobalBank</p>
        <p>Nitezsche</p>
      </div>

      <div className="featurescontainer">

        <div id="colorfeature">
          <p>Features</p>
        </div>

        <div className="featurehead">
          <h1>Analytics that feels like it's from the future</h1>
          <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>

        <div className="featurecards">

          <div className="featurecard1">
            <p><i id="cardicon" class="fa-regular fa-comments"></i></p>
            <h3>Share team inboxes</h3>
            <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
          </div>

          <div className="featurecard1">
            <p><i id="cardicon" class="fa-solid fa-bolt-lightning"></i></p>
            <h3>Deliver instant answers</h3>
            <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
          </div>

          <div className="featurecard1">
            <p><i id="cardicon" class="fa-solid fa-arrow-up-right-from-square"></i></p>
            <h3>Manage your team with reports</h3>
            <p>Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
          </div>

          <div className="featurecard1">
            <p><i id="cardicon" class="fa-brands fa-rocketchat"></i></p>
            <h3>Connect with customers</h3>
            <p>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
          </div>

          <div className="featurecard1">
            <p><i id="cardicon" class="fa-solid fa-circle-nodes"></i></p>
            <h3>Connect the tools you already use</h3>
            <p>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
          </div>

          <div className="featurecard1">
            <p><i id="cardicon" class="fa-brands fa-waze"></i></p>
            <h3>Our people make the difference</h3>
            <p>We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
          </div>

        </div>

      </div>

      <div className="syscontainer">
        <div className="syslogo">

        </div>
        <h1>We've been using Untitled to kick start every new project and can't imagine working without it.</h1>
        <div className="managerimg">
        </div>
        <h3>Candice Wu</h3>
        <p>Product Manager, Sysyphus</p>
      </div>

      <div className="cuttingedge">
        <p id="fea">Features</p>
        <h1>Cutting-edge features for advanced analytics</h1>
        <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <div className="twoimg">
          <div className="statusimage2">
            <img src="mockup-image.png" alt="status"></img>
          </div>
          <div className="iphoneimage">

          </div>
        </div>


      </div>
      <div className="featurecards" id="feacard">

        <div className="featurecard1">
          <p><i id="cardicon" class="fa-regular fa-comments"></i></p>
          <h3>Share team inboxes</h3>
          <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
          <h4>Learn More <i class="fa-solid fa-arrow-right"></i></h4>
        </div>

        <div className="featurecard1">
          <p><i id="cardicon" class="fa-solid fa-bolt-lightning"></i></p>
          <h3>Deliver instant answers</h3>
          <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
          <h4>Learn More <i class="fa-solid fa-arrow-right"></i></h4>
        </div>

        <div className="featurecard1">
          <p><i id="cardicon" class="fa-solid fa-arrow-up-right-from-square"></i></p>
          <h3>Manage your team with reports</h3>
          <p>Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
          <h4>Learn More <i class="fa-solid fa-arrow-right"></i></h4>
        </div>
      </div>

      <div className="qushead">
        <h1>Frequently asked qustions</h1>
        <p className="qusheadp">Everything you need to know about the product and billing.</p>
        <div className="qusblock">
          <div id="trial">
            <h4>Is there a free trial available?</h4>
            <p id="trialp">Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible</p>
          </div>
          <div className="policy">
            <p id="policyp">Can I change my plan later? </p>
            <p id="policylogo"><i class="fa-solid fa-circle-plus"></i></p>
          </div>
          <div className="policy">
            <p id="policyp">What is your cancellation policy?</p>
            <p id="policylogo"><i class="fa-solid fa-circle-plus"></i></p>
          </div>
          <div className="policy">
            <p id="policyp">Can other info be added to an invoice?</p>
            <p id="policylogo"><i class="fa-solid fa-circle-plus"></i></p>
          </div>
          <div className="policy">
            <p id="policyp">How does billing work?
            </p>
            <p id="policylogo"><i class="fa-solid fa-circle-plus"></i></p>
          </div>
          <div className="policy">
            <p id="policyp">How do I change my account email?</p>
            <p id="policylogo"><i class="fa-solid fa-circle-plus"></i></p>
          </div>



        </div>
      </div>

      <div className="qusimg">
        <div>
          <div className="qusimg2">
            <div className="img1"></div>
            <div className="img2"></div>
          </div>
          <div className="img3">

          </div>
        </div>
        <h2>Still have qustions?</h2>
        <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <button>Get in touch</button>



      </div>

      <div className="blog">
        <div className="blogtitle">
          <div className="blogcontent">
            <h5>Our blog</h5>
            <h2>Lastest blog posts</h2>
            <p>Tool and strategies modern trams need to help their companies grow.</p>
          </div>
          <button>View all posts</button>
        </div>

        <div className="blogcardcon">

          <div className="blogcard">
            <div className="blogcardimg">
              <img src="design.png" alt="design"></img>
            </div>
            <h4>Design</h4>
            <p id="blogcardhead">UX review presentations</p>
            <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
            <div className="bloguser">
              <div className="blogimg">
                <img src="img4.webp" alt="user"></img>
              </div>
              <div className="blogdetails">
                <h4>Olivia Rhye</h4>
                <p>20 Jan 2024</p>
              </div>
            </div>
          </div>

          <div className="blogcard">
            <div className="blogcardimg">
              <img src="product.png" alt="design"></img>
            </div>
            <h4>Product</h4>
            <p id="blogcardhead">Migrating to Linear 101</p>
            <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.</p>
            <div className="bloguser">
              <div className="blogimg">
                <img src="img5.jpg" alt="user"></img>
              </div>
              <div className="blogdetails">
                <h4>Phoenix Baker</h4>
                <p>19 Jan 2024</p>
              </div>
            </div>
          </div>

          <div className="blogcard">
            <div className="blogcardimg">
              <img src="engineering.png" alt="design"></img>
            </div>
            <h4>Software Engineering</h4>
            <p id="blogcardhead">Building your API stack</p>
            <p>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
            <div className="bloguser">
              <div className="blogimg">
                <img src="img6.jpg" alt="user"></img>
              </div>
              <div className="blogdetails">
                <h4>Lana stainer</h4>
                <p>18 Jan 2024</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="start">

        <h1>Start your free trial</h1>
        <p>Join over 4,000+ startups already growing with Untitled.</p>
        <div className="startbuttons">
          <button id="startbut1">Learn more</button>
          <button id="startbut2">Get started</button>
        </div>

      </div>

      <footer>
        <div>
          <p id="first">Product</p>
          <p id="second">Overview</p>
          <p>Features</p>
          <p>Solutions</p>
          <p>Tutorials</p>
          <p>Pricing</p>
          <p>Releases</p>
        </div>

        <div>
          <p id="first">Company</p>
          <p id="second">About us</p>
          <p>Careers</p>
          <p>Press</p>
          <p>News</p>
          <p>Media kit</p>
          <p>Contact</p>
        </div>

        <div>
          <p id="first">Resources</p>
          <p id="second">Blog</p>
          <p>Newsletter</p>
          <p>Events</p>
          <p>Help center</p>
          <p>Tutorials</p>
          <p>Support</p>
        </div>

        <div>
          <p id="first">Use cases</p>
          <p id="second">Startups</p>
          <p>Enterprise</p>
          <p>Government</p>
          <p>SaaS center</p>
          <p>Marketplaces</p>
          <p>Ecommerce</p>
        </div>

        <div>
          <p id="first">Social</p>
          <p id="second">Twitter</p>
          <p>Linkedin</p>
          <p>Facebook</p>
          <p>GitHub</p>
          <p>AngelList</p>
          <p>Dribble</p>
        </div>

        <div>
          <p id="first">Legal</p>
          <p id="second">Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
          <p>Licenses</p>
          <p>Settings</p>
          <p>Contact</p>
        </div>

      </footer>
      <hr></hr>

      <div className="copy">

        <div className="copylogo">
        </div>

        <p><i class="fa-regular fa-copyright"></i> 2077 Untitled UI. All rights reserved.</p>

      </div>
      <hr></hr>





    </div>
  );
}

export default Main;
