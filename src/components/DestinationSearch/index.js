import {Component} from 'react'

import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeItem = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <div>
          <h1>Destination Search</h1>
          <div>
            <input
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeItem}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              alt="search-icon"
            />
          </div>
          <ul>
            {searchResult.map(each => (
              <DestinationItem key={each.id} destinationsDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
