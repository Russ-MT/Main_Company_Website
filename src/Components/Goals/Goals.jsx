import React from "react";
import "./Goals.scss";
import { useSelector } from "react-redux";

function TaleOfUs(props) {
  const id = useSelector((state) => state.bgColor.id);
  const isClick = useSelector((state) => state.bgColor.isClicked);

  console.log(id, isClick);

  return (
    <>
      {id === "goals" && isClick && (
        <div className="aboutus--container">
          <h1 style={{ color: "black", fontSize: "7rem" }}>Our Goals</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            tenetur, facilis autem vitae adipisci error, voluptates consequatur
            laboriosam minima minus nulla nobis! Nostrum libero debitis ad
            maiores, culpa rem ducimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            tenetur, facilis autem vitae adipisci error, voluptates consequatur
            laboriosam minima minus nulla nobis! Nostrum libero debitis ad
            maiores, culpa rem ducimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            tenetur, facilis autem vitae adipisci error, voluptates consequatur
            laboriosam minima minus nulla nobis! Nostrum libero debitis ad
            maiores, culpa rem ducimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            tenetur, facilis autem vitae adipisci error, voluptates consequatur
            laboriosam minima minus nulla nobis! Nostrum libero debitis ad
            maiores, culpa rem ducimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            tenetur, facilis autem vitae adipisci error, voluptates consequatur
            laboriosam minima minus nulla nobis! Nostrum libero debitis ad
            maiores, culpa rem ducimus.
          </p>
        </div>
      )}
    </>
  );
}

export default TaleOfUs;
