import React from "react"
import "../styles/Counter.css"

class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count:0,
            min:1,
            max:Number.POSITIVE_INFINITY,
            flag:false,
            alert:false
        }
    }

    increment=()=>{
        let val=this.state.count+this.state.min

        if(val<this.state.max){
            this.setState({
                count:this.state.count+this.state.min
            })
        }else{
            this.setState({
                count:this.state.max,
                alert:true
            })
        }
        
    }

    decrement=()=>{
        this.setState({
            count:this.state.count-this.state.min,
            alert:false
        })
    }

    reset=()=>{
        this.setState({
            count:0,
            min:1,
            max:Number.POSITIVE_INFINITY,
            flag:false,
            alert:false
        })
    }

    handleChange=(val)=>{
        if(!this.state.flag){
            this.setState({
                min:val,
                flag:true
            })
        }else{
            this.setState({
                max:val
            })
        }
    }

    setMax=(val)=>{
        this.setState({
            max:val
        })
    }

    render(){
        return(
            <>
                <h1>{this.state.count}</h1>
                {this.state.alert && <span style={{color:"green",fontWeight:700}}>Max Value reached</span>}
                <div className="sub-heading">
                    <h3>Steps</h3>
                    <h3>MAX</h3>
                </div>
                <div className="buttons">
                    <button className="button" onClick={()=>this.handleChange(5)}>5</button>
                    <button className="button" onClick={()=>this.handleChange(15)}>15</button>
                    <button className="button" onClick={()=>this.handleChange(20)}>20</button>
                    <button className="button" onClick={()=>this.handleChange(25)}>25</button>
                    <button className="button" onClick={()=>this.handleChange(50)}>50</button>
                </div>

                
                <div className="footers">
                    <button className="footer"  onClick={this.increment}>Increment</button>
                    <button className="footer"  onClick={this.decrement}>Decrement</button>
                    <button className="footer"  onClick={this.reset}>Reset</button>
                </div>

            </>

        )
    }
}

export default Counter