import React, { Component } from 'react'
import { observer } from 'mobx-react'
import AnimatedInput from './AnimatedInput'

@observer
export default class ComicDisplay extends Component {

  render(){
    const { comicList } = this.props.store
    return(
      <div className="ComicFormat">
        <AnimatedInput store={this.props.store} />
        <div className="ComicDisplay">
          {
            (comicList === 'Loading') ? <p>Loading...</p> : (comicList.length < 1) ? <p>No Comics</p> : comicList.map(comic => <img key={comic.title} src={comic.showImg()} />)
          }
        </div>
      </div>
    )
  }
}
