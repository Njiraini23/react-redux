import './App.css'
import AddNewBlog from './blog-app/add-new-blog';
import BlogList from './blog-app/blog-list';

function App() {
  

  return (
    <div>
      <h1>Blog List App</h1>
      <AddNewBlog />
      <BlogList />
      {/* <CounterButton />
      <CounterValue /> */}
    </div>
  );
}

export default App
