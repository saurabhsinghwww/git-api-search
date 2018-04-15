import React, {Component} from 'react';
import {render} from 'react-dom';

import Search from './com/tessian/gitapidata/components/Search';

/**
 * The main react component that bootstrap the application and display the search filters and results.
 * 
 * @author Saurabh Singh
 * @version 1.0
*/
class App extends Component {
  render () {
    return <Search/>;
  }
}

render(<App/>, document.getElementById('app'));