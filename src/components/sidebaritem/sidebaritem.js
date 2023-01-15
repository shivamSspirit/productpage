import React from 'react'
import './sidebaritem.css'
import { useProduct } from '../../productContext';
import Mastercheckinput from '../mastercheck/mastercheckinput';

function SidebarItem({dropname,toggle,setToggle,firstcheckboxvalue,secondcheckboxvalue,thirdcheckboxvalue,currentchecktype,setCurrentchecktype,actiontype}) {
    const { dispatchFilter, setIfFilterisclear } = useProduct();
    

    const onChecksClick = (e) => {
        if (currentchecktype?.find(checktype => checktype === e.target.value)) {
            dispatchFilter({
                type: actiontype,
                payload: e.target
            });
            setIfFilterisclear(false)
            const updatecurrenttype = currentchecktype?.filter(checktype => checktype !== e.target.value);
            setCurrentchecktype(updatecurrenttype)
        } else {
            dispatchFilter({
                type: actiontype,
                payload: e.target
            })
            setIfFilterisclear(false)
            setCurrentchecktype([...currentchecktype, e.target.value])
        }
    }

    return (
        <div>
            <div className={`${toggle ? 'sidebar-item open' : 'sidebar-item'}`}>
                <div className='sidebar-title'>
                    <span className='drops-name'>
                        {dropname}
                    </span>
                    <img onClick={() => setToggle(!toggle)} className='arrow-down' alt='arrow-down' src='/icons/gr-arrow-down.png' />
                </div>
                <div className='sidebar-content'>
                    <Mastercheckinput onCheckClick={onChecksClick} checkvalue={firstcheckboxvalue} checkid={'check0'} checkedvalue={currentchecktype} />
                    <Mastercheckinput onCheckClick={onChecksClick} checkvalue={secondcheckboxvalue} checkid={'check1'} checkedvalue={currentchecktype} />
                    <Mastercheckinput onCheckClick={onChecksClick} checkvalue={thirdcheckboxvalue} checkid={'check2'} checkedvalue={currentchecktype} />
                </div>
            </div>
        </div>
    )
}

export default SidebarItem
