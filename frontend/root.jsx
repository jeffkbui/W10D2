import React from 'react';
import Clock from './clock';
import Tabs from './tab';
import Weather from './weather';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Clock />
        <Weather />
        <Tabs />
        </div>

    )
  }
}