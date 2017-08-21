"use strict"

import { computed, observable, action } from 'mobx'
import { fromPromise } from 'mobx-utils'
import axios from 'axios'
import { getTimeStamp, PUBLIC_KEY, getHash } from './constants'

const MarvelCharacter = (id, name, desc) => {
  return {
    id: id,
    name: name,
    desc: desc,
  }
}

const Comic = (title, desc, imgUrl) => {
  return {
    title: title,
    desc: desc,
    showImg: () => {
      return imgUrl + "/portrait_uncanny.jpg"
    }
  }
}

export class MarvelStore {
  @observable searchInput = ""
  @observable characterRes = []
  @observable currentId = 0
  @observable comicRes = []

  @action changeSearch(value) {
    this.searchInput = value
    this.getCharacters()
  }

  @computed get characterUrl() {
    return 'https://gateway.marvel.com/v1/public/characters?orderBy=name&nameStartsWith='+this.searchInput+'&ts='+ getTimeStamp() +'&apikey='+ PUBLIC_KEY +'&hash='+ getHash()
  }

  @action getCharacters() {
    if (this.searchInput.length > 0)
        axios.get(this.characterUrl)
             .then(res => this.characterRes = res.data.data.results)
             .catch(err => console.log('Probably have no search input.'))
  }

  @computed get characterList() {
    return this.characterRes.map(obj => MarvelCharacter(obj.id, obj.name, obj.description, obj))
  }

  @action getComics(charId) {
    console.log(this);
    let url = 'https://gateway.marvel.com/v1/public/characters/'+ charId +'/comics?hasDigitalIssue=true&orderBy=onsaleDate&ts='+ getTimeStamp() +'&apikey='+ PUBLIC_KEY +'&hash='+ getHash()
    axios.get(url)
         .then(res => this.comicRes = res.data.data.results)
         .catch((err) => console.log(err))
  }

  @computed get comicList() {
    return this.comicRes.map(obj => Comic(obj.title, obj.textObjects[0].text, obj.images[0].path))
  }
}

export default new MarvelStore
