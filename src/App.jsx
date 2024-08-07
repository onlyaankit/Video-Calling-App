import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import VideoPage from './components/VideoPage'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/room/:id",
      element:<VideoPage/>
    }
  ])
  return (
    <>
      <RouterProvider router = {router}/>
      {/* <HomePage/>
      <VideoPage/> */}
    </>
  )
}

export default App
