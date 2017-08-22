import React, { Component } from 'react'
import { TimelineMax } from 'gsap'
import { observer } from 'mobx-react'

@observer
export default class AnimatedInput extends Component {
  componentDidMount() {
    const openAni = new TimelineMax()
    if (!this.props.store.showComics && this.props.store.searchInput.length < 1) {
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
    } else {
      openAni.set('.Centerpiece', {display: 'none'})
             .set('.Search', {display: 'inline', width: '80vw'})
             .set('.AnimatedInput', {css:{'margin-top': 0, 'position': 'fixed' }})
    }
  }

  render() {
    console.log(this.props.store)
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
