import { Component } from 'react';

import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    return (
      <div id='cover'>
        <form method='get' action=''>
          <div className='tb'>
            <div className='td'>
              <input
                className={`search-box ${this.props.className}`}
                type='text'
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
