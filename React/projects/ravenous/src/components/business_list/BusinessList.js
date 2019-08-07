import React, {Component} from 'react';
import './BusinessList.css';
import Business from '../business/Business';

class BusinessList extends Component {
  items = this.props.items.map(item => <Business data={item} />);

  render() {
    return (
    <div className="BusinessList">
      {this.items}
    </div>
    );
  }
}

export default BusinessList;