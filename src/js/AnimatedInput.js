import React, { Component } from 'react'
import { TimelineMax } from 'gsap'

export default class AnimatedInput extends Component {
  componentDidMount() {
    const openAni = new TimelineMax();
    openAni.fromTo(".Centerpiece", 1, {width: 0}, {width: '75%'})
           .to(".Centerpiece", .5, {width: 0}, '+=.75')
           .to(".intialText", 0, {display: 'none'})
           .to(".nextText", 0, {display: 'inline'}, '-=.1')
           .to(".Centerpiece", 1, {width: '85%'})
           .to(".Centerpiece", .5, {width: 0}, '+=.75')
           .to(".Centerpiece", .5, {rotation: 90,transformOrigin:"left bottom"})
           .to(".Centerpiece", 0, {display: 'none'})
           .to(".Search", 0, {display: 'inline'})
           .to(".Search", 1, {width: '80vw'})
    setTimeout(() => { this.textInput.focus() }, 5500)
  }

  render() {
    return(
      <div className="AnimatedInput">
        <input className="Search" type="text"
          value={this.props.store.searchInput}
          onChange={(e) => this.props.store.changeSearch(e.target.value)}
          ref={(input) => {this.textInput = input; }} />

              <div className="Centerpiece">
                <h1 className="intialText">MARVEL COMIC SEARCH</h1>
                <h1 className="nextText">SEARCH FOR A CHARACTER</h1>
              </div>
      </div>
    )
  }
}
