
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmark from './component/Bookmark/Bookmark'
import Header from './component/Header/Header'

function App() {
   const [bookmarks, setBookmaks] = useState([])

   const handleAddBookMark = blog => {
    const newBook = [...bookmarks , blog]
    setBookmaks(newBook)
   }

  return (
    <>
      
    <Header></Header>
    <div className='md:flex max-w-4xl mx-auto gap-3'>
      
      <Blogs handleAddBookMark = {handleAddBookMark}></Blogs>
      
      
      <Bookmark bookmarks = {bookmarks}></Bookmark>
      
    </div>
      
      
    </>
  )
}

export default App
