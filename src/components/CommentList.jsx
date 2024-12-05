import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'  //importazione da SingleComment
import PropTypes from 'prop-types'

const CommentList = ({commentsToShow}) => (
  <ListGroup style={{ color: 'black' }} className="mt-2"> 
    {commentsToShow.map((comment) => ( //si crea una lista tramite i singoli elementi
      <SingleComment comment={comment} key={comment._id} /> //richiamo da singolComment
    ))}
  </ListGroup>
)
CommentList.propTypes = {  //le PROP comment è dichiarata come obbligatoria e validante
  commentsToShow: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default CommentList; 
