import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";

const TodoItem = ({ todo }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm text-center">
      <h3>{todo.title}</h3>
      <p>User ID: {todo.userId}</p>
      <p>ID: {todo.id}</p>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const responseJson = await response.json();
    setData(responseJson);
    console.log(responseJson);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100">
      <h1 className="text-center text-3xl font-bold py-5">Todo List</h1>
      {loading ? (
        <p className="text-center text-3xl font-bold py-5">Načítání...</p>
      ) : (
        <div className="grid gap-6 grid-cols-3">
          {data ? (
            data.map((todo) => (
              <TodoItem todo={todo} />
            ))
          ) : (
            <p className="text-center text-3xl font-bold py-5">Data nenalezena</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
