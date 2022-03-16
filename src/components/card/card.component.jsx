import { Component } from 'react';

import './card.styles.css';

class Card extends Component {
  render() {
    const { name, email, id } = this.props.monster;
    return (
      <div className='card-container'>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set1&size=180x180`}
        />
        <h2 className='text-name'>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
