import { Link } from "react-router-dom";

export default function Category({category}) {
  return (
   <Link to={`product/category/${category}`}> <li style={{cursor:'pointer',fontWeight:'500',textTransform:'capitalize'}}>
      {category}
    </li>
    </Link>
  )
}
