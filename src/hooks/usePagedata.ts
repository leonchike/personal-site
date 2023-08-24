// hooks/useFetchData.ts

import { useState, useEffect } from "react";
import axios from "axios";

interface StateData {
  file: string;
  data: any[]; // Or whatever type your data is.
}

const useFetchData = (
  page: string | string[] | undefined,
  category: string | string[] | undefined
) => {
  const [data, setData] = useState<StateData | null>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!page || !category) {
      return;
    }

    axios
      .get(`/api/${category}?page=${page}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [page, category]);

  return { data, error };
};

export default useFetchData;
