import React, { Component } from 'react';
import './Block.css'
class BlockA extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <button className='block' style={{background:'green'}}>
              Block A  
            </button>
         );
    }
}
 
export default BlockA;