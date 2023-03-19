import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getAllAppRoutes } from "@/utils/helpers";
import { useAppState } from "@/context/appContext";

const withRouteChecking = (WrappedComponent: any) => {
  const WithRouteChecking = (props: any) => {
    // @ts-ignore
    const { state } = useAppState();
    const router = useRouter();
    const { route } = router;
    const allRoutes = getAllAppRoutes(state);
    console.log(allRoutes);
    const isRouteValid = allRoutes.includes(route);

    if (!isRouteValid) {
      return <ErrorPage statusCode={404} />;
    }

    return <WrappedComponent {...props} />;
  };

  return WithRouteChecking;
};

export default withRouteChecking;
