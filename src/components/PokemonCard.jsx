import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const PokemonCard = ({ pokemon, addDexList }) => {
  const { img_url, korean_name, types, id } = pokemon;

  return (
    <CardLi>
      <img src={img_url} alt="pocketmonImg" />
      <h3>{korean_name}</h3>
      <p>{types}</p>
      <p>No. {id}</p>
      <Button onClick={() => addDexList(id)}>ADD</Button>
    </CardLi>
  );
};

//style
const CardLi = styled.li`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #777;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export default PokemonCard;
