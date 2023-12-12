import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { router } from './App.tsx'
import './App.css'
import store from './store/store.ts'
import { Provider } from 'react-redux'
import {RouterProvider} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store = {store}>
    <RouterProvider router={router} /> 
  </Provider>,
)
