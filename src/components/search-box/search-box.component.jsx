import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <div id='cover' className={`search-box ${className}`}>
      <form method='get' action=''>
        <div className='tb'>
          <div className='td'>
            <input
              className={`search-box ${className}`}
              type='text'
              placeholder={placeholder}
              onChange={onChangeHandler}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
