import React from 'react';
import { RiLoaderLine, RiCursorFill } from 'react-icons/ri';

function Header() {
  return (
    <div>
      <RiLoaderLine className="App-icon-spinner" />
      <RiCursorFill className="App-icon" />
      <div className="HeaderBar">
        <h4 className="HeaderTitle">Security Extension</h4>
        <div className="HeaderDesc">
          <i>Developed for Int. to Computer Security by Erkin</i>
        </div>
      </div>
    </div>
  );
}

export default Header;
