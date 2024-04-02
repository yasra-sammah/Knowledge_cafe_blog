import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog,handleAddBookMark }) => {                              /**props type nite gela e props install kore nicher line a add korte hoi/** */ 
  const {title,cover_image,author_img,posted_time,author,posted_date,hashtags} = blog;
  return (
    <div>
      <img className='rounded-xl' src={cover_image} alt = {`This is the ${title}`} />
      
      <div className='flex justify-between items-center mb-6 mt-4'>
        <div className='flex items-center'>
          <img className='w-16' src={author_img} alt="" />
          <div className='ml-4'>
            <p>{author}</p>
            <h2 className="text-sm">
            {posted_date}
            </h2>
          </div>
        </div>
        <div>
          <span>{posted_time}min read</span>
          <button onClick={()=>handleAddBookMark (blog)} className='ml-2 text-red-500'><CiBookmark></CiBookmark></button>
        </div>
      </div>
      <h2 className="text-4xl mb-5">{title}</h2>
      <p className='mb-4 flex gap-3 text-green-600'>
        {
          hashtags.map((hash,idex) => <span key={idex}><a href="#">#{hash}</a></span>)
        }
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog:PropTypes.object.isRequired,
  handleAddBookMark: PropTypes.func


}

export default Blog;