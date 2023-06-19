import { Link } from "react-router-dom";
 

function Items() {
  return (
    <>
   
      <main>
        
        <h1>Items Page</h1>
        <Link to="/">back</Link>

        <Link to='/items/item1'> <h2>Item-1</h2></Link>
        <Link to='/items/item2'> <h2>Item-2</h2></Link>
        <Link to='/items/item3'> <h2>Item-3</h2></Link>
        
      </main>
    </>
  );
}

export default Items;
