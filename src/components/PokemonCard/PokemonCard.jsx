import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 280px;
  background: linear-gradient(#28b5b5, #d2e69c);
  
  border-radius: 10px;
  
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 3px 4px #04bcf4;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 3px 4px #04bcf4;
  }
`

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
`

const Name = styled.h2`
  font-size: 16px;
`

const StatsList = styled.ul`
  display: flex;
  list-style-type: none;
  margin-top: 20px;
  gap: 15px;
`

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Stat = styled.span`
  display: block;
  margin-top: 5px;
`

const ExperienseContainer = styled.div`
  display: flex;
  align-items: center;
`

const PokemonCard = () => {
  return (
    <Card tabIndex="0" title="Show full information">
      <RowContainer>
        <Name>Pikachu</Name>
        <ExperienseContainer>
          <Stat>122</Stat>
          <img src="../img/up-arrow.png" alt="Experiense" title="Base experiense" />
        </ExperienseContainer>
      </RowContainer>
      <img src="../img/mock/pokemon.png" alt="Pokemon" width="100" height="100"/>
      <StatsList>
        <ListItem>
          <img src="../img/slash.png" alt="Attack" width="32" height="32" title="Attack"/>
          <Stat>122</Stat>
        </ListItem>
        <ListItem>
          <img src="../img/speed.png" alt="Speed" width="32" height="32" title="Speed"/>
          <Stat>122</Stat>
        </ListItem>
        <ListItem>
          <img src="../img/security.png" alt="Defense" width="32" height="32" title="Defense"/>
          <Stat>122</Stat>
        </ListItem>
        <ListItem>
          <img src="../img/like.png" alt="Health" width="32" height="32" title="Health"/>
          <Stat>122</Stat>
        </ListItem>
      </StatsList>
    </Card>
  )
};

export default PokemonCard;