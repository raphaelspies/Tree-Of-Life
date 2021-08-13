import React, { useState } from 'react';

export default function Node (props) {
  const [ value, setValue ] = useState(props.initVal);
  return (
    <div>
      Value: {value}
    </div>
  )
}