import React from 'react'
import './Cards.css'
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
        <h1>The sights of Armenia.</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-10.jpg'
                    text='Temple of Garni.The structure was built by king Tiridates I.(built in 77 AD)'
                    label='Pagan'
                    path='/services'
                    />
                     <CardItem 
                    src='images/img-2.jpg'
                    text='Tatev is an Armenian apostolic monastery of the 9th century.It is located in Tatev village of Syunik.'
                    label='Apostolic'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                     <CardItem 
                    src='images/img-7.jpg'
                    text='Akhtala Monastery.It is located in the Lori Marz of Armenia, built in the 10th century.'
                    label='Church'
                    path='/services'/>
                     <CardItem 
                    src='images/img-9.jpg'
                    text='Zvartnots.Built by the order of Catholicos Nerses the Builder from 643-652.'
                    label='Temple'
                    path='/services'/>
                     <CardItem 
                    src='images/img-8.jpg'
                    text='Sev Berd or Black Fortress.Is located in the city of Gyumri, Shirak marz.(Built in 1834)'
                    label='Fortress'
                    path='/services'/>
                </ul>
                
                
            </div>
        </div>
    </div>
  )
}

export default Cards