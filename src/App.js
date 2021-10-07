import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/UI/Header';
import CharacterGrid from './Components/Characters/CharacterGrid';
import Search from './Components/UI/Search';

function App() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
   
      async function fetchMy() {
        let res = await fetch(
          `https://breakingbadapi.com/api/characters?name=${search}`
        );
        res = await res.json();
        setItems(res);
        setLoading(false);
        
      }
    fetchMy()
  }, [search, setLoading]);
  // console.log('loaind',loading);

  return (
    <div className="container">
      {/* <List /> */}
      <Header />
      <Search getSearch={(para)=> setSearch(para)}/>
      <CharacterGrid isLoading={loading} items={items}/>
    </div>
  );
}

export default App;


