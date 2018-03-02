import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ItemTypes} from './Constants';
import {DropTarget} from 'react-dnd';
import {connect} from 'react-redux';
import {flow} from 'lodash';
import { moveKnight, canMoveKnight } from './../actions/knightActions';

import Tile from './Tile';

const tileTarget = {
    canDrop(props){
        return canMoveKnight(props.k, props.x, props.y);
    },

    drop(props){
        props.moveKnight(props.x, props.y);
    }
}

function collect(connect, monitor){
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

class BoardTile extends Component {
    renderOverlay(color) {
        return (
          <span style={{
              position:'absolute',
                height: '100%',
                width: '100%',
                zIndex: 10,
                opacity: 0.5,
                backgroundColor: color,
          }} />
        );
      }

    render() {
        const {x, y, connectDropTarget, isOver, canDrop} = this.props;
        return connectDropTarget(
            <div  className="board-tile">
                <Tile x={x} y={y}>{this.props.children}</Tile>
                {isOver && !canDrop && this.renderOverlay('red')}
                {!isOver && canDrop && this.renderOverlay('yellow')}
                {isOver && canDrop && this.renderOverlay('green')}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        k: state.AppReducer.white.knightLeft
    }
}

export default flow(
    DropTarget(ItemTypes.KNIGHT, tileTarget, collect),
    connect(mapStateToProps, {moveKnight}),
)(BoardTile);