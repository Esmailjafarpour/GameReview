import './App.css';
import axios from 'axios';
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {loadGames} from './actions/gameActions';
import Game from './components/game';
import styled from 'styled-components';
import{motion} from 'framer-motion';
import GlobalStyles from './components/GlobalStyles';
import GameDetail from './components/GameDetail';
import Nav from './components/Nav';
import {fadeIn} from './animation';

// esmailjafarpour29@gmail
  // SJ9337301641
  // https://rawg.io/@sj2300592045/apikey
  // https://rawg.io/apidocs

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('before action')
    dispatch(loadGames())
  },[dispatch])

  const {popular,upcoming,newGames,searched} = useSelector((state)=> state.games)
  const {game} = useSelector((state)=> state.detail)
  
  return (
    <div className="App">
      {game.id && <GameDetail/>}
      <GameList variants={fadeIn} initial="hidden" animate="show">
        <Nav/>
        <GlobalStyles/>
        {searched.length ?
          <div>
              <h2>Searched Games</h2>  
              <Games>
                {searched.map((game)=>(
                    <Game 
                      key={game.id}
                      name={game.name}
                      released={game.released}
                      id={game.id}
                      image={game.background_image}
                    />
                ))}
              </Games>
          </div>
        :
        ''
        }
        

        <h2>Upcoming Games</h2>
        <Games>
            {upcoming.map((game)=>(
              <Game 
                key={game.id}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
              />
            ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
            {popular.map((game)=>(
              <Game 
                key={game.id}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
              />
            ))}
        </Games>
        <h2>New Games</h2>
        <Games>
            {newGames.map((game)=>(
              <Game 
                key={game.id}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
              />
            ))}
        </Games>
      </GameList>
    </div>
  );
}


const GameList = styled(motion.div)`
  padding : 0rem 5rem;
  background-color: rgb(219 234 254);
  h2{
    padding : 5rem 0rem;
  };

`

const Games = styled(motion.div)`
  min-height : 80vh;
  display : grid;
  grid-template-columns : repeat(auto-fit,minmax(300px,1fr));
  gap : 5rem 3rem;
`


export default App;
