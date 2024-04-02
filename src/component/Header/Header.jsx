import Profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <header className='flex justify-between p-4 m-4 items-center max-w-4xl mx-auto border-b-2'>
      <h1 className="text-3xl font-bold">Knowledge Blog</h1>
      <img src={Profile} alt="" />
    </header>
  );
};

export default Header;