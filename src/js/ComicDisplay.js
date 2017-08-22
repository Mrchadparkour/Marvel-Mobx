import React, { Component } from 'react'
import { observer } from 'mobx-react'
import AnimatedInput from './AnimatedInput'

@observer
export default class ComicDisplay extends Component {

  render(){
    const { comicList } = this.props.store
    return(
      <div className="ComicFormat">
        <div className="ComicDisplay">
          {
            comicList.map(comic => <img src={comic.showImg()} />)
          }
        </div>
      </div>
    )
  }
}
