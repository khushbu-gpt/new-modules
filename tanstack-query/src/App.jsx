import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from "@tanstack/react-query";
import Todos from "./components/Todo";
import { useState } from "react";
import {ReactQueryDevtoolsPanel} from "@tanstack/react-query-devtools"
const queryClient = new QueryClient();

export default function App() {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <button
        onClick={() => setIsOpen(!isOpen)}
      >{`${isOpen ? 'Close' : 'Open'} the devtools panel`}</button>
      {isOpen && <ReactQueryDevtoolsPanel onClose={() => setIsOpen(false)} />}
    </QueryClientProvider>
  );

}

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .catch((err) => console.log(err)),
  })
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div style={{display:"flex",gap:"25px",flexWrap:"wrap",width:"100%"}}>
      {data?.slice(0,4).map((data) => (
        <div key={data.title} style={{width:"300px",border:"2px solid gray"}}>
          <img src={data.image} alt="" width={200}/>
          <h3> {data.title}</h3>{" "}
          {/* <h2> {data.price}</h2>{" "}
          <h3>{data.brand}</h3>
          <p>{data.description}</p> */}
        </div>
      ))}
      <Todos/>
    </div>
  );
}
