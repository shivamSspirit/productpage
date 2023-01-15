import React from 'react'
import './cards.css'
import Card from '../card/card'
import { useProduct } from '../../productContext'
import { sortBygender, sortBysize, sortByBrand,sortedByPrice } from '../../utils/helper'

function Cards() {
    const { products, filterState, dispatchFilter,cactiveprice,setCactiveprice,setIfFilterisclear,iffilterisclear} = useProduct();

    const lowtohigh=()=>{
        dispatchFilter({
            type: "LOW_TO_HIGH",
            payload: 'LOW_TO_HIGH'
        })
        setCactiveprice('lowtohigh')
        setIfFilterisclear(false);
    }

    const hightolow=()=>{
        dispatchFilter({
            type: "HIGH_TO_LOW",
            payload: 'HIGH_TO_LOW'
        })
        setCactiveprice('hightolow')
        setIfFilterisclear(false);
    }

    const SortedByPrice =sortedByPrice(products, filterState?.sortBylth);
    const SortBygender = sortBygender(SortedByPrice, filterState?.filterbygender);
    const SortBySize = sortBysize(SortBygender, filterState?.filterbysize);
    const SortByBrand = sortByBrand(SortBySize, filterState?.filterbybrand)

    return (
        <div className='cards-container'>
            <div className='sortby-container'>
                <div className='sortby-content'>
                    <span className='product-type'>
                        <span className='p-type-title'>Jackets and Shoes</span>
                        <span className='p-description'>(Showing 6 products out of 6 products)</span>
                    </span>
                    <span className='sort-by-price'>
                        <span className='s-title'>Sort by</span>
                        <span onClick={()=>lowtohigh()} className={`p-bar ${cactiveprice==='lowtohigh'&&'active'}`}>Price -- Low to High</span>
                        <span onClick={()=>hightolow()} className={`p-bar ${cactiveprice==='hightolow'&&'active'}`}>Price -- High to Low</span>
                    </span>
                </div>
            </div>
            <div className='cards-content'>
                {(iffilterisclear?products:SortByBrand)?.map((product, id) => (
                    <Card key={id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Cards
