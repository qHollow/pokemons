import styled from 'styled-components';

const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  backface-visibility: hidden;
  border-radius: 10px;
  background: linear-gradient(#28b5b5, #d2e69c);
  transform: perspective(600px) rotateY(0);
  transition: transform .7s ease;
`

const Back = styled(Front)`
  transform: perspective(600px) rotateY(180deg);
`

const Card = styled.div`
  width: 200px;
  height: 280px;
  cursor: pointer;
  outline: none;
  position: relative;
  align-items: center;
  &:hover,
  &:focus {
    ${Front} {
      transform: perspective(600px) rotateY(-180deg);
    }

    ${Back} {
      transform: perspective(600px) rotateY(0);
    }
  }
`
const RowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
`

const Name = styled.h2`
  font-size: 16px;
`

const StatsList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
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
    <Card tabIndex="0">
      <Front>
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
      </Front>
      <Back>
        
      </Back>
    </Card>
  )
};

export default PokemonCard;