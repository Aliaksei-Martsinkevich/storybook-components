import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TransparentButton from '../../../../src/components/Buttons/TransparentButton';
import './background.css';

export default storiesOf('TransparentButton', module)
  .add('with text', () => 
  <div className='background'><TransparentButton 
    onClick={action('clicked')} 
    text='Regular state'
    /></div>)
  .add('with some emoji', () => <div className='background'><TransparentButton 
    onClick={action('clicked')} 
    text='😀 😎 👍 💯'
    /></div>)
  .add('with long text', () => <div className='background'><TransparentButton
    onClick={action('clicked')}
    text='Some long long long long long long long long long text'
    /></div>)
  .add('disabled', () => <div className='background'><TransparentButton 
    onClick={action('clicked')} 
    text='Disabled button'
    disabled={true}
    /></div>)
  .add('processing', () => <div className='background'><TransparentButton
    onClick={action('clicked')}
    text='Processing'
    processing={true}
    /></div>)
  .add('processing with long text', () => <div className='background'><TransparentButton
    onClick={action('clicked')}
    text='Some long long long long long long long long long long long text'
    processing={true}
/></div>);