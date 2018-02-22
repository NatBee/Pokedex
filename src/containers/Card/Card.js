import React, { Component } from 'react';

const Card = ({ id, name, pokemon }) => {
  return (
    <article>
      <h3>{id}</h3>
      <h3>{name}</h3>
      <h3>{pokemon}</h3>
    </article>
  )
}

export default Card;
