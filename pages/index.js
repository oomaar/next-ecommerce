import { useEffect, useState } from "react";
import { Loading } from "../components";
import { HomeContainer } from "../containers";
import { NextHead } from "../global/NextHead";

export default function Home({ data }) {
  const [isLoading, setIsLoading] = useState(false);

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

export async function getServerSideProps() {
  const data = await fetch(`https://fakestoreapi.com/products`)
    .then(res => res.json());

  return {
    props: {
      data,
    },
  };
};