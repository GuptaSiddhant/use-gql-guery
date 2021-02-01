import { FC } from "react";
import { useQueryClient, UseQueryOptions } from "react-query";
import { gql } from "graphql-request";
declare const createGqlHook: (url?: string) => <ResultType, VariableType>(cacheKey: string | any[], gqlQuery: string, variables: VariableType, options: UseQueryOptions<ResultType, unknown, ResultType>) => import("react-query").QueryObserverResult<ResultType, unknown>;
declare const GQLProvider: FC;
export { createGqlHook, GQLProvider, useQueryClient, gql };
