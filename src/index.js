import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDUC75Q4veDTKro0rE8s95ygwcVQkgEJbU';

const App = () => {
  return <div>
            <SearchBar />
          </div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));
