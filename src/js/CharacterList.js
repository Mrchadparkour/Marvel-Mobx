import React, { Component } from 'react'
import { observer } from 'mobx-react'
import AnimatedInput from './AnimatedInput'

@observer
export default class CharacterList extends Component {

  render(){
    const { searchInput, changeSearch, characterList, comicList } = this.props.store

    return(
      <div>
            <AnimatedInput store={this.props.store} />
            <div className="CharacterNames">
              {
                characterList.map(character => <div onClick={ () => this.props.store.getComics(character.id) } key={character.id}>{ character.name }</div> )
              }
          </div>
      </div>
    )
  }
}
