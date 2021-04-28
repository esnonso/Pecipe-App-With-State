import React, { Component } from 'react';
import './recipeForm.css'

class Form extends Component {
    static defaultProps = {
        onClose() {}
    }
    constructor(props){
        super(props);
        this.state={ ingridients:[
            {
                title:"",
                instructions:"",
                ingridients:[],
                img:""
            }
        ]}
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]:e.targe.value})
    }

    handleClick(e){
        const ingridients = [...this.state.ingridients]
        this.setState({ingridients:ingridients})
    }
   
    render(){
        const { title, instructions, ingridients, image} = this.state;
        const onClose = this.props
        let inputs = this.state.ingridients.map((ing, index)=> (
            <div><input
             type="text" 
              key={`ingridients ${index}`}
              name={`ingridients ${index}`}
              //value={ing}
              size={45}
              autoComplete ="off"
              placeholder="ingridients"></input>
            </div>
        ))
        return(
            <form>
                <div class="field-wrap" style={{display:"flex" ,flexDirection:"row-reverse"}}>
            <button type="button"
                className="close-btn"
                onClick = {onClose}
                style={{backgroundColor:"gray"}}>X
            </button>
            </div>
            <div class="field-wrap">
                <label for="title">Title: </label>
                <input type="text"
                key= "title"
                name="title"
                value={title}
                size={45}
                autoComplete ="off"
                onChange={this.handleChange}
                 />
            </div>

            <div class="field-wrap">
                <label><h5>Instructions</h5>
                    <textarea rows="7"
                    key= "instructions"
                    name="instructions"
                    value={instructions}
                    size={45}
                    onChange={this.handleChange}
                    autoComplete ="off"
                    />
                </label>
            </div>

            <div class="field-wrap">
                <ol>
                    {inputs} 
                </ol>
            </div>

            <div className="btnDiv"><button className="add" onClick={this.handleClick}>+</button></div>

            <div class="field-wrap">
                <label for="img">ImageUrl: </label>
                <input name="image" 
                key= "image"
                value={image}
                size={45}
                autoComplete ="off"
                onChange={this.handleChange}/>
            </div>

            <div className="btnDiv"><button className="submit">SAVE</button></div>
            </form>
        )
    }
}

export default Form;