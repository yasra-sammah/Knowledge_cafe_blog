import PropTypes from 'prop-types';

const Blog = ({ blog }) => {                              /**props type nite gela e props install kore nicher/** */ 
  console.log(blog)
  return (
    <div>
      
    </div>
  );
};

Blog.propTypes = {
  blog:PropTypes.object.isRequired
}

export default Blog;