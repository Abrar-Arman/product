import useFetch from "../../assets/hooks/useFetch";
import Category from "./Category";
import Spinner from "../spinner/Spinner";

export default function CategoryList() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products/category-list"
  );
  if (loading)
     return <Spinner />;
  return (
    <ul style={{ height: "100%", overflow: "auto" }}>
      {error ? <p>some </p> : ""}
      {data.data.map((category, ind) => (
        <Category key={ind} category={category} />
      ))}
    </ul>
  );
}
