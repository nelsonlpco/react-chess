import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Tile extends Component
{ 
    setTileClass = (tileLine, tileColumn) =>(
        (tileLine + tileColumn) % 2 === 0  ? 'black-tile' : 'white-tile'
    );
    
    shouldComponentUpdate = (nextProps, nextState) => {
        return nextProps.children !== this.props.children;
    }
    
    render(){
        var {children, y, x} = this.props;

        return (
            <div className={`tile ${this.setTileClass(y, x)}` }>
                {children}
            </div>
        );
    }
};


Tile.propTypes = {
    x : PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
}

export default Tile;