import React from 'react';

export default class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {index: 0};
  }

  handleClick(arg) {
   return () => {
    this.setState({index: arg});
   };
  }

  render() {
    return(
      <div>
        <h1>Tabs</h1>
        <div className="tabs">
          <ul>
            <li onClick={this.handleClick(0)}>one</li>
          </ul>
          <ul>
            <li onClick={this.handleClick(1)}>two</li>
          </ul>
          <ul>
            <li onClick={this.handleClick(2)}>three</li>
          </ul>
        </div>
      </div>
    )
  }


}