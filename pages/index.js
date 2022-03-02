import { useEffect, useState } from "react";
import { HomeContainer } from "../containers";
import { NextHead } from "../global/NextHead";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      await fetch(`api/products`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
        });
    };
    fetchData();
  }, []);

  isLoading && <h1>Loading....</h1>;
  !data && <h1>No Data Available...</h1>;

  return (
    <>
      <NextHead title="E-Commerce - Login" />

      <HomeContainer />
    </>
  );
}
