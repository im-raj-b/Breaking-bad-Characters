import React from "react";
import Loading from "../UI/Loading";
import CharacterItem from "./CharacterItem";
import '../../App.css'

const CharacterGrid = ({ isLoading, items }) => {
  // can do here destructuring
  //console.log(props.items[0].name);
  //console.log(props);
  // console.log("loading", isLoading);
  // console.log('items',items);
  
  return isLoading ? (
    <Loading />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
