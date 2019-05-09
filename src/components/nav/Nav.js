import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div id="nav">
        
        <div className="icons">
        <i className="fas fa-home fa-2x"></i>
       <p>Home</p>
        <i className="fas fa-bolt fa-2x"></i>
        <p>Memories</p>
        <i className="fas fa-bell fa-2x"></i>
        <p>Notifications</p>
        <i className="fas fa-envelope fa-2x"></i>
        <p>Messages</p>
        </div>


        <div className="logo">
        <i className="fab fa-twitter fa-2x" ></i>
        </div>


        <div className="search">

          <section id="searchBar">
            <input type="text" placeholder="Search Twitter" id="bar"></input>
            <input type="submit" id="btn"></input>
          </section>

          <img src="https://www.shutterbug.com/images/styles/600_wide/public/Promobl6618.jpg" alt="profilePic"></img>

          <button> 
          <i className="fas fa-feather-alt"></i>
            Tweet
          </button>
        </div>
       
      </div>
    )
  }
}
      