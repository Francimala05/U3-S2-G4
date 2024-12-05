import { Button, ListGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'


const SingleComment = ({ comment }) => {  //comment come prop
  const deleteComment = async (asin) => {
    try {
      let response = await fetch( //collegamento fetch commenti
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4Nzc1ZTA2ZmM4YzAwMTU2Yjg3MDkiLCJpYXQiOjE3MzI4MDIzOTgsImV4cCI6MTczNDAxMTk5OH0.MxeUyEa3emk28WD_XhePYo2DMzDfRD33G3PybetaXLg',
          },
        }
      )
      if (response.ok) { //primo controllo
        alert('La recensione è stata elimata!')
      } else {
        throw new Error('La recensione non è stata eliminata!')
      }
    } catch (error) {
      alert(error)
    }
  }

  return ( //bottone elimina
    <ListGroup.Item>   
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  )
}
SingleComment.propTypes = { //le PROP comment è dichiarata come obbligatoria e validante
  comment: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func,
};

export default SingleComment
