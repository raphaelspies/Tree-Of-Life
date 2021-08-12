import React, { useState } from 'react';

export default function Tree (props) {

  function addLeafNode () {
    console.log("clicked add New Leaf!")
  }

  return (
    <div>
      <button> Add Leaf Node</button>
    </div>
  )
}