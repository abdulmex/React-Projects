import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
export default function App() {
  return (
    <div>
      <Header />
      <Form />
      <ItemList />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1 className="header">Todo List</h1>
    </div>
  );
}

function Form() {
  return (
    <div className="container">
      <div className="row mx-aut text-center">
        <div className="col-lg-8 col-md-8 col-sm-6">
          <label>New Item</label>
          <input
            type="text"
            name="text"
            className="input"
            placeholder="Write a message"
          />
        </div>
        <div className="col-lg-2 col-md-4 col-sm- mt-3 mt-md-0">
          <button className="btns mt-md-4 mt-lg-0">Add</button>
        </div>
      </div>
    </div>
  );
}

function ItemList() {
  return (
    <div>
      <h1>First Item</h1>
    </div>
  );
}
