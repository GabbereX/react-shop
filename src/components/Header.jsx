export function Header() {
  return (
    <header className='header'>
      <div className='container header__container'>
        <a href='#' className='header__logo'>React Shop</a>
        <nav>
          <ul className='header__list'>
            <li className='header__item'>
              <a href='#' className='header__link'>Repo 1</a>
            </li>
            <li className='header__item'>
              <a href='#' className='header__link'>Repo 2</a>
            </li>
            <li className='header__item'>
              <a href='#' className='header__link'>Repo 3</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}