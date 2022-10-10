import React from 'react'
import { CgProfile } from 'react-icons/cg';

import "./Pagination.css"

const Pagination = () => {
    return (
        <div>
            <div className="body">
                <div className='image-container'>
                    <h1><CgProfile /></h1>
                    <h1><CgProfile /></h1>
                </div>
                <div className='image-container'>
                    <h1><CgProfile /></h1>
                    <h1><CgProfile /></h1>
                </div>
            </div>
            <div>
                <h1 className='link'>https://www.youtube.com/watch?v=voXTVTW73E8</h1>
            </div>
        </div>

    )
}

export default Pagination

