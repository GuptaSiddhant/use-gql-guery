import { jsx as _jsx } from "react/jsx-runtime";
import { useQuery, useQueryClient, QueryClient, QueryClientProvider, } from "react-query";
import { request, gql } from "graphql-request";
const createGqlHook = (url = "/graphql") => (cacheKey, gqlQuery, variables, options) => useQuery(cacheKey, async () => await request(url, gqlQuery, variables), options);
const GQLProvider = ({ children }) => (_jsx(QueryClientProvider, Object.assign({ client: new QueryClient() }, { children: children }), void 0));
export { createGqlHook, GQLProvider, useQueryClient, gql };
