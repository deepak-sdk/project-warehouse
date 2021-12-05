import React from 'react';
import { useHistory } from 'react-router';
import './Nav.css'

export function Nav() {
    const history = useHistory();
    return (
        <div className="nav-bar" onClick={() => history.push("/")}>
            <div className="nav-bar-title" >
                <p>Warehouse</p>
            </div>

        </div>
    )
}
