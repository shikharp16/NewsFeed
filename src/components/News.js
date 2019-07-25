import Post from './Post.js'
import MyNav from './MyNav.js'
import React, { Component } from 'react'


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsItems: [],
            url: null
        };
    }
    display() {
        var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=in&' +
            'apiKey=2a1970fbbc9046a59d78eb34597eb773';
        var req = new Request(url);
        fetch(req)
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        newsItems: data.articles,
                    }
                )
                // console.log(this.state.newsItems)
                // this.state.newsItems.forEach(item => {
                //     console.log("Author " + item.author)
                //     console.log("Content " + item.content)
                //     console.log("Description " + item.description)
                //     console.log("Title " + item.title)
                // });
            })
    }

    displaySearch(searchvalue) {
    
        var url = 'https://newsapi.org/v2/top-headlines?q=' + searchvalue + '&apiKey=2a1970fbbc9046a59d78eb34597eb773'
        var req = new Request(url);
        fetch(req)
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        newsItems: data.articles,
                    }
                )
                // console.log(this.state.newsItems)
                // this.state.newsItems.forEach(item => {
                //     console.log("Author " + item.author)
                //     console.log("Content " + item.content)
                //     console.log("Description " + item.description)
                //     console.log("Title " + item.title)
                // }); 
            })
    }
    displayCat(cat){
        var url = 'https://newsapi.org/v2/top-headlines?country=in&category=' + cat + '&apiKey=2a1970fbbc9046a59d78eb34597eb773'
        var req = new Request(url);
        fetch(req)
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        newsItems: data.articles,
                    }
                )
                // console.log(this.state.newsItems)
                // this.state.newsItems.forEach(item => {
                //     console.log("Author " + item.author)
                //     console.log("Content " + item.content)
                //     console.log("Description " + item.description)
                //     console.log("Title " + item.title)
                // }); 
            })
    }
    searchValueHandler = (search_val) =>{
        console.log(search_val)
        this.displaySearch(search_val)
    }
    catHandler = (cat) =>{
        this.displayCat(cat)
    }
    componentDidMount() {
        console.log("did mount")
        this.display();
    }

    render() {
        const post = this.state.newsItems.map((elem, index) => <Post author={elem.author}
            description={elem.description} img={elem.urlToImage} title={elem.title} url={elem.url}></Post>)
        
        return <div>
            <MyNav submitHandler = {this.searchValueHandler} catHandler = {this.catHandler}></MyNav>
            {post}
        </div>;
    }
}
export default News