import React from 'react'
import { CgProfile } from 'react-icons/cg';

//import "./Pagination.css"

const Pagination = () => {
    return (
        <div className='container__pag'>
            <div className='image-container'>
                <h1><CgProfile />usuario 1</h1>
                <h1><CgProfile />usuario 2</h1>
                <h1><CgProfile />usuario 3</h1>
                <h1><CgProfile />usuario 4</h1>
                <h1 className='link'>https://www.youtube.com/watch?v=voXTVTW73E8</h1>
            </div>
        </div>

    )
}

export default Pagination

