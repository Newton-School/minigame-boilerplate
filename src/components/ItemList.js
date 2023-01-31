import React, { Fragment, useRef } from 'react';
import { createPortal } from 'react-dom';

function ItemList({ items }) {
  const listRef = useRef(null);

  const handleClick = () => {
    listRef.current.style.backgroundColor == 'pink' ? listRef.current.style.backgroundColor = 'white' : listRef.current.style.backgroundColor = 'pink';
  }

  return (
    <Fragment>
        <button onClick={handleClick}>Change Color</button>
        {createPortal(
          <ul ref={listRef}>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>,
          document.querySelector('#portal-container')
        )}
    </Fragment>
  );
}

export default ItemList;
