import React from 'react';
import { Button } from 'react-bootstrap';
import './CardPage.css';
import { FaSave } from "react-icons/fa";

function CardPage (props) {

    return(
        <div class="container-fluid">
                <div class="row">
                <div class="col-12 mt-4">
                    <div class="card" >
                        <div  class="card-header">
                            <h5 type="title" >{props.title}</h5>
                        </div>
                        <div class="card-horizontal">
                            <div class="img-square-wrapper">
                                <img type="image"  class="" src={props.image} responsive style={{ width: 200}} resizeMode="contain" alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                < FaSave style={{
                                    position: 'absolute',
                                    right: 5,
                                    top: 5,
                                }} />
                                <h6 type="author"  class="card-title">{props.author}</h6>
                                <p type="abstract"  class="card-text">{props.abstract}</p>
                            </div>
                        </div>
                        <Button type="url" variant="info" href={props.url}>View</Button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CardPage;