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
        <BoardTile
            key={`${x}${y}`} 
            x={x} 
            y={y}
            onClick={() => moveKnight(this.props.k, x, y)}
        >
            {
                (this.props.k[0] === y && this.props.k[1] === x) ?
                    <Knight/>
                    :
                    null
            }
        </BoardTile>
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
        k: state.AppReducer.k
     }
}

export default
    flow(
        connect(mapStateToProps, {moveKnight}),
        DragDropContext(HTML5Backend)
    )(Board);