import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import Table from "./List";


function App() {
  
  //const url = 'https://jsonplaceholder.typicode.com/'
  const [reqCat, setReqCat] = useState('users');
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  

  useEffect(() => {
    const fetchJson = async () =>{
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${reqCat}`)
        if (!response.ok) throw Error('Did not recieve expected data');
        const converted = await response.json();
        setItems(converted);
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message);
      }
    } 
    fetchJson();

  }, [reqCat])
  
  return (
    <div className="App">
      <Bar reqCat={reqCat} setReqCat={setReqCat} />
        {fetchError && <p className="w-100" style={{ color: "red", marginTop: "90px", textAlign: "center" }}>{`Error : ${fetchError}`}</p>}
        {!fetchError && <Table items={items} />}
    </div>
  );
}

export default App;
