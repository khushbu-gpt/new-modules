import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
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
  });
  console.log(data);
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div style={{display:"flex",gap:"25px",flexWrap:"wrap",width:"100%"}}>
      {data.map((data) => (
        <div key={data.title} style={{width:"300px",border:"4px solid gray"}}>
          <img src={data.image} alt="" width={200}/>
          <h2> {data.title}</h2>{" "}
          <h2> {data.price}</h2>{" "}
          <h3>{data.brand}</h3>
          <p>{data.description}</p>
        </div>
      ))}
    </div>
  );
}
