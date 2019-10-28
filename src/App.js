import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { fetchPostsWithRedux } from "./reducers";


class App extends React.Component {

  componentDidMount(){
    this.props.fetchPostsWithRedux()
  }

  render(){
    return (
        <ul className="fetching-list">
          {
            this.props.posts &&
            this.props.posts.map((post) =>{
              return(
                  <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                  </li>
              )
            })
          }
        </ul>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});



export default connect(mapStateToProps, {fetchPostsWithRedux})(App);

