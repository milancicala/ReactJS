import React from 'react'

export default (props) => {
        return(
            <div className="input" type="number" classID="input"><span className="display">{props.showResult === 1 ? props.result : props.displayNumber}</span></div>
        );
}
