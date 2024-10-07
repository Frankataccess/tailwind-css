import BlogPreview from "./components/BlogPreview";
import NavBar from "./components/navbar";

const  App= () => {
  
  //Logic

  const title = "Hello"

  return ( 
    <div className="bg-slate-500">
      <NavBar />
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, magni!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quos.</p>
      <div className="content">
        <a href="https://vitejs.dev/guide/" target="_blank">Learn React</a>
        <BlogPreview/>
        <BlogPreview/>
        <BlogPreview/>
        <BlogPreview/>
        <BlogPreview/>
        <BlogPreview/>
        <BlogPreview/>

      </div>
    </div>
  );
}


export default App;