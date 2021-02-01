# use-gql-query

Refer [React-Query](https://react-query.tanstack.com/reference/useQuery) for API reference.

```tsx
import { FC } from "react";
import { createGqlHook, GQLProvider } from "use-gql-query";

const useGql = createGqlHook("https://graphqlzero.almansi.me/api");

const postQuery = gql`
  query($postId: ID!) {
    post(id: $postId) {
      id
      title
      body
    }
  }
`;

export const Post: FC = ({ postId }: { postId: string }) => {
  const { status, data, error, isFetching } = useGql(
    ["post", postId],
    postQuery,
    { postId },
    { enabled: !!postId }
  );
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
```
