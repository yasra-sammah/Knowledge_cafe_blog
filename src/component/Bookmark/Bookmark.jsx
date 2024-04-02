import PropTypes from 'prop-types'
import Book from '../Book/Book';

const Bookmark = ({bookmarks}) => {
  return (
    <div className="md:w-1/3 bg-slate-200 ml-4 max-h-svh pt-3 rounded-lg">
      <h2 className='text-center'>Bookmarked Blogs:{bookmarks.length}</h2>
      {
        bookmarks.map(bookmark => <Book key={bookmark.id} bookmark = {bookmark}></Book>)
      }
    </div>
  );
};
Bookmark.propTypes = {
  bookmarks:PropTypes.array
}
export default Bookmark;