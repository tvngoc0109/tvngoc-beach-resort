import React,{ Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default class About extends Component {state = {
    about: [
      {
        title: "Home Page",
        info:
          "Home page of the project shows four main components. First on is the Navbar which has a home icon, logo, Home button, Rooms Button and About button in the same order. As it is a responsive website therefore it will work in mobile form also. When in the mobile form it will show a sandwich icon on the right top of the screen. The main screen has image of the resort and a banner on it which shows a link to go to the rooms page. Next comes the Services provided by the Resort to the customers like free Cocktails, Hiking trips, Free shuttle service and Free Beer. Scrolling futher down will show the featured rooms with pricing and the category to each. All the rooms can be explored more by clicking on the link provided for each."
      },
      {
        title: "Rooms Page",
        info:
          "In the rooms page a customer xan search for a room with parameters provided to match their needs. These parameters are Room Type, Numbers of Guests, Rooms Price, Rooms Size, Breakfast and Pets. Below this, are all the rooms displayed which are available in the resort. The display of these rooms changes when the parameters are changes. If the parameters does not match any room then it will show the massage saying No room matches the search parameters."
      },
      {
        title: "Single Room Page",
        info:
          "It displays the picture of the room. Below that it has the details of the room and info on the right hand side shwoing the price, size, max capacity, and shwoing if a pet is allowed or not. After that comes the extras which shows more details of the features included in the room"
      },
      {
        title: "About Page",
        info:
          "It has the details of the project, the technology used in the project and the important links to the developer's profile like LinkedIn, Facebook, Twitter and GitHub. Every icon ic clickable and wiil take you to the developer's respective website."
      }
    ]
  };
  render() {
    return (
        <>
            <Hero>
                <Banner title="Know More About Us" subtitle='This Page Will Show All The Features Of The Project'>
                    <Link to="/" className="btn-primary">
                        Back to Home
                    </Link>
                </Banner>
            </Hero>
            <div className="single-room">
                {this.state.about.map(item => {
                    return (
                    <article key={`item-${item.title}`} className="room-extras">
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                    );
                })}
            </div>
        </>
      );
}
}