import React from 'react'
import './mastercheckinput.css'

function Mastercheckinput({onCheckClick,checkvalue,checkid,checkedvalue}) {
    return (
        <>
            <div className="form-group">
                <input onClick={(e) => onCheckClick(e)}
                    checked={checkedvalue?.find(gender => gender === checkvalue)} value={checkvalue} type="checkbox" className="form-input" id={checkid} />
                <span className="check-style"></span>
                <label className="form-label" htmlFor={checkid}>{checkvalue}</label>
            </div>
        </>
    )
}

export default Mastercheckinput
