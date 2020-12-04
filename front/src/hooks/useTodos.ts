import { useMemo } from "react";
import { useQuery, ApolloError } from "@apollo/client";
import gql from "graphql-tag";
import { TodoModel } from "@generated";

const GET_TODOS_QUERY = gql`
  query todos {
    todos {
      todo_id
      title
      description
      filter {
        id
        title
      }
      initiator {
        id
        title
      }
    }
  }
`;

type TodosData = {
  todos: TodoModel[];
  loading: boolean;
  error?: ApolloError;
};

export const useTodos: () => TodosData = () => {
  const { data, loading, error } = useQuery<{ todos: TodoModel[] }, void>(
    GET_TODOS_QUERY
  );

  return useMemo(
    () => ({
      todos: data?.todos || [],
      loading,
      error,
    }),
    [data, error, loading]
  );
};
