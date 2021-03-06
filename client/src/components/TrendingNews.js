import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {  Container } from 'react-bootstrap';
import CardPage from '../Page/Cardpage'

function TrendingNews(){
    const options = {
        method: 'GET',
        url: 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=FG4ikXBDwp0kgd1YsnyH0B2VmrDDZuD9',
      };
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.request(options)
            .then(function (response) {
                setPosts(response.data.results)
            })
            .catch(function (error) {
                console.error(error);
            });
        })
        return (
            <Container>
                {posts.map(post=>(
                    <CardPage title={post.title} abstract={post.abstract} url={post.url} image={post.multimedia[0].url} author={post.byline}/>
                ))}
            </Container>
        )

}

export default TrendingNews;