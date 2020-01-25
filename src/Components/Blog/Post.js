import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { commentPost } from '../../store/actions';
import { formIterator } from '../utils';

const Post = () => {
      const dispatch = useDispatch();
      const post = useSelector(state => state.postReducer.post);
      const comments = useSelector(state => state.postReducer.comments);
      const user = useSelector(state => state.authReducer.user);
      const { id } = useParams();

      return (
            <div className="row">
                  <div className="col">
                        <div className="blog-post">
                              {post.length > 0 && post.map((elem, index) => {
                                    if (elem.id === id) {
                                          return (
                                                <div key={index}>
                                                      <h2 className="blog-post-title">{elem.title}</h2>
                                                      <p className="blog-post-meta">{elem.category}</p>
                                                      <p>{elem.text}</p>
                                                </div>
                                          )
                                    }
                                    return null
                              })}
                        </div>
                        <div className='col-6'>
                              {comments.length > 0 &&
                                    <div>
                                          <h4>Comments</h4>
                                          {comments.map((elem, index) => {
                                                if (elem.id === id) {
                                                      return (
                                                            <div key={index} className="media border">
                                                                  <div className="media-body m-3">
                                                                        <h5 className="mt-0">Name: {elem.name}</h5>
                                                                        Comment: {elem.comment}
                                                                  </div>
                                                            </div>
                                                      )
                                                }
                                                return null
                                          })}
                                    </div>
                              }
                              {user.logged === '1' &&
                                    <div>
                                          <h4>Add comment</h4>
                                          <form onSubmit={event => dispatch(commentPost(formIterator(event)))}>
                                                <div className="form-group">
                                                      <label htmlFor="name">Name</label>
                                                      <input type="text" className="form-control" id="name" required />
                                                </div>
                                                <div className="form-group">
                                                      <label htmlFor="comment">Add comment</label>
                                                      <textarea className="form-control" id="comment" rows="3" required ></textarea>
                                                </div>

                                                <input type='hidden' id='id' value={id} />
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                          </form>
                                    </div>
                              }
                        </div>
                  </div>

            </div>
      );
}

export default Post;
