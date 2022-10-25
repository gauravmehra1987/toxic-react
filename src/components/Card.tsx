import React from 'react'
import { Container, Rating } from '@mui/material';
import { images } from "../utils/images";
import '../styles/card.css'
import Price from './Price';
import ImageSlider from './ImageSlider';
const CardSlider = () => {
    return (
        <div className="cardHolder">
            {images.map(({ img, title, author }) => {
                return <Card img={img} title={title} author={author}></Card>
            })}
        </div>
    );
}
const Card = ({ img, title, author }) => {
    return (
        <Container className="card" maxWidth="lg">
            <p className="productTitle">{title}</p>
            <hr></hr>
            {/*<img className="productImage" src={img} width={"100%"} />*/}
            <ImageSlider></ImageSlider>
            <div className='priceContainer'><Price></Price>  <Rating name="read-only" value={2.5} readOnly /></div>

            <p>{author}</p>

        </Container>
    )
}
export default CardSlider;