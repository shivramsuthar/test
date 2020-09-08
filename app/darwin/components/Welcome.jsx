import React, { Component } from 'react';
import Header from './Header'
import BlockA from './Blocks/BlockA'
import BlockB from './Blocks/BlockB'
import BlockC from './Blocks/BlockC'
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div >
                <Header/>
                <div>
                <BlockA/>
                <BlockB/>
                {localStorage.getItem('authenticatedUserType')==='Admin'?<BlockC/>:null}
                </div>
            </div>
         );
    }
}
 
export default Welcome;