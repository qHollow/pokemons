import styled from 'styled-components';
import PokemonCard from '../PokemonCard';

const Wrapper = styled.div`
  width: 100vw;
  padding: 30px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`

const CardList = () => {
  return (
    <Wrapper>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </Wrapper>
  )
};

export default CardList;