import { whiteTypes } from './../utils/Constants';

export const moveKnight = (toX, toY) => {
    return dispatch => {
            dispatch({
                type: whiteTypes.knight.knightMove,
                payload: {x:toX , y:toY}
            })
    }
}

export const canMoveKnight = (knightPosition, toX, toY) => {
    console.log(knightPosition)
    const {x, y} = knightPosition;
    const dx = toX - x;
    const dy = toY - y;
  
    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) 
        || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}