import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { formIterator } from '../../utils';
import { createPost } from '../../../store/actions';

const AddPost = () => {
      const dispatch = useDispatch();
      const history = useHistory();
      return (
            <div>
                  <form onSubmit={event => { dispatch( createPost( formIterator( event ) ) ); history.push('/'); } }>
                        <div className="form-group">
                              <label htmlFor="title">Title</label>
                              <input type="text" className="form-control" id="title" required />
                        </div>
                        <div className="form-group">
                              <label htmlFor="category">Category</label>
                              <input type="text" className="form-control" id="category" aria-describedby="emailHelp" required />
                        </div>
                        <div className="form-group">
                              <label htmlFor="text">Content</label>
                              <textarea className="form-control" id="text" rows="3" required ></textarea>
                        </div>
                        
                        <input type='hidden' id='id' value={Math.floor(Math.random() * 10000)} />
                        <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
            </div>
      );
}

export default AddPost;