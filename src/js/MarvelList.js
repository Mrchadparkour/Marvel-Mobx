import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { getHash, getTimeStamp, PUBLIC_KEY } from './constants'
import AnimatedInput from './AnimatedInput'

@observer
export default class MarvelList extends Component {

  render(){
    const { searchInput, changeSearch, characterList, getComics } = this.props.store;

    return(
      <div>
            <AnimatedInput store={this.props.store} />
            <div className="CharacterNames">
              {
                characterList.map(character => <div onClick={ () => getComics(character.id) } key={character.id}>{ character.name }</div> )
              }
          </div>
      </div>
    )
  }
}
