import Intro from "../intro/Intro";
import ProductList from "../product/ProductList";
import Servese from "../serves/Servese";


export default function Home({data,error,loading}) {
  return (
    <>
      <Intro />
      <Servese />
      <ProductList data={data} error={error} loading={loading} />
    </>
  )
}
