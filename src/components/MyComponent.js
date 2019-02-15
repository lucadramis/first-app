import React,{ Component } from "react";

class MyComponent extends Component {
    constructor(propos){
        super(propos);

        this.state = {
            visible: false,
            myData:[1,2,3,4,5,6,7]
        };
    }
    
    
    
    render(){
        return(
        
        <div>
            {
                this.state.visible === true ?
                <p>visible</p>
                :
                <p>not visible</p>
            }
            <button onClick = {this.handleClick}>click</button>
                
                
            </div>
        );
        
    }
    
}
export default MyComponent;