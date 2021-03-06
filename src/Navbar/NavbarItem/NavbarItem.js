import React from 'react';
import {StyledNavbarItem, StyledNavbarLink} from './style.js';

/**
 * styled everything
 */
const NavbarItem = ({url, isactivekey, text, handleClick}) =>
      <StyledNavbarItem onClick={() => {handleClick();}}
                        isactivekey={isactivekey}>
        <StyledNavbarLink to={url}>
          {text}
        </StyledNavbarLink>
      </StyledNavbarItem>;

export default NavbarItem;
