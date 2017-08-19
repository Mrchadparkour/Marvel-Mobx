"use strict"

import { computed, observable, action } from 'mobx'
import { fromPromise } from 'mobx-utils'
import axios from 'axios'
import { getTimeStamp, PUBLIC_KEY, getHash } from './constants'

const MarvelCharacter = (id, name, desc, comics) => {
  return {
    hasId: () => id,
    hasName: () => name,
    hasDesc: () => desc,
    hasComics: () => comics
  }
}

export class MarvelStore {
  @observable searchInput = ""
  @observable searchResults = []


  @action changeSearch(value) {
    this.searchInput = value
    this.getCharacters()
  }

  @computed get url() {
    return 'https://gateway.marvel.com/v1/public/characters?orderBy=name&nameStartsWith='+this.searchInput+'&ts='+ getTimeStamp() +'&apikey='+ PUBLIC_KEY +'&hash='+ getHash()
  }

  @action getCharacters() {
    if (this.searchInput.length > 0)
        console.log(this.url)
        axios.get(this.url).then(res => this.searchResults = res.data.data.results)
  }

  @computed get characterList() {
    return this.searchResults.map(obj => {
      return MarvelCharacter(obj.id, obj.name, obj.description, obj.comics)
    })
  }


}

export default new MarvelStore
