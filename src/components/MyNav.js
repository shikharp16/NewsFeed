import React, { Component } from 'react'


class MyNav extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.textInput.current.value);
        this.props.submitHandler(this.textInput.current.value);
    }
    handleKeyPress = (e) => {
        // console.log(this.textInput.current.value);
        if(e.charCode === 13){
            e.preventDefault();
            // console.log(this.textInput.current.value);
            this.props.submitHandler(this.textInput.current.value);
        } 
    }
    catHandler = (e) => {
        e.preventDefault();
        console.log(e.target.innerText);
        this.props.catHandler(e.target.innerText);
    }

    render() {
        return <div className="mynav">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Wynk Times</a>
                    </div>
                    <ul className="nav navbar-nav">
                        
                        <li><a onClick={(e) => this.catHandler(e)}>science</a></li>
                        <li><a onClick={(e) => this.catHandler(e)}>health</a></li>
                        <li><a onClick={(e) => this.catHandler(e)}>business</a></li>
                        <li><a onClick={(e) => this.catHandler(e)}>entertainment</a></li>
                        <li><a onClick={(e) => this.catHandler(e)}>sports</a></li>
                        <li><a onClick={(e) => this.catHandler(e)}>technology</a></li>
                        <li><a onClick={(e) => this.catHandler(e)}>general</a></li>
                    </ul>
                    <form class="navbar-form navbar-left" action="/action_page.php">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search" 
                            ref={this.textInput} type="text" onKeyPress={(e) => this.handleKeyPress(e)}/>
                        </div>
                        <button type="submit" class="btn btn-default"  onClick={(e) => this.submitHandler(e)}>Submit</button>
                    </form>

                </div>
            </nav>
        </div>
    }

}
export default MyNav