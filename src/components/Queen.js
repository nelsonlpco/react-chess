import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {DragSource } from 'react-dnd';
import {ItemTypes } from './Constants';

const QueenSource= {
    beginDrag(props) {
        return {
            text: props.text
        }
    }
}

function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    };
  }

class Queen extends Component {
    render(){
        const { isDragging, connectDragSource, text } = this.props;
        return connectDragSource(
            <div style={{ opacity: isDragging ? 0.5 : 1 }}>
                {text}
            </div>
        );
    }
}



export default DragSource(ItemTypes.CARD, QueenSource, collect)(Queen);