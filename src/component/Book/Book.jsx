import PropTypes from 'prop-types'
const Book = ({bookmark}) => {
  const {title} = bookmark
  return (
    <div className='bg-slate-100 p-6 m-4 rounded-lg'>
      <h2>{title}</h2>
    </div>
  );
};

Book.propTypes = {
  bookmark: PropTypes.object
}

export default Book;