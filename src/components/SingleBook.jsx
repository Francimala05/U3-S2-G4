import { Component } from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

class SingleBook extends Component {

  render() {
    return (
      <>
        <Card
        onClick={() => this.props.changeSelectedBook(this.props.book.asin)} //preparazione carta singolo libro
          style={{ 
            border:
              this.props.selectedBook === this.props.book.asin
                ? '3px solid red'
                : 'none',
          }}
        > 
          <Card.Img variant="top" src={this.props.book.img} /> 
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        
      </>
    )
  }
}
SingleBook.propTypes = { //le PROP books è dichiarata come obbligatoria e validante
  book: PropTypes.shape({
    asin: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  selectedBook: PropTypes.string.isRequired,
  changeSelectedBook: PropTypes.func.isRequired,
};

export default SingleBook
