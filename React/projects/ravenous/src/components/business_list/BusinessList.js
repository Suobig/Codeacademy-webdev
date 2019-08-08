import React, {Component} from 'react';
import './BusinessList.css';
import Business from '../business/Business';

class BusinessList extends Component {
  items = this.props.items.map(item => {
    const key = `${item.name}-${item.address}-${item.city}-${item.state}`
    return <Business key={key} data={item} />
  });

  render() {
    return (
    <div className="BusinessList">
      {this.items}
    </div>
    );
  }
}

export default BusinessList;