import { useQueries } from "@tanstack/react-query";
import React from "react";
import { fetchPostDetail } from "../hooks/usePost";

const Querys = () => {
  const ids = [1, 2, 3, 4];

  const results = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["postDetail", id],
        queryFn: () => fetchPostDetail(id),
      };
    }),
    combine: (results) => {
      return { data: results.map((result) => result.data?.data) };
    },
  });

  if (results.data.length > 0) {
    return (
      <div>
        {results.data.map((item) => {
          return <p key={item?.id}>{item?.title}</p>;
        })}
      </div>
    );
  }
};

export default Querys;
