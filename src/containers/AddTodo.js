import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../style/styles.css'

let AddTodo = ({ dispatch }) => {
    let input
    
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                <input className = "input" ref={node => {
                    input = node
                }} />
                <button type="submit" className = "button">
                    Add
                </button>
            </form>
        </div>
    )
}
AddTodo = connect()(AddTodo)


export default AddTodo
