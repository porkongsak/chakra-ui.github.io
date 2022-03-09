import React from 'react'
import Main from './Main'


const property = [
    {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 1,
  },
  {
    imageUrl: 'https://cdn3.residences.in.th/uploads/image/attachment/154096/5df53b019ac321a179fe.jpeg',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 5,
  },
]
const Mains = () => {
  return (
    <div>
        <h1>Project</h1>
      {property.map(propertys  => <Main propertys={propertys} />)}
    </div>
  )
}

export default Mains;