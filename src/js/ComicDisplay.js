import React, { Component } from 'react'
import { observer } from 'mobx-react'
import AnimatedInput from './AnimatedInput'
import { comicSelector } from './Greensock'

@observer
export default class ComicDisplay extends Component {

  componentDidMount() {
    comicSelector()
  }

  render(){
    const { displayComics } = this.props.store
    return(
      <div className="ComicFormat">
        <AnimatedInput store={this.props.store} />
        <div className="ComicDisplay">
          { displayComics }
        </div>
        <h1>&larr; Use arrow keys to navigate & space to select &rarr;</h1>
      </div>
    )
  }
}
