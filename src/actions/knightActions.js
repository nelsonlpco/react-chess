export const moveKnight = (toX, toY) => {
    return dispatch => {
            dispatch({
                type: 'move_knight',
                payload: {x:toX , y:toY}
            })
    }
}

export const canMoveKnight = (knightPosition, toX, toY) => {
    const [x, y] = knightPosition;
    const dx = toX - x;
    const dy = toY - y;
  
    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
           (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}