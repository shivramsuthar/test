import React, { Component } from 'react';
class BlockB extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <button className='block'style={{background:'yellow'}}>
              Block B  
            </button>
         );
    }
}
 
export default BlockB;