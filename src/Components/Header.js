import React from 'react';
import IconHeart from './Icons/IconHeart';
import IconShopping from './Icons/IconShopping';
import IconUser from './Icons/IconUser';

function Header() {
  return (
    <nav class="head">
        <h1>Eco-Store</h1>

        <div class="icons">
            <button class="profile">
                <IconUser />
            </button>

            <button class="wishlists">
                <IconHeart />
            </button>

            <button class="cart">
                <IconShopping />
            </button>
        </div>
    </nav>
  );
}

export default Header;




