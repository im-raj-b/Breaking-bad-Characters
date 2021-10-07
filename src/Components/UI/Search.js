import React,{useState} from 'react'

function Search({getSearch}) {
    // console.log('inside search');
    // console.log(props.SearchTerm);
    const [text, setText] = useState('');

    const onChange = (para) => {
        setText(para)
        getSearch(para)
    }

     
    return (
      <section className="search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search Characters...."
            autoFocus
            value={text}
            onChange={(e) => onChange(e.target.value)}
          />
        </form>
      </section>
    );
}

export default Search
