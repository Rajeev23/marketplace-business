import React from 'react';
import classNames from 'classnames';
// import { Link } from 'react-router-dom';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        {/* <Link to="/"> */}
         <div style={{ width:'100%'}}>
         <img
            src="https://marketpalce-prod.s3.ap-south-1.amazonaws.com/v2.png"
            alt="logo"
            style={{ width: '100%'}}
             />
         </div>
             
        {/* </Link> */}
      </h1>
    </div>
  );
}

export default Logo;