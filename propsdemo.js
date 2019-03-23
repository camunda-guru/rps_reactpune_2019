
import React from 'react'
import PropTypes from 'prop-types';

function MyComponent(props) {
    const { includedProp } = props;
    return (
        <div  includedProp={includedProp}>Hello</div>
    );
}
MyComponent.propTypes = {
    includedProp: PropTypes.string.isRequired,
};

export default MyComponent