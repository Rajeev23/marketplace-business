import React from 'react';
import PropTypes from 'prop-types'

function FontAwesomeSVGIcon(props) {
    const icon = props.icon;

    return (
        <svg viewBox={`0 0 ${icon.icon[0]} ${icon.icon[1]}`}
             xmlns="http://www.w3.org/2000/svg"
             role="img" focusable="false" aria-hidden="true"
             data-prefix={icon.prefix}
             data-icon={icon.iconName}
             className={props.className}
             width={props.width}
             height={props.height}>

            <path fill={props.color}
                  className={props.fillClassName}
                  d={icon.icon[4]} />
        </svg>
    );
}

FontAwesomeSVGIcon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.shape({
        prefix: PropTypes.string.isRequired,
        iconName: PropTypes.string.isRequired,
        icon: PropTypes.array.isRequired
    }).isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    fillClassName: PropTypes.string
};

FontAwesomeSVGIcon.defaultProps = {
    className: '',
    color: 'currentColor',
    fillClassName: ''
};

export default FontAwesomeSVGIcon;