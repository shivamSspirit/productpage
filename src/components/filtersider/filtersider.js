import React, { useEffect, useState } from 'react'
import SidebarItem from '../sidebaritem/sidebaritem'
import './filtersider.css'
import { useProduct } from '../../productContext'

function FilterSider() {
    const { currentGender, setCurrentGender, currentSize, setCurrentSize, currentBrand, setCurrentBrand, iffilterisclear, setIfFilterisclear, setCactiveprice } = useProduct();

    const [brandtoggle, setBrandToggle] = useState(false);
    const [gendertoggle, setGenderToggle] = useState(false);
    const [sizetoggle, setSizeToggle] = useState(false);

    const clearAllFilter = () => {
        setCactiveprice('')
        setIfFilterisclear(true);
    }

    useEffect(() => {
        setIfFilterisclear(true)
    }, [])

    return (
        <div>
            <div className='filter-side-container'>
                <div className='filter-content'>
                    <span className='clear-content'>
                        <h3 className='filter-txt'>Filters</h3>
                        {!iffilterisclear && <p onClick={() => clearAllFilter()} className='clear-filter'>Clear All</p>}
                    </span>
                </div>

                <div className='category-content'>
                    <span className='category-block'>
                        <p className='cate-title'>
                            categories
                        </p>
                        <span className='cate-ass'>
                            <img className='arrow-left' src='/icons/bl-arrow-left.png' alt='arrow-left' />
                            Clothing and Accessories
                        </span>
                    </span>
                </div>

                <div className='gender-content'>
                    <SidebarItem
                        dropname={'Gender'}
                        toggle={brandtoggle}
                        setToggle={setBrandToggle}
                        currentchecktype={currentGender}
                        setCurrentchecktype={setCurrentGender}
                        firstcheckboxvalue={'male'}
                        secondcheckboxvalue={'female'}
                        thirdcheckboxvalue={'children'}
                        actiontype={"GENDER"}
                    />
                </div>

                <div className='f-assured-content'>
                    <span className='f-assured-block'>
                        <input className='f-assured-checkbox' type={'checkbox'} />
                        <img className='f-assured-img' alt='f-assured-image' src='/f-assured.png' />
                        <span className='question-mark'>?</span>
                    </span>
                </div>

                <div className='price-content'>
                    <div className='prices'>
                        <span className='price-block'>
                            <p className='price-title'>price</p>
                            <p className='clear-title'>clear</p>
                        </span>

                    </div>

                    <div className='price-input'>
                        <div className='prices-blocks'>
                            <div className='p-block'></div>
                            <div className='p-block'></div>
                            <div className='p-block'></div>
                            <div className='p-block'></div>
                            <div className='p-block'></div>
                            <div className='p-block'></div>
                            <div className='p-block'></div>
                        </div>
                        <input className='price-range-input' type={'range'} />

                        <div className='p-dot-block'>
                            <div className='p-dot'>.</div>
                            <div className='p-dot'>.</div>
                            <div className='p-dot'>.</div>
                            <div className='p-dot'>.</div>
                            <div className='p-dot'>.</div>
                            <div className='p-dot'>.</div>
                            <div className='p-dot'>.</div>
                        </div>

                        <div className='p-range-block'>
                            <span className='min-options'>
                                <div className='selects'>
                                    <select id="standard-select" name='Min'>
                                        <option>Min</option>
                                        <option>250</option>
                                        <option>500</option>
                                    </select>
                                </div>
                            </span>


                            <span>to</span>

                            <span className='max-option'>
                                <div className='selects'>
                                    <select id="standard-select" name='Max'>
                                        <option>250</option>
                                        <option>500</option>
                                        <option>1000</option>
                                        <option>1500</option>
                                        <option>3000</option>
                                    </select>
                                </div>
                            </span>
                        </div>
                    </div>

                </div>

                <div className='brand-content'>
                    <SidebarItem
                        dropname={'Brand'}
                        toggle={gendertoggle}
                        setToggle={setGenderToggle}
                        currentchecktype={currentBrand}
                        setCurrentchecktype={setCurrentBrand}
                        firstcheckboxvalue={'Adidas'}
                        secondcheckboxvalue={'gucci'}
                        thirdcheckboxvalue={'Arrow'}
                        actiontype={"BRAND"}
                    />
                </div>

                <div className='size-content'>
                    <SidebarItem
                        dropname={'Size'}
                        toggle={sizetoggle}
                        setToggle={setSizeToggle}
                        currentchecktype={currentSize}
                        setCurrentchecktype={setCurrentSize}
                        firstcheckboxvalue={'S'}
                        secondcheckboxvalue={'M'}
                        thirdcheckboxvalue={'L'}
                        actiontype={"SIZE"}
                    />
                </div>

                <div className='discount-content'>
                    <SidebarItem dropname={'Discount'} />
                </div>

                <div className='rating-content'>
                    <SidebarItem dropname={'CUSTOMER RATINGS'} />
                </div>

                <div className='offer-content'>
                    <SidebarItem dropname={'OFFERS'} />
                </div>

                <div className='availability-content'>
                    <SidebarItem dropname={'AVAILABILITY'} />
                </div>
            </div>
        </div>
    )
}

export default FilterSider
