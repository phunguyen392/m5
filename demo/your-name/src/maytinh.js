import React, { Component } from 'react';

class Maytinh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soA:0,
            soB:0,
            toantu:'',
            kq:''


        }

    }
    render() {
        return (
            <div>
                soA:{this.state.soA},
                soB:{this.state.soB},
                {
                    so thu mot:<input type='number' onChange={this.soA}/>
                    so thu hai:<input type='number' onChange={this.soB} />
                    
                }
            </div>
        );
    }
}

export default Maytinh;
