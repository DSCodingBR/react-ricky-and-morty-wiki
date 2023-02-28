import React, { useEffect, useState } from "react";
import service from "../service";
import Character from "../components/Character";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  useEffect(() => {
    setLoading(true);
    service
      .get("/character")
      .then((res) => {
        setInfo(res.data.info);
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleNextPage = () => {
    service.get(info.next).then((res) => {
      setInfo(res.data.info);
      setCharacters(res.data.results);
    });
  };

  const handlePrevPage = () => {
    service.get(info.prev).then((res) => {
      setInfo(res.data.info);
      setCharacters(res.data.results);
    });
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="home-wrapper">
          <div className="home-image-header">
            <h2>
              Rick and Morty Wiki
            </h2>
          </div>
          <h1 className="home-title">Characters</h1>
          {characters?.length > 0 && (
            <ul className="home-content">
              {characters.map((character) => {
                return (
                  <li key={character.id}>
                    <Link to={`/character/${character.id}`}>
                      <Character
                        image={character.image}
                        name={character.name}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}

          <div className="home-button-wrapper">
            <button
              className="home-button"
              onClick={handlePrevPage}
              disabled={info.prev === null}
            >
              Prev
            </button>
            <button
              className="home-button"
              onClick={handleNextPage}
              disabled={info.next === null}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
