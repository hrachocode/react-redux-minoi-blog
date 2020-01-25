import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { editPost } from '../../../store/actions';
import { formIterator } from '../../utils';

const EditPost = () => {
      const dispatch = useDispatch();
      const location = useLocation();
      const history = useHistory();
      return (
            <div>
                  <form onSubmit={event => { dispatch( editPost (formIterator(event) )  ); history.push('/'); } }>
                        <div className="form-group">
                              <label htmlFor="text">Title</label>
                              <input type="text" className="form-control" id="title" defaultValue={location.state.title ? location.state.title : ''} required />
                        </div>
                        <div className="form-group">
                              <label htmlFor="category">Category</label>
                              <input type="text" className="form-control" id="category" aria-describedby="emailHelp" defaultValue={location.state.category ? location.state.category : ''} required />
                        </div>
                        <div className="form-group">
                              <label htmlFor="text">Content</label>
                              <textarea className="form-control" id="text" rows="3" defaultValue={location.state.text ? location.state.text : ''} required ></textarea>
                        </div>
                        <input type='hidden' id='id' value={location.state.id ? location.state.id : ''} />
                        <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
            </div>
      );
}

export default EditPost;
