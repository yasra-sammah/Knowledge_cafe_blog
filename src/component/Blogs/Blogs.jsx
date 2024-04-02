import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'


const Blogs = ({handleAddBookMark}) => {
  const [blogs,setBlogs] = useState([])

  useEffect(()=>{
    fetch('Blog.json')
    .then(res => res.json())
    .then(data =>setBlogs(data))
  },[])
  return (
    <div className="md:w-2/3">
      <h3>Blog:{blogs.length}</h3>
      {
        blogs.map(blog => <Blog key= {blog.id} blog = {blog}
          handleAddBookMark = {handleAddBookMark}
        >   
        </Blog>)
       
      }
    </div>
  );
};
Blogs.propTypes = {
  handleAddBookMark: PropTypes.func


}

export default Blogs;