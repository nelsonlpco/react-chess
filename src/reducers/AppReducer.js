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
    k: [0,1]
};

export default (state = initialState, action) => {
    switch(action.type){
        case 'move_knight': 
        console.log(action, 'acao ')
            return {...initialState, k: [action.payload.x, action.payload.y]}
    }
    return state;
}