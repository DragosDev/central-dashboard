import React from 'react';
import './topbar.css';
import {NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">

            <div className="topLeft">
                <span className="logo">central-dashboard</span>
            </div>

            <div className="topRight">

                <div className="topbarIconContainer">
                  <NotificationsNone/>
                <span className="topIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                  <Language/>
                </div>

                <div className="topbarIconContainer">
                  <Settings/>
                </div>
                <img src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387" alt="" className="topProfile" />
            </div>

        </div>
    </div>
  );
}
