import React from 'react';


const Scroll = (props) => {
    return (
        <div style={{ overflowX: 'scroll', height:'900px'}}>
            {props.children}
        </div>
        )
}

export default Scroll;
