import React from 'react'
import { IProduct } from '../../types/IProducts'

interface Props {
    region: string;
    setProductData:React.Dispatch<React.SetStateAction<IProduct[]>>
    productData: IProduct[]
  }
  

const renderHero =(productData: Props) => {
    if(productData.region === 'Italy'){
        return (
            <div id="hero-image">
                <div id="hero-text">
                    <h1>Italian Olive Oil</h1>
                    <p>Olive oil: Italys faily tradition</p>
                </div>
            </div>
        )
    }
}
function ShoppingHero(productData: Props) {
    console.log(productData, "hero")

  return (
    <div>
    </div>
  )
}

export default ShoppingHero