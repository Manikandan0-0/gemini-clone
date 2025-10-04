import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
function Sidebar() {
    const [extented, setextented] = useState(false)
    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={()=>setextented(prev=>!prev)} className='menu' src={assets.menu_icon} alt="menu" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extented ? <p>New Chat</p> : null}
                </div>
                {extented ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>What is react....</p>
                        </div>
                    </div> : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extented?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} lt="" />
                    {extented?<p>activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extented?<p>Settings</p>:null}
                </div>

            </div>

        </div>
    )
}

export default Sidebar
