import React, { useState } from 'react';

import Node from './node';

export default function Tree (props) {
  const [ newNodeValue, setNewNodeValue] = useState(0)

  function addLeafNode (event) {
    event.preventDefault();
    console.log("clicked add New Leaf!")
  }

  function changeNewNodeValueField (event) {
    setNewNodeValue(event.target.value)
  }

  return (
    <div>
      <form onSubmit={addLeafNode}>
        <button type="submit"> Add Leaf Node</button>
        <input type="text" name="newNodeValueField" id="newNodeValueField" placeholder="New node value" onChange={changeNewNodeValueField}/>
      </form>
      <Node initVal={5} />
    </div>
  )
}