import React from 'react'

const todoList = (props) => {
    return (
        <div>
            <div className="list">
                <li className='list-item'>
                    {props.item}
                </li>
                <button className='icon-delete'
                        onClick={e => {
                            props.deleteItem(props.index)
                        }}>Delete</button>
            </div>
        </div>
    )
}

export default todoList;


{/* <div>
      <li className='list-item'>
        {props.item}
        { <span className='icons'>
            <i className='fa-solid fa-trash-can icon-delete'
            onClick={e=>{
                props.deleteItem(props.index)
            }}></i>
        </span> }
      </li>
    </div> */}