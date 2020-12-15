import React from 'react'
import {FILTERS} from "../constants";

const Filters = ({currentFilter, changeFilter}) => {
    return (
        <div className='filters'>
            <h3>Filters:</h3>
            <button style={{background: currentFilter===FILTERS.ALL_TASKS?'gray':'inherit'}} onClick={() => changeFilter(FILTERS.ALL_TASKS)} className={'filterButton'}>all</button>
            <button style={{background: currentFilter===FILTERS.COMPLETED?'gray':'inherit'}} onClick={() => changeFilter(FILTERS.COMPLETED)} className={'filterButton'}>completed</button>
            <button style={{background: currentFilter===FILTERS.UNCOMPLETED?'gray':'inherit'}} onClick={() => changeFilter(FILTERS.UNCOMPLETED)} className={'filterButton'}>uncompleted</button>
        </div>
    )
}
export default Filters