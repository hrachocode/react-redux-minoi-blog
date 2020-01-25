import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Posts = () => {
      const posts = useSelector(state => state.postReducer.post);
      const user = useSelector(state => state.authReducer.user);
      return (
            <div className="row mb-2 mt-2">
                  {posts.length > 0 ? posts.map((post, index) => {
                        return (
                              <div key={index} className="col-md-6">
                                    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                          <div className="col p-4 d-flex flex-column position-static">
                                                <strong className="d-inline-block mb-2 text-primary">{post.category}</strong>
                                                <h3 className="mb-0">{post.title}</h3>
                                                <p className="card-text mb-auto">{post.text}</p>
                                                <div className='d-flex justify-content-between'>           
                                                      <Link to={{ pathname: `/post/${post.id}` }} className="mb-2 mt-2">Continue eading</Link>
                                                      {user.logged === '1' && <Link to={{ pathname: `/edit-post/${post.id}`, state: post }} className="mb-2 mt-2"><span>Edit post</span></Link>}
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        )
                  }) : <h2>No Posts Yet, please Login or register and add one</h2>
                  }
            </div>

      );
};

export default Posts;
