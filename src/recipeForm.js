import React, { Component } from 'react';
import './recipeForm.css'

class Form extends Component {
    static defaultProps = {
        onClose() {},
        onSave() {}
    }
    constructor(props){
        super(props);
        this.state={
                title:"",
                instructions:"",
                ingridients:[''],
                image:""
            }
        this.handleChange = this.handleChange.bind(this);
        this.handleNewIngridient = this.handleNewIngridient.bind(this);
        this.handleChangeIng = this.handleChangeIng.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }

    handleNewIngridient(e){
        const {ingridients} = this.state
        this.setState({ingridients:[...ingridients, ""]})
    }

    handleChangeIng(e){
        const index = Number(e.target.name.split('-')[1]) // THIS GETS THE INDEX OF THE ARRAY WE ARE ON
        /**Number()=> Tells React we want a number not string
         * split('-') => spilt the string at the dash and getting the second element in the array which is 
         * the index
         */
        const ingridients = this.state.ingridients.map((ing, i) => (
            i===index ? e.target.value : ing //if i is equal to index return the value of that index else return the ing.
            ))
            this.setState({ingridients})
    }
    handleSubmit(e) {
        e.preventDefault();
        const title = this.state.title
        console.log(title)
        this.props.onSave({...this.state});

        this.setState ({
            title:'',
            instructions:'',
            ingridients:[''],
            image:''
        })    
    }
   
    render(){
        const { title, instructions, ingridients, image} = this.state;
        const {onClose} = this.props
        let inputs = ingridients.map((ing, index)=> (
            <div className="field-wrap" key={`ingrideints-${index}`}>
            <label>{index + 1}</label>
            <input
             type="text" 
              name={`ingridients-${index}`}
              value={ing}
              size={30}
              autoComplete ="off"
              placeholder="ingridients"
              onChange ={this.handleChangeIng}></input>
              
            </div>
        ))
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="field-wrap" style={{display:"flex" ,flexDirection:"row-reverse"}}>
            <button type="button"
                className="close-btn"
                onClick = {onClose}
                style={{backgroundColor:"gray"}}>X
            </button>
            </div>
            <div className="field-wrap">
                <label >Title: </label>
                <input type="text"
                key= "title"
                name="title"
                value={title}
                size={30}
                autoComplete ="off"
                onChange={this.handleChange}
                 />
            </div>

            <div className="field-wrap">
                <label><h5>Instructions</h5>
                    <textarea rows="7"
                    key= "instructions"
                    name="instructions"
                    value={instructions}
                    size={30}
                    onChange={this.handleChange}
                    autoComplete ="off"
                    />
                </label>
            </div>
                    {inputs} 

            <div className="btnDiv"><button type="button" className="add" onClick={this.handleNewIngridient}>+</button></div>

            <div className="field-wrap">
                <label >ImageUrl: </label>
                <input name="image" 
                key= "image"
                value={image}
                size={30}
                autoComplete ="off"
                onChange={this.handleChange}/>
            </div>

            <div className="btnDiv" type="submit"><button className="submit">SAVE</button></div>
            </form>
            
        )
    }
}

export default Form;