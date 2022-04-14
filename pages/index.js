import { useEffect, useState } from "react";
import { Loading } from "../components";
import { HomeContainer } from "../containers";
import { NextHead } from "../global/NextHead";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      await fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setTimeout(() => setIsLoading(false), 2000);
        });
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  !data && <h1>No Data Available...</h1>;

  return (
    <>
      <NextHead title="E-Commerce - Login" />

      <HomeContainer data={data} />
    </>
  );
}
