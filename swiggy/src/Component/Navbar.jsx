import React from "react"
import './component.css'
const Navbar = () => {

    return (
        
            <div className="navbar">
                <div className="nav-left">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACjCAMAAADRsl6yAAAAaVBMVEX////zgCj4+PjzfiLzfBv0j1DydAD2pHPycgD++vf3rYL+9fDzehP96uD85dnydgD0iDv0lFb72cf1mWL97ub1mF373c30hTT4v5/5xKj0i0X3s4vybgD1nGj61cHzgi74uZX6yrD60Lkr9nFPAAAEf0lEQVR4nO2b23qiMBRGYRI5SAQVBUXEw/s/5CC2FTSA2fmJnW+yLtqbfrCa4947wfnz+3H+OL8d64jBOmKwjhisIwbriME6YrCOGKwjBuuIwTpisI4YrCMG64jBOmKwjhisIwbriME6YrCOGNCO4SJbV1W1zhYR7JlQx3h3XBW5yzlnebE6njPMY2GOUTYPAsFq3Bv1by68wM8AzQlyDC9bT7iviGC707bEOF6XnEsMb3Cx3Iefd4zTgPUYNt0eLONPO+5dWS932pKdP+oY+clQI341pVhpjEpdx80sGTW8IQp6f2s6blZj/fzT36fNZxwXp3cV6/52qS2p5Ri93YpNSxbEManjGM5VFOsxOTPvuPOUFF03OZh2XKgq1mOSFGVoOM7G18Vn+JKyLdId92qD8U6wN+kYFX1RREPCpWs7ywlzm+y4DwYMGYudWPo/iLNBx9PQaOR+Pe5y2V9wwsZNdawGt+l+RzdQn9pUR39wNDaOS6kjP5py3AwvPAOObmnKcT288Aw5qnc20XE/HDUOOQrlDZHo6NPbkaVmHMOe97/lOFNdfYiOI+HEoKNylkhzjEqyIxMz1aSB5rghOnIR5POF6ttojou3HO/lnwYuEi8oy9VhTci8JnQMd/Pj8Zimaf1zft5XMbWkMmFfwyDO63/BkY+sj6tf4DgbDHvqFcafdznsLpTpouHojGbW/AlxI/EzgznXRT1vvSEC39jaMxabDVgejeUKi0I9ub5Trk05OseRSdOLp55hUx3P1M5OdsYc4/fKt5J2vBpzdKiOBnPX8RVSDivUFx+yYzZUS+mHspNr1KRIq4/Reo+zo3U2oUpKd8xOBEOWE96kUcdNCZ2tXgDQc8xGAl0ZpXLCpefouMoNyQqz9fCxGqSM5EJ5j45jlCoGFmxJ6Wq9s7hKcfnhc9Jr9M40D2rhuEfLaPQcw7TkTIq0Gbe0t+iesV+3MxnSepRHPBye6C6XbDcX1MLAVPfNVpKGVM9k7phz5D71WTDHTXy7DJfFmz7H8kP3Ke5ElV/kp+aOGXNP+XwjcySer4Mc181duB8Z5qXRqyMlRwA67p8WcnYreD87CvWUFekYPmU2bPXajpx43QPl6BySUUdCxop1jLunwHz74qgxYUCOT+nXq6POhEE5hp0Ygr/M67LSejxmDa/a06YZj+3zbaF+rD6BY/ccVpzjXdt5qXkjF+QYd5JtsWyfOwhSEoN3dC6dRbI9GBNagtACFlP0XTPkufZRDcwx7sm2OTVqfICLHy/ShtTZp78BxripRJJ6LbMD0DF6PURkJ8TXH8hc4fpStmB6G8wX0Hzm+UaNpxVK/IDNubp3IgUx538G65iJ1pDketHOA3Du2rrjxWgXhCWg8+vHkCQcaPWAdoy+vwIBzZcb8DpFfF8lhXYk8QBfS2nuZAvli28DTFDvqfdETv7GQ8YUNalCQBUncYw9/XiszSS1PdDa/c3/+E3uFFhHDNYRg3XEYB0xWEcM1hGDdcRgHTFYRwzWEYN1xGAdMVhHDNYRQ+34+/kLmn41ACrgdZ4AAAAASUVORK5CYII=" alt="" />
                    <h4>Mulund West</h4>
                    <h5>Mumbai Mahrastra,India</h5>   
                </div>
                <div className="nav-right">
                        <div className="inpi">
                            <div className="input">
                                <input type="text" placeholder="Search" />
                            </div>
                            <div className="nav-3rd">
                            <div>
                                <h4>Offers </h4>
                            </div>
                            <div>
                                <sub><h5>NEW</h5></sub>
                            </div>
                            <div>
                                <h4>Help</h4>
                            </div>
                            <div>
                                <h4>SingIN</h4>
                            </div>
                            <div>
                                <h4>Cart</h4>
                            </div>
                        </div>
                    </div>
            </div>
                        </div>
                  
            )
}
            export default Navbar;