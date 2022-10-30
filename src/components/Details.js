import React from "react";
import styled from "styled-components";

function Detail() {
  const path = process.env.PUBLIC_URL;
  return (
    <Container>
      <Background>
        <img src={path + "/images/star-wars-shodzenya.jpg"} />
      </Background>
      <ImageTitle>
        <img src={path + "/images/sky-woker-shodzenia.png"} />
      </ImageTitle>
      <Controls>
        <TrailerButton>
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <ShareButton>
          <img src={path + "/images/share-button-image.png"} />
        </ShareButton>
      </Controls>
      <Subtitle>2019 • 142 хв. • Космічна опера • Бойовик • Фентезі</Subtitle>
      <Description>
        Кайло Рен захоплює голокрон ситхів і згідно інформації в ньому вирушає
        на планету Екзогол. Там Кайло зустрічає Імператора Шива Палпатіна,
        котрий вважався давно загиблим. Палпатін розповідає, що створив Сноука і
        Верховний Порядок для відродження Галактичної Імперії. Імператор показує
        таємно збудовану армаду «зоряних руйнівників» і обіцяє віддати
        командування нею Кайло, якщо той розшукає Рей.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.7;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const TrailerButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24p;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb (249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;
const ShareButton = styled(AddButton)`
  background: rgb(249, 249, 249);
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-left: 4px;
  }
`;
const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
