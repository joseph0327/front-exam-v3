import React from 'react'
import Icon1 from '../../images/korea1.jpg'
import Icon2 from '../../images/korea2.jpg'
import Icon3 from '../../images/korea3.jpg'

const InfoSection = () => {
    return (
        <div className="container-info">

            <input type="radio" name="images" id="i1" defaultChecked></input>
            <input type="radio" name="images" id="i2"></input>
            <input type="radio" name="images" id="i3"></input>

            <div className="slide_img" id="one" >
                <img alt="" src={Icon1} />
                <label htmlFor="i3" className="pre"></label>
                <label htmlFor="i2" className="next"></label>
            </div>
            <div className="slide_img" id="two" >
                <img alt="" src={Icon2} />
                <label htmlFor="i1" className="pre"></label>
                <label htmlFor="i3" className="next"></label>
            </div>
            <div className="slide_img" id="three">
                <img alt="" src={Icon3} />
                <label htmlFor="i2" className="pre"></label>
                <label htmlFor="i1" className="next"></label>
            </div>

            <div className="nav">
                <label className="dots"  id="dot1" htmlFor="i1"></label>
                <label className="dots"  id="dot2" htmlFor="i2"></label>
                <label className="dots"  id="dot3" htmlFor="i3"></label>
            </div>    

        </div>
    )
}

export default InfoSection
