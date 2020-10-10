import React from 'react'

import grey from "../../Images/star-grey.svg";
import yellow from "../../Images/star-yellow.svg";

export default (props) => {
    return (
      <div>
        {[...Array(5)].map((_o, i) => {
          if (i + 1 <= Math.round(props.number)) {
            return <img src={yellow} alt="y" />;
          } else {
            return <img src={grey} alt="g" />;
          }
        })}
      </div>
    );
}