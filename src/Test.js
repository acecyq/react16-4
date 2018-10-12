import React from 'react';
import { withRouter } from 'react-router-dom';

const Test = props => {
    console.log(props);
    return (
        <p>{props.match.params.id}</p>
    )
}

export default withRouter(Test);