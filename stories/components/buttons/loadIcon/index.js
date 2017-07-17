import React from 'react';
import { storiesOf } from '@storybook/react';

import './background-div.css';
import LoadIcon from '../../../../src/components/Buttons/LoadIcon';
import whiteIcon from '../../../../public/circle-loading-white.png';
import blackIcon from '../../../../public/circle-loading-black.png';

export default storiesOf('LoadIcon', module)
  .add('White', () => <div className='icon-white'><LoadIcon iconUri={whiteIcon} /></div>)
  .add('Black', () => <div className='icon-black'><LoadIcon iconUri={blackIcon} /></div>
);