import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import { Container } from 'react-bootstrap'
import BookList from './components/BookList'
import fantasy from './data/fantasy.json'

function App() {
  return ( //riferimenti ai vari componenti
    <>
      <MyNav />      
      <Container>
        <Welcome /> 
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  )
}
//BookList racchiude CommentArea(AddComment,CommentList,Loading,Error) e SingleBook
export default App
