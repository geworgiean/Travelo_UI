import React from 'react'
import './Cards.css'
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-10.jpeg'
                    text='Explore the Banff national park in Canada'
                    label='Adventure'
                    path='/services'
                    />
                     <CardItem 
                    src='images/img-2.jpg'
                    text='Travel through yhe islands of Bali in a Private Curies'
                    label='Luxury'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                     <CardItem 
                    src='images/img-7.jpg'
                    text='Travel through yhe islands of Bali in a Private Curies'
                    label='Luxury'
                    path='/services'/>
                     <CardItem 
                    src='images/img-9.jpg'
                    text='Travel through yhe islands of Bali in a Private Curies'
                    label='Luxury'
                    path='/services'/>
                     <CardItem 
                    src='images/img-8.jpg'
                    text='Travel through yhe islands of Bali in a Private Curies'
                    label='Luxury'
                    path='/services'/>
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Cards