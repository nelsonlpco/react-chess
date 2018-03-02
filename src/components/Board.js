import React,{Component} from 'react';
import {connect} from 'react-redux';
import Knight from './Knight';
import { moveKnight } from './../actions/knightActions';
import {flow} from 'lodash';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import BoardTile from './BoardTile';

class Board extends Component {
    renderTile = (y, x) => 
    (
        <div>
        <BoardTile
            key={`${x}${y}`} 
            x={x} 
            y={y}
            onClick={() => moveKnight(x, y)}
        >
            {
                (this.props.knight.y === y && this.props.knight.x === x) ?
                    <Knight/>
                    :
                    null
            }
        </BoardTile>
        </div>
    )

    render(){
        var {tiles} = this.props;
        const squares = [];
        tiles.map((linha, indexLinha) =>  
            linha.map((coluna, indexColuna) =>
                squares.push(this.renderTile(indexLinha, indexColuna))
            )
        );

        return( 
            <div className="board-container">
                <div className="wrapper">
                {
                    squares
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tiles: state.AppReducer.tiles,
        knight: state.AppReducer.white.knightLeft
     }
}

export default
    flow(
        connect(mapStateToProps, {moveKnight}),
        DragDropContext(HTML5Backend)
    )(Board);