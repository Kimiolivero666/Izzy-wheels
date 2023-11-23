/* eslint-disable react-refresh/only-export-components */

import disney1 from '../assets/products/disney1.webp'
import disney2 from '../assets/products/diesney2.webp'
import disney3 from '../assets/products/disney3.webp'
import disney4 from '../assets/products/disney4.webp'
import disney5 from '../assets/products/disney5.webp'
import disney6 from '../assets/products/disney6.webp'
import disney7 from '../assets/products/disney7.webp'
import disney8 from '../assets/products/disney8.webp'
import disney9 from '../assets/products/disney9.webp'
import marvel1 from '../assets/products/marvel1.webp'
import marvel2 from '../assets/products/marvel2.webp'
import marvel3 from '../assets/products/marvel3.webp'
import marvel4 from '../assets/products/marvel4.webp'
import marvel5 from '../assets/products/marvel5.webp'
import marvel6 from '../assets/products/marvel6.webp'
import marvel7 from '../assets/products/marvel7.webp'
import marvel8 from '../assets/products/marvel8.webp'
import marvel9 from '../assets/products/marvel9.webp'
import star1 from '../assets/products/star1.webp'
import star2 from '../assets/products/star2.webp'
import star3 from '../assets/products/star3.webp'
import star4 from '../assets/products/star4.webp'
import star5 from '../assets/products/star5.webp'
import star6 from '../assets/products/star6.webp'
import star7 from '../assets/products/star7.webp'
import star8 from '../assets/products/star8.webp'
import star9 from '../assets/products/star9.webp'








const Products = [
    {
        id: '1',
        title: ' Alicie in Wonderland Floral',
        price: 149.00,
        img: disney1,
        stock:9,
    },
    {
        id: '2',
        title: ' Ariel',
        price: 149.00,
        img: disney2,
        stock:11,
    },
    {
        id: '3',
        title: 'Villains',
        price: 149.00,
        img: disney3,
        stock:1,
    },
    {
        id: '4',
        title: 'Wish',
        price: 149.00,
        img: disney4,
        stock: 12,
    },
    {
        id: '5',
        title: 'Be My Valentine',
        price: 149.00,
        img: disney5,
        stock:9,
    },
    {
        id: '6',
        title: 'Tigger',
        price: 149.00,
        img: disney6,
        stock:8,
    },
    {
        id: '7',
        title: 'Minnie Pink',
        price: 149.00,
        img: disney7,
        stock: 11,
    },
    {
        id: '8',
        title: 'Disney 100 - Platinum Princesses',
        price: 149.00,
        img: disney8,
        stock:7,
    },
    {
        id: '9',
        title: 'Finding Nemo',
        price: 149.00,
        img: disney9,
        stock:7,
    },
    {
        id: '10',
        title: 'Spider-Man',
        price: 149.00,
        img: marvel1,
        stock: 5,
    },
    {
        id: '11',
        title: 'Black Panther',
        price: 149.00,
        img: marvel2,
        stock: 8,
    },
    {
        id: '12',
        title: 'Marvel Comic',
        price: 149.00,
        img: marvel3,
        stock:14,
    },
    {
        id: '13',
        title: 'Spider-Man Web',
        price: 149.00,
        img: marvel4,
        stock:6,
    },
    {
        id: '14',
        title: 'Avengers',
        price: 149.00,
        img: marvel5,
        stock:3,
    },
    {
        id: '15',
        title: 'Shield',
        price: 149.00,
        img: marvel6,
        stock:7,
    },
    {
        id: '16',
        title: 'Avengers Retro',
        price: 149.00,
        img: marvel7,
        stock:10,
    },
    {
        id: '17',
        title: 'Black Panther',
        price: 149.00,
        img: marvel8,
        stock:4,
    },
    {
        id: '18',
        title: 'Spider-Man Print',
        price: 149.00,
        img: marvel9,
        stock:3,
    },
    {
        id: '19',
        title: 'Grogu Floral',
        price: 149.00,
        img: star1,
        stock:5,
    },
    {
        id: '20',
        title: 'Grogu Craddle',
        price: 149.00,
        img: star2,
        stock:8,
    },
    {
        id: '21',
        title: 'Star Wars Ships',
        price: 149.00,
        img: star3,
        stock:15,
    },
    {
        id: '22',
        title: 'Grogu Space',
        price: 149.00,
        img: star4,
        stock:12,
    },
    {
        id: '23',
        title: 'Star Wars Hyperspace',
        price: 149.00,
        img: star5,
        stock:9,
    },
    {
        id: '24',
        title: 'Star Wars Comic',
        price: 149.00,
        img: star6,
        stock:16,
    },
    {
        id: '25',
        title: 'Darth Vader',
        price: 149.00,
        img: star7,
        stock:4,
    },
    {
        id: '26',
        title: 'Star Wars 70s',
        price: 149.00,
        img: star8,
        stock: 6,
    },
    {
        id: '27',
        title: 'Star Wars Stripes',
        price: 149.00,
        img: star9,
        stock:3,
    },

]

export const getProduct = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(Products)
        }, 500)
       
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve)=>{
        setTimeout(() =>{
            resolve( Products.find(prod => prod.id === productId))
        },500)
    })
}