import React, {Component} from 'react';
import './BusinessList.css';
import Business from '../business/Business';

class BusinessList extends Component {
  render() {
    const items = this.props.items.map(item => {
      return <Business key={item.id} data={item} />
    });

    const placeHolder = <h2>Nothing to display</h2>;
    return (
      <div className="BusinessList">
        {items.length ? items : placeHolder}
      </div>
    );
  }
}

export default BusinessList;