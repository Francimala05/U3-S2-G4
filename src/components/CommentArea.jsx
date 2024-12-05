import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import PropTypes from 'prop-types'

class CommentArea extends Component { 
  state = {   //inizialmente lo stato è vuoto
    comments: [],  
    isLoading: false, //indica che è in caricamento
    isError: false,
  }


  componentDidUpdate = async (prevProps) => {  //Questo componente viene chiamato quando le proprietà del componente cambiano
    if (prevProps.asin !== this.props.asin) {  //confronto per vedere se la richiesta è la stessa o meno
      this.setState({ 
        isLoading: true,  //caricamento dati consentito
      })
      try {
        let response = await fetch(  //richiesta fetch
          'https://striveschool-api.herokuapp.com/api/comments/' + 
            this.props.asin,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4Nzc1ZTA2ZmM4YzAwMTU2Yjg3MDkiLCJpYXQiOjE3MzI4MDIzOTgsImV4cCI6MTczNDAxMTk5OH0.MxeUyEa3emk28WD_XhePYo2DMzDfRD33G3PybetaXLg',
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          this.setState({
            comments: comments,
            isLoading: false,
            isError: false,
          })
        } else {
          this.setState({ isLoading: false, isError: true })
        }
      } catch (error) {
        console.log(error)
        this.setState({ isLoading: false, isError: true })
      }
    }
  }

  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    )
  }

}

CommentArea.propTypes = {  //la PROP asin è dichiarata come obbligatoria ed è una stringa.
  asin: PropTypes.string.isRequired,
};

export default CommentArea


//manda a BookList