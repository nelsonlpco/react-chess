import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ItemTypes} from './Constants';
import {DropTarget} from 'react-dnd';
import {connect} from 'react-redux';
import {flow} from 'lodash';
import { moveKnight } from './../actions/knightActions';

import Tile from './Tile';

const tileTarget = {
    drop(props){
        console.log(props)
        props.moveKnight(props.k, props.y, props.x)
    }
}

function collect(connect, monitor){
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

class BoardTile extends Component {
    render() {
        const {x, y, connectDropTarget} = this.props;
        
        return connectDropTarget(
            <div  >
            <Tile x={x} y={y}>{this.props.children}</Tile>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        k: state.AppReducer.k
    }
}

export default flow(
    DropTarget(ItemTypes.KNIGHT, tileTarget, collect),
    connect(mapStateToProps, {moveKnight}),
)(BoardTile);