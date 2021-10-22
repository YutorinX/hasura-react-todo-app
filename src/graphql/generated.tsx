import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** mutation root */
export type MutationRoot = {
  /** delete data from the table: "todo" */
  delete_todo?: Maybe<TodoMutationResponse>;
  /** delete single row from the table: "todo" */
  delete_todo_by_pk?: Maybe<Todo>;
  /** insert data into the table: "todo" */
  insert_todo?: Maybe<TodoMutationResponse>;
  /** insert a single row into the table: "todo" */
  insert_todo_one?: Maybe<Todo>;
  /** update data of the table: "todo" */
  update_todo?: Maybe<TodoMutationResponse>;
  /** update single row of the table: "todo" */
  update_todo_by_pk?: Maybe<Todo>;
};

/** mutation root */
export type MutationRootDeleteTodoArgs = {
  where: TodoBoolExp;
};

/** mutation root */
export type MutationRootDeleteTodoByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootInsertTodoArgs = {
  objects: Array<TodoInsertInput>;
  on_conflict?: Maybe<TodoOnConflict>;
};

/** mutation root */
export type MutationRootInsertTodoOneArgs = {
  object: TodoInsertInput;
  on_conflict?: Maybe<TodoOnConflict>;
};

/** mutation root */
export type MutationRootUpdateTodoArgs = {
  _set?: Maybe<TodoSetInput>;
  where: TodoBoolExp;
};

/** mutation root */
export type MutationRootUpdateTodoByPkArgs = {
  _set?: Maybe<TodoSetInput>;
  pk_columns: TodoPkColumnsInput;
};

/** column ordering options */
export enum OrderBy {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** query root */
export type QueryRoot = {
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: TodoAggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
};

/** query root */
export type QueryRootTodoArgs = {
  distinct_on?: Maybe<Array<TodoSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TodoOrderBy>>;
  where?: Maybe<TodoBoolExp>;
};

/** query root */
export type QueryRootTodoAggregateArgs = {
  distinct_on?: Maybe<Array<TodoSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TodoOrderBy>>;
  where?: Maybe<TodoBoolExp>;
};

/** query root */
export type QueryRootTodoByPkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRoot = {
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: TodoAggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
};

/** subscription root */
export type SubscriptionRootTodoArgs = {
  distinct_on?: Maybe<Array<TodoSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TodoOrderBy>>;
  where?: Maybe<TodoBoolExp>;
};

/** subscription root */
export type SubscriptionRootTodoAggregateArgs = {
  distinct_on?: Maybe<Array<TodoSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TodoOrderBy>>;
  where?: Maybe<TodoBoolExp>;
};

/** subscription root */
export type SubscriptionRootTodoByPkArgs = {
  id: Scalars["uuid"];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "todo" */
export type Todo = {
  created_at: Scalars["timestamptz"];
  id: Scalars["uuid"];
  name: Scalars["String"];
};

/** aggregated selection of "todo" */
export type TodoAggregate = {
  aggregate?: Maybe<TodoAggregateFields>;
  nodes: Array<Todo>;
};

/** aggregate fields of "todo" */
export type TodoAggregateFields = {
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<TodoMaxFields>;
  min?: Maybe<TodoMinFields>;
};

/** aggregate fields of "todo" */
export type TodoAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TodoSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "todo" */
export type TodoAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<TodoMaxOrderBy>;
  min?: Maybe<TodoMinOrderBy>;
};

/** input type for inserting array relation for remote table "todo" */
export type TodoArrRelInsertInput = {
  data: Array<TodoInsertInput>;
  on_conflict?: Maybe<TodoOnConflict>;
};

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type TodoBoolExp = {
  _and?: Maybe<Array<Maybe<TodoBoolExp>>>;
  _not?: Maybe<TodoBoolExp>;
  _or?: Maybe<Array<Maybe<TodoBoolExp>>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "todo" */
export enum TodoConstraint {
  /** unique or primary key constraint */
  TodoPkey = "todo_pkey",
}

/** input type for inserting data into table "todo" */
export type TodoInsertInput = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type TodoMaxFields = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "todo" */
export type TodoMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TodoMinFields = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "todo" */
export type TodoMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** response of any mutation on the table "todo" */
export type TodoMutationResponse = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Todo>;
};

/** input type for inserting object relation for remote table "todo" */
export type TodoObjRelInsertInput = {
  data: TodoInsertInput;
  on_conflict?: Maybe<TodoOnConflict>;
};

/** on conflict condition type for table "todo" */
export type TodoOnConflict = {
  constraint: TodoConstraint;
  update_columns: Array<TodoUpdateColumn>;
  where?: Maybe<TodoBoolExp>;
};

/** ordering options when selecting data from "todo" */
export type TodoOrderBy = {
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** primary key columns input for table: "todo" */
export type TodoPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "todo" */
export enum TodoSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "todo" */
export type TodoSetInput = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
};

/** update columns of table "todo" */
export enum TodoUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
};

export type TodoQueryVariables = Exact<{ [key: string]: never }>;

export type TodoQuery = { todo: Array<{ id: any; created_at: any; name: string }> };

export const TodoDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Todo" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "todo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TodoQuery, TodoQueryVariables>;
