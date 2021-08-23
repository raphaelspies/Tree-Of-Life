import React, { useState } from 'react';

export default function Node (props) {
  const [ value, setValue ] = useState(props.value);
  // if (leftChild !== 0 && rightChild !== 0) {
  //   return (
  //     <div>
  //       Value: {value}
  //       <div className={"horizontal"}>
  //         <Node value={leftChild}/>  <Node value={rightChild}/>
  //       </div>
  //     </div>
  //   )
  // } else {
    return (
      <div className={"Node"}>
        Value: {value} <br/>
          <div className={"horizontal"}>
            {props.children && props.children.map(child => (
              <Node value={child}/>
            ))}
          </div>
      </div>
    )
  // }
}