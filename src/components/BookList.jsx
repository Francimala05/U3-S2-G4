import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea' //importazione da commentArea
import PropTypes from 'prop-types'

class BookList extends Component {  
  state = {  //lo stato inziiale ha due proprietà
    searchQuery: '',  //gestione ricerca libri
    selectedBook: null,  //memorizza libro selezionato
  }

  changeSelectedBook = (asin) => {  //aggiorna il selectedBook mostrando il proprio ID. 
    this.setState({
      selectedBook: asin,
    })
  }

  render() {
    return (
      <>
        <Row>
          <Col md={8}>
            <Row className="justify-content-center mt-5">
              <Col xs={12} md={4} className="text-center">
                <Form.Group> 
                  <Form.Control  //campo di input ricerca libri
                    type="search"
                    placeholder="Cerca un libro"
                    value={this.state.searchQuery}
                    onChange={(e) =>
                      this.setState({ searchQuery: e.target.value }) 
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="g-2 mt-3">
              {this.props.books  //filtraggio dei libri con filter 
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                ) 
                .map((b) => ( //mappatura dei libri con map 
                  <Col xs={12} md={4} key={b.asin}>
                    <SingleBook
                      book={b}
                      selectedBook={this.state.selectedBook}
                      changeSelectedBook={this.changeSelectedBook}
                    />
                  </Col>
                ))} 
            </Row> 
          </Col>
          <Col md={4}>  
            <CommentArea asin={this.state.selectedBook} />  
          </Col>
        </Row>
      </>
    )
  }
}
//nella colonna a destra si visualizza la CommentArea
BookList.propTypes = { //le PROP books è dichiarata come obbligatoria e validante
  books: PropTypes.arrayOf( 
    PropTypes.shape({
      asin: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default BookList


//invia direttamente all'App