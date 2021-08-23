import React, { useState } from 'react';

import Node from './node';

export default function Tree (props) {
  const [ newNodeValue, setNewNodeValue] = useState(0)
  const [ nodeTree, setNodeTree ] = useState([5])
  const [ children, setChildren ] = useState([6, 11])

  function addLeafNode (event) {
    event.preventDefault();
    console.log("clicked add New Leaf!")
    addNewNode(newNodeValue)
  }

  function changeNewNodeValueField (event) {
    setNewNodeValue(event.target.value)
  }

  function addNewNode (newNodeValue) {
    setNodeTree(
      [
        ...nodeTree,
        newNodeValue
      ]
    )
  }

  return (
    <div>
      <form onSubmit={addLeafNode}>
        <button type="submit"> Add Leaf Node</button>
        <input type="text" name="newNodeValueField" id="newNodeValueField" placeholder="New node value" onChange={changeNewNodeValueField}/>
      </form>
      {nodeTree.map((node, index) => (
        <Node value={node} key={index} children={children}/>
      ))}
    </div>
  )
}