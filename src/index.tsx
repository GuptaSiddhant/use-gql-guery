import { FC } from "react";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  UseQueryOptions,
} from "react-query";
import { request, gql } from "graphql-request";

const createGqlHook = (url: string = "/graphql") => <ResultType, VariableType>(
  cacheKey: string | any[],
  gqlQuery: string,
  variables: VariableType,
  options: UseQueryOptions<ResultType, unknown, ResultType>
) =>
  useQuery(
    cacheKey,
    async () =>
      await request<ResultType, VariableType>(url, gqlQuery, variables),
    options
  );

const GQLProvider: FC = ({ children }) => (
  <QueryClientProvider client={new QueryClient()}>
    {children}
  </QueryClientProvider>
);

export { createGqlHook, GQLProvider, useQueryClient, gql };
