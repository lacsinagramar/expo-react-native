import { createActions } from 'redux-actions'
import { call } from 'ramda'

import ErrorHandler from '~/utils/errorHandler'
import request from '~/utils/request'

import {
  GET_POSTS,
  RESULT_GET_POSTS,
  CREATE_POST,
  RESULT_CREATE_POST
} from './constants'

const ReduxActions = createActions(
  {},
  GET_POSTS,
  RESULT_GET_POSTS,
  CREATE_POST,
  RESULT_CREATE_POST
)

const {
  createPost,
  getPosts,
  resultCreatePost,
  resultGetPosts
} = {
  getPosts: ReduxActions['app/home/getPosts'],
  resultGetPosts: ReduxActions['app/home/resultGetPosts'],
  createPost: ReduxActions['app/home/createPost'],
  resultCreatePost: ReduxActions['app/home/resultCreatePost']
}

const fetchPostsThunk = () => async dispatch => {
  try {
    dispatch(call(getPosts))
    const res = await request.get('/posts')
    dispatch(call(resultGetPosts, res.data))
  } catch (error) {
    const err = await ErrorHandler(error)
    dispatch(resultGetPosts(new Error(err)))
  }
}

const createPostActionThunk = props => async dispatch => {
  try {
    await dispatch(call(createPost))
    const res = await request.post('/posts', props)
    dispatch(call(resultCreatePost, res.data))
  } catch (error) {
    console.error(error)
    const err = await ErrorHandler(error)
    dispatch(resultCreatePost(new Error(err)))
  }
}

export {
  fetchPostsThunk as fetchPosts,
  createPostActionThunk as createPost
}
