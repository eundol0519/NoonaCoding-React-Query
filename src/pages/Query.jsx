import React from "react";
import { usePostQuery } from "../hooks/usePost";

const Query = () => {
  const { data, isLoading, isError, error, refetch } = usePostQuery();

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (isError) {
    console.error("error", error);
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <h1>Reacy Query</h1>
      <div>
        {data.length > 0 ? (
          data?.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })
        ) : (
          <p>{data?.title}</p>
        )}
      </div>
      <button onClick={refetch}>재호출</button>
    </div>
  );
};

export default Query;
