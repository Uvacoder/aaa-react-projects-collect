import React from 'react';
import SearchForm from './SearchForm';
import Stories from './Stories';
import Buttons from './Buttons';

function App() {
  return (
    <React.Fragment>
      <SearchForm />
      <Buttons />
      <Stories />
    </React.Fragment>
  );
}

export default App;
