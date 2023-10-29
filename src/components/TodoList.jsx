import { useState } from 'react';
import { active, addTodoList, all, checkboxTodoList, completed, deleteTodoList, editTodoList } from '../redux/actions/todoAction';
import { useDispatch, useSelector } from 'react-redux';
import '../css/TodoList.css';

function TodoList() {
  const [newTodoList, setNewTodoList] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);

  const handleAdd = (e) => {
    e.preventDefault();
    if (newTodoList.trim() !== '') {
      dispatch(
        addTodoList({
          id: Math.floor(Math.random() * 100),
          title: newTodoList,
          isDone: false,
        })
      );
    }
  };

  const handleInput = (e) => {
    setNewTodoList(e.target.value);
  };

  const handleAll = () => {
    dispatch(all());
  };

  const handleActive = () => {
    dispatch(active());
  };

  const handleCompleted = () => {
    dispatch(completed());
  };

  const handleCheckbox = (id) => {
    dispatch(checkboxTodoList(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodoList(id));
  };

  const handleInputEdit = (e) => {
    setEditTitle(e.target.value);
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditTitle(item.title);
  };

  const updateTodoList = () => {
    if (editTitle.trim() !== '') {
      dispatch(
        editTodoList({
          id: editId,
          title: editTitle,
        })
      );
      setEditId(null);
      setEditTitle('');
    }
  };

  return (
    <>
      <h1 id="title">What's the plan for today</h1>
      <form id="form" onChange={handleInput} value={newTodoList}>
        <input type="text" placeholder="What to do" />
        <button onClick={handleAdd}>
          <b>Add</b>
        </button>
      </form>
      <div id="filter">
        <button className="active" onClick={handleAll} style={filter === 'ALL' ? { backgroundColor: '#00ABB3' } : { backgroundColor: '#9DB2BF' }}>
          All
        </button>
        <button className="active" onClick={handleActive} style={filter === 'ACTIVE' ? { backgroundColor: '#00ABB3' } : { backgroundColor: '#9DB2BF' }}>
          Active
        </button>
        <button className="active" onClick={handleCompleted} style={filter === 'COMPLETED' ? { backgroundColor: '#00ABB3' } : { backgroundColor: '#9DB2BF' }}>
          Completed
        </button>
      </div>

      {todos
        .filter((item) => {
          if (filter === 'ACTIVE') {
            return !item.isDone;
          } else if (filter == 'COMPLETED') {
            return item.isDone;
          } else {
            return true;
          }
        })
        .map((item) => (
          <div key={item.id}>
            <div id="todolist">
              <input id="check" onChange={() => handleCheckbox(item.id)} checked={item.isDone} type="checkbox" />
              {editId === item.id ? (
                <div id="edit">
                  <input type="text" value={editTitle} onChange={handleInputEdit} />
                  <button className="buttonlist" onClick={updateTodoList}>
                    Update
                  </button>
                </div>
              ) : (
                <div id="listTodo">
                  <span>{item.title} </span>
                  <div>
                    <button className="buttonlist" onClick={() => handleEdit(item)}>
                      edit
                    </button>
                    <button className="buttonlist" onClick={() => handleDelete(item.id)}>
                      delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
    </>
  );
}

export default TodoList;
