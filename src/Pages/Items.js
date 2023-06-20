import { Link } from "react-router-dom";
import { ITEMS } from "../data/itemData";


function Items() {

  
  return (
    <>

      <main>

        <h1>Items Page</h1>
        <Link to="/">back</Link>
      </main>
      <ul>
        {ITEMS.map((item )=> (
          <li>
            <Link to={`/items/${item.id}`}>
            <small>{item.id}</small>
            </Link>
            

          </li>
        )
        )}
      </ul>
    </>
  );
}

export default Items;
