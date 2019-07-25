import React,{Component} from 'react'
import '../css/Post.css'

class  Post extends Component {
    render() { 
        
        return <div className="feed">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="post">
            <h2>{this.props.author}</h2>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <img src={this.props.img} alt="Unable to load" className="responsive" id="imageLayout"></img>
            <br/>
            <a href={this.props.url}>Click here to view full post</a>
            </div>
            </div>
    }
}
export default Post