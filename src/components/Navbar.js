import React, { useState } from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { Dropdown } from 'react-bootstrap'

export default function Navbar() {

    const [showFirstDropDown, setShowFirstDropDown] = useState(false)
    const [showSecondDropDown, setShowSecondDropDown] = useState(false)
    const [showThirdDropDown, setShowThirdDropDown] = useState(false)

    const toggleFirstDropDown = () => {
        setShowFirstDropDown(!showFirstDropDown)
        setShowSecondDropDown(false)
        setShowThirdDropDown(false)
    }

    const toggleSecondDropDown = () => {
        setShowSecondDropDown(!showSecondDropDown)
        setShowThirdDropDown(false)
    }

    return (
        <div className="navbar">
            <nav>
                <h2>Home page</h2>
                <Dropdown>
                    <div onClick={toggleFirstDropDown}>
                        <Dropdown.Toggle className="toggle">
                            <h2>Left dropdown {showFirstDropDown?<FaCaretUp/>:<FaCaretDown/>}</h2> 
                        </Dropdown.Toggle>
                    </div>
                    <Dropdown.Menu className="dropdownList">
                        <Dropdown.Item className="actionLink" href="#" onClick={toggleFirstDropDown}>Any page</Dropdown.Item>

                        <div className="actionLink" style={ {padding: '0px 0.6em'} }>
                            <Dropdown drop="right">
                                <div onClick={toggleSecondDropDown}>
                                    <Dropdown.Toggle className="toggle">
                                        <h2>Second level {showSecondDropDown?<FaCaretUp/>:<FaCaretDown/>}</h2> 
                                    </Dropdown.Toggle>
                                </div>

                                <Dropdown.Menu className="dropdownList">
                                    <Dropdown.Item className="actionLink1" eventKey="1">Another page</Dropdown.Item>
                                    <Dropdown.Item className="actionLink1" eventKey="2">Any page</Dropdown.Item>
                                    <div onClick={() => setShowThirdDropDown(!showThirdDropDown)} className="actionLink1" style={ {padding: '0px 0.6em'} }>
                                        <Dropdown drop="right">
                                            <Dropdown.Toggle className="toggle">
                                                <h2>Third level {showThirdDropDown?<FaCaretUp/>:<FaCaretDown/>}</h2> 
                                            </Dropdown.Toggle>
                                            
                                            <Dropdown.Menu className="dropdownList">
                                                <Dropdown.Item className="actionLink2">Any page</Dropdown.Item>
                                                <Dropdown.Item className="actionLink2">Any other page</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Dropdown.Item className="actionLink" href="#" onClick={toggleFirstDropDown}>Another page</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <h2>Mega menu <FaCaretDown /></h2>
                <h2>Any page</h2>
                <h2>Right dropdown <FaCaretDown /></h2>
            </nav>
        </div>
    )
}
