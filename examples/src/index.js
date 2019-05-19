import React from 'react';
import { render} from 'react-dom';

import ReactEtherButton from '../../src';


const App = () => (
  <div>
    Here is our button:
    <ReactEtherButton />
  </div>
)

render(<App />, document.getElementById("root"));
