import React, { useState } from 'react';

import Node from './node';

export default function Tree (props) {

  function addLeafNode (event) {
    event.preventDefault();
    console.log("clicked add New Leaf!")
  }

  return (
    <div>
      <form onSubmit={addLeafNode}>
        <button type="submit"> Add Leaf Node</button>
        <input type="text" name="newNodeValue" placeholder="New node value"/>
      </form>
      <Node initVal={5} />
    </div>
  )
}