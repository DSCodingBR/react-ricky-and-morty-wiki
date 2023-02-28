import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../service";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
function CharacterInfo() {
  const [characterInfo, setCharacterInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    service
      .get(`/character/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setCharacterInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="character-details-wrapper">
          <Link className="character-details-wrapper_goback" to="/">
            Back to home
          </Link>
          {characterInfo && (
            <div className="character-details">
              <div className="character-details-image">
                <img src={characterInfo.image} alt={characterInfo.name} />
              </div>
              <div className="character-details-info">
                <h3>{characterInfo.name}</h3>
                <p>
                  <span>Status:</span> {characterInfo.status}
                </p>
                <p>
                  <span>Gender: </span> {characterInfo.gender}
                </p>
                <p>
                  <span>Species: </span> {characterInfo.species}
                </p>
                <p>
                  <span>Location: </span>
                  {characterInfo?.location?.name}
                </p>
                <p>
                  <span>Origin: </span>
                  {characterInfo?.origin?.name}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default CharacterInfo;
