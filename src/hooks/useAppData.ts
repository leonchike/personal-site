import useSWR from "swr";
import axios from "axios";
import API_Routes from "@/utils/APIRoutes";

const GetAppData = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

export const useAppData = () => {
  const { data, error } = useSWR(
    API_Routes.getRoute(API_Routes.appData),
    GetAppData
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useTeams = () => {
  const { data, error } = useSWR(
    API_Routes.getRoute(API_Routes.teams),
    GetAppData
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
