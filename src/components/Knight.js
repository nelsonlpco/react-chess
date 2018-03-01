import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {ItemTypes} from './Constants';
import {DragSource} from 'react-dnd';

const KnightSource = {
    beginDrag(props) {
        console.log('eita')
        return {
            
        };
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Knight extends Component {
    render() {
        const {connectDragSource, isDragging} = this.props;
        return connectDragSource(
        <span
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move'
            }}
        >♘</span>
        );
    }
}

Knight.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
}


export default DragSource(ItemTypes.KNIGHT, KnightSource, collect) (Knight);