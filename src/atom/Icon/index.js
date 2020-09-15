import React from 'react';
import PropTypes from 'prop-types';
import {Img} from './styles';
import './style.css';
const Sprint = props => {
    const style = {
        // objectPosition: `${props.x}px  ${props.y}px`,
        width: `${props.width}px`,
        height: `${props.height}px`
    }
     return (<Img src={props.filename} style={style} className={props.icon}/>)
}
Sprint.defaultProps = {
    width: 0,
    height: 0
}
Sprint.propTypes = {
    filename: PropTypes.string,
    icon: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
}
export default Sprint;