import React from 'react'
import { Container } from '@mui/material';
import { images } from "../utils/images";
import '../styles/card.css'
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
            <p>{title}</p>
            <img src={img} width={"100%"} />
            <h4>{author}</h4>
        </Container>
    )
}
export default CardSlider;