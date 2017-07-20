import React from 'react';
import PropTypes from 'prop-types';
import './Content.scss';

import Item from '../Item/Item.jsx';

const Content = ({ className = '', onItemClick, children }) => (
  <div className={`dropdown-content ${className}`}>
    {
        React.Children.map(children,
          (el, id) => (
            <Item
              onClick={onItemClick}
              key={el.key || id.toString()}
              id={el.key || id.toString()}
            >
              {el}
            </Item>))
    }
  </div>
  );

Content.propTypes = {
  className: PropTypes.string,
  onItemClick: PropTypes.func,
};

export default Content;
