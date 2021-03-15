import React from 'react'
import './Package.css'
function Package({name, quallity}) {
    return (
        <div className="packages">
            <p><span>Netflix {name}</span><br /><span>{quallity}</span></p>
            <button>Subscribe</button>
        </div>
    
    )
}

export default Package
