
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmark from './component/Bookmark/Bookmark'
import Header from './component/Header/Header'

function App() {
   const [bookmarks, setBookmaks] = useState([])

   const [readingtime , setReadingtime] = useState(0)

   const markAsRead = (id ,time) => {
      const newTime = readingtime + time;
      setReadingtime(newTime)
      // remove bookmark
      const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
      setBookmaks(remainingBookmark)
   }

   const handleAddBookMark = blog => {
    const newBook = [...bookmarks , blog]
    setBookmaks(newBook)
   }

  return (
    <>
      
    <Header></Header>
    <div className='md:flex max-w-4xl mx-auto gap-3'>
      
  <Blogs handleAddBookMark = {handleAddBookMark} markAsRead= {markAsRead}></Blogs>
      
      
      <Bookmark bookmarks = {bookmarks}
      readingtime = {readingtime}></Bookmark>
      
    </div>
      
      
    </>
  )
}

export default App
