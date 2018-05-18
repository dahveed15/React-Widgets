import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './weather';
import Clock from './clock';
import Tabs from './tabs';

export default function() {
  return (
    <div>
      <Clock />
      <Weather />
      <Tabs />
    </div>
  );
}
