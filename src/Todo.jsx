/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo } from './redux/todoSlicer'
import { useEffect } from 'react'

const Todo = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.todo)
  useEffect(() => {
    dispatch(fetchTodo())
  }, [])
  console.log(data);
  return (
    <div>
      {
        data.isLoading ? <h1>Loading...</h1> : 
        data.data.map(todo => {
          return (
            <div key={todo.id}>
              <h1>{todo.userId}</h1>
              <p>{todo.title}</p>
              <h3>{todo.completed}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default Todo
