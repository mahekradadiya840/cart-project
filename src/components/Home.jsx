import React from 'react'
import List from "./List"
import Sidebar from './Sidebar'

const Home = () => {
    return (
        <div>
            <div className='row w-100'>
                <div className='col-lg-2 col-4'>
                    <Sidebar />
                </div>
                <div className='col-lg-10 col-8'>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Home