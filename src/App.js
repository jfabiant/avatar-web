import React, { useEffect, useState } from 'react';
import AvatarBadge from './components/AvatarBadge';
import axios from "axios";

function App() {

  const [characters, setCharacters] = useState([])
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    if (pagination > 0) {
      fetchLastairbender(pagination);
    } else {
      setPagination(1);
    }
  }, [pagination])

  const fetchLastairbender = async (idPage) => {
    try {
      const responseCharacters = await axios.get(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${idPage}`);
      // console.log(responseCharacters.data);
      setCharacters(responseCharacters.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <nav>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Avatar_The_Last_Airbender_logo.svg/1024px-Avatar_The_Last_Airbender_logo.svg.png" alt="thelastairbenderapi" className="logo" />
      </nav>
      <main>
        <section className="results">
          {
            characters.map(character => {
              return (
                <AvatarBadge key={character._id} photoUrl={character.photoUrl} name={character.name} />
              )
            })
          }
        </section>
        <section className="pagination">
          <button onClick={() => { setPagination(pagination - 1) }}>&laquo;</button>
          {/* <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button> */}
          <button onClick={() => { setPagination(pagination + 1) }}>&raquo;</button>
        </section>
      </main>
    </>
  )
}

export default App;
