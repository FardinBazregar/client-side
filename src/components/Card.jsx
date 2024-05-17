import React from "react";

const Card = ({ imageUrl, name, skills, mobile, email }) => {
  return (
    <div className="card text-center border-0 shadow-lg">
      <div className="card-body">
        <img src={imageUrl} width="96" className="d-inline-block rounded-circle mb-3" alt={name} />
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-muted">{skills}</p>
        <hr />
        <p className="card-text fw-bold">{mobile}</p>
        <p className="card-text">{email}</p>
      </div>
    </div>
  );
};

export default Card;
