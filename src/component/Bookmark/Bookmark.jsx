import PropTypes from 'prop-types'
import Book from '../Book/Book';

const Bookmark = ({bookmarks,readingtime}) => {
  
  return (
    
    <div className="md:w-1/3 bg-slate-200 ml-4 max-h-svh pt-3 rounded-lg">
      
    <div>
        <h2 className="text-xl text-center bg-gray-200 p-4 ">Spend on read time {readingtime}</h2>
      </div>
    <h2 className='text-center'>Bookmarked Blogs:{bookmarks.length}</h2>
    {
      bookmarks.map((bookmark,idx) => <Book key={idx} bookmark = {bookmark}></Book>)
    }
  
  </div>
  );
};
Bookmark.propTypes = {
  bookmarks:PropTypes.array,
  readingtime:PropTypes.number
}
export default Bookmark;