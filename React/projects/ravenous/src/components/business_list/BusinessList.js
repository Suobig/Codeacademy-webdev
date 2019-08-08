import React, {Component} from 'react';
import './BusinessList.css';
import Business from '../business/Business';

class BusinessList extends Component {
  render() {
    const items = this.props.items.map(item => {
      return <Business key={item.id} data={item} />
    });

    return (
    <div className="BusinessList">
      {items}
    </div>
    );
  }
}

export default BusinessList;