// import React from "react"
// import { observer } from "mobx-react"
//
//
// @observer
// export default class TodoList extends React.Component {
//   createNew(e) {
//     if (e.which === 13) {
//       this.props.store.createTodo(e.target.value)
//       e.target.value = ""
//     }
//   }
//
//   filter(e) {
//     this.props.store.filter = e.target.value
//   }
//
//   toggleComplete(todo) {
//     todo.complete = !todo.complete
//   }
//
//   render() {
//     const { clearComplete, filter, filteredTodos, todos } = this.props.store
//
//     const todoLis = filteredTodos.map(todo => (
//       <li key={todo.id}>
//        <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />
//        <span>{todo.value}</span>
//       </li>
//     ))
//     return <div>
//       <h1>todos</h1>
//       <input className="new" onKeyPress={this.createNew.bind(this)} />
//       <input className="filter" value={filter} onChange={this.filter.bind(this)} />
//       <ul>{todoLis}</ul>
//       <a href="#" onClick={clearComplete}>Clear Complete</a>
//     </div>
//   }
// }

import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { getHash, getTimeStamp, PUBLIC_KEY } from './constants'

@observer
export default class MarvelList extends Component {
  render(){
    const { searchInput, changeSearch, characterList } = this.props.store;

    return(
      <div>
        <h1>{this.props.store.searchInput}</h1>
        <input type="text" value={this.props.store.searchInput} onChange={(e) => this.props.store.changeSearch(e.target.value)} />
        <ul>
          {
            characterList.map(character => <li key={character.hasId()}>{ character.hasName() }</li> )
          }
        </ul>
      </div>
    )
  }
}
