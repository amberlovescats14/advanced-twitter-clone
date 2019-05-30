import React, { Component } from 'react'

export default class Middle extends Component {
  render() {
    return (
      <div id="middle">
        <div className="middleTop">
        <div className="flexTop">
        <img src="https://www.shutterbug.com/images/styles/600_wide/public/Promobl6618.jpg" alt="profilePic"></img>
        <section id="searchBar">
            <input type="text" placeholder="What's Happening" id="barMiddle"></input>
            <button type="submit" id="middleButton">
            <i className="fas fa-camera fa-2x"></i>
            </button>
          </section>
        </div>
        </div>





        <div className="middleBottom">middleBottom</div>
      </div>
    )
  }
}
