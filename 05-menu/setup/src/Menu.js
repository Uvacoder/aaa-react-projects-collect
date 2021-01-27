import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map(menuItem => {
        const { id, titles, img, desc, price } = menuItem;

        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={titles} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{titles}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
