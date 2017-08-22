import React, { Component } from 'react'
import { observer } from 'mobx-react'
import AnimatedInput from './AnimatedInput'
import { TimelineMax } from 'gsap'

@observer
export default class CharacterList extends Component {

  handleClick(name, id) {
    this.props.store.getComics(id)
    this.props.store.changeSearch(name)
    this.props.store.characterRes = []

    const comicShift = new TimelineMax();

    comicShift.to(".AnimatedInput", .5, {css:{"margin-top": 0}})

    setTimeout(() => this.props.store.showComics = true, 1000)
  }
  render(){
    const { searchInput, changeSearch, characterList, comicList } = this.props.store

    return(
      <div>
            <AnimatedInput store={this.props.store} />
            <div className="CharacterNames">
              {
                characterList.map(character => <div onClick={ () => this.handleClick(character.name, character.id) } key={character.id}>{ character.name }</div> )
              }
          </div>
      </div>
    )
  }
}
