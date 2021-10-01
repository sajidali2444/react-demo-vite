import React from 'react'
import Register from './register'
import Photo from './photos'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = React.useState(0)
  const [photos, setPhotos] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const fetchData = async () => {
    setIsLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const result = await response.json()
    if (result != undefined) {
      const list = result.slice(0, 100)
      setPhotos(list)
      setIsLoading(false)
    }
  }
  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      {isLoading ? (
        <div class="spinner">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
      ) : (
        <Photo photos={photos} />
      )}
      {/* <Register /> */}
    </div>
  )
}

export default App
