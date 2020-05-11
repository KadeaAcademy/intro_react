import React from 'react';

const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href='#home'>{props.home}</a>
          </li>
          <li>
            <a href='#about'>{props.about}</a>
          </li>
          <li>
            <a href='#logout'>{props.disconnect}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
