import React from 'react';
import { Search } from './Search';
import { Filter } from './Filter';
import './Nav.css'

export function Nav() {
    return (
        <div className="nav-bar">
            <div className="nav-bar-title">
                <p>Warehouse</p>
            </div>
            <Search />
            <Filter/>
        </div>
    )
}
