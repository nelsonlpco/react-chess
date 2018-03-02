import { whiteTypes } from './../utils/Constants';

const initialState = {
    tiles: [
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','','']
    ],
    white:{
        rockLeft: {x:0, y:0}, 
        knightLeft: {x:1, y:0}, 
        bishopLeft: {x: 2, y: 0},
        queen: {x:0, y:3}, 
        king: {x: 4, y: 0},
        bishopRight: {x: 5, y: 0},
        knightRight: {x:6, y:0}, 
        rockRight : {x:7, y:0}, 
    },
    black:{
        rockLeft: {x:0, y:0}, 
        knightLeft: {x:1, y:0}, 
        bishopLeft: {x: 2, y: 0},
        queen: {x:3, y:0}, 
        king: {x: 4, y: 0},
        bishopRight: {x: 5, y: 0},
        knightRight: {x:6, y:0}, 
        rockRight : {x:7, y:0}, 
    }
};

export default (state = initialState, action) => {
    switch(action.type){
        case whiteTypes.knight.knightMove:
            return {...initialState, knight:{x: action.payload.y, y: action.payload.x} }
    }
    return state;
}