import React, { useState } from 'react';
import Axios from 'axios';

const SearchBar = () => {

  const [ status, setStatus ] = useState("no data");
  const [ term, setTerm ] = useState('');

  const getData = event => {
    event.preventDefault();
    Axios.get(`https://tracking.bosta.co/shipments/track/${term}`).then(
      (response) => {
        console.log(response);
        setStatus(response.data.CurrentStatus.state);
      }
    )
  }

  return ( 
        <div className="help-tip">
            <form onSubmit={getData} className="ui form">
                <input 
                type="number"
                placeholder="رقم الشحنة"
                required
                value={term}
                onChange={(event) => setTerm(event.target.value)}
                >
                </input>
            </form>
        </div>
  );
}
 
export default SearchBar;