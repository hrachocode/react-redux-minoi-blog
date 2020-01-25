import React from 'react';

import Posts from '../Components/Blog/Posts';
import Login from '../Components/Authentication/Login';
import Register from '../Components/Authentication/Register';
import { AuthProtection } from '../Components/Authentication/utils';
import AddPost from '../Components/Blog/Pages/AddPost';
import EditPost from '../Components/Blog/Pages/EditPost';
import Post from '../Components/Blog/Post';

export const routerConfig = [
      {
            path: "/",
            exact: true,
            component: Posts
      },
      {
            path: '/login',
            component: Login
      },
      {
            path: '/register',
            component: Register
      },
      {
            path: '/post/:id',
            component: Post
      },
      {
            path: '/add-post',
            component: () => <AuthProtection> <AddPost /> </AuthProtection>
      },
      {
            path: '/edit-post/:id',
            component: () => <AuthProtection> <EditPost /> </AuthProtection>
      }
];