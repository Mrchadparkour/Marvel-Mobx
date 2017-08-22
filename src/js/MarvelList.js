import React, { Component } from 'react'
import { observer } from 'mobx-react'
import CharacterList from './CharacterList'
import ComicDisplay from './ComicDisplay'

@observer
export default class MarvelList extends Component {

  render(){
    const { store, showComics } = this.props

    console.log(this.props.store.showComics, this.props.store.comicList)

    return this.props.store.showComics ? <ComicDisplay store={store} /> : <CharacterList store={store} />

  }
}
