import React from 'react';
import './Toolbar.css';
import UnitList from "../unitList/UnitList"

export default class Toolbar extends React.Component {
    render() {
        return (
            <div className="maxed">
                <div id="info">
                    <h1>Info stuff</h1>
                </div>
                <UnitList/>
            </div>
        )
    }
    
}