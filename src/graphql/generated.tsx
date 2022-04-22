import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  _nlike?: InputMaybe<Scalars['String']>;
  _nsimilar?: InputMaybe<Scalars['String']>;
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todo" */
  delete_todo?: Maybe<Todo_Mutation_Response>;
  /** delete single row from the table: "todo" */
  delete_todo_by_pk?: Maybe<Todo>;
  /** insert data into the table: "todo" */
  insert_todo?: Maybe<Todo_Mutation_Response>;
  /** insert a single row into the table: "todo" */
  insert_todo_one?: Maybe<Todo>;
  /** update data of the table: "todo" */
  update_todo?: Maybe<Todo_Mutation_Response>;
  /** update single row of the table: "todo" */
  update_todo_by_pk?: Maybe<Todo>;
};


/** mutation root */
export type Mutation_RootDelete_TodoArgs = {
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todo_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_TodoArgs = {
  objects: Array<Todo_Insert_Input>;
  on_conflict?: InputMaybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todo_OneArgs = {
  object: Todo_Insert_Input;
  on_conflict?: InputMaybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodoArgs = {
  _set?: InputMaybe<Todo_Set_Input>;
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_By_PkArgs = {
  _set?: InputMaybe<Todo_Set_Input>;
  pk_columns: Todo_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
};


/** query root */
export type Query_RootTodoArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


/** query root */
export type Query_RootTodo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


/** query root */
export type Query_RootTodo_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
};


/** subscription root */
export type Subscription_RootTodoArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodo_By_PkArgs = {
  id: Scalars['uuid'];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todo" */
export type Todo = {
  __typename?: 'todo';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
};

/** aggregated selection of "todo" */
export type Todo_Aggregate = {
  __typename?: 'todo_aggregate';
  aggregate?: Maybe<Todo_Aggregate_Fields>;
  nodes: Array<Todo>;
};

/** aggregate fields of "todo" */
export type Todo_Aggregate_Fields = {
  __typename?: 'todo_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Todo_Max_Fields>;
  min?: Maybe<Todo_Min_Fields>;
};


/** aggregate fields of "todo" */
export type Todo_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Todo_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "todo" */
export type Todo_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Todo_Max_Order_By>;
  min?: InputMaybe<Todo_Min_Order_By>;
};

/** input type for inserting array relation for remote table "todo" */
export type Todo_Arr_Rel_Insert_Input = {
  data: Array<Todo_Insert_Input>;
  on_conflict?: InputMaybe<Todo_On_Conflict>;
};

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type Todo_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Todo_Bool_Exp>>>;
  _not?: InputMaybe<Todo_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Todo_Bool_Exp>>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todo" */
export enum Todo_Constraint {
  /** unique or primary key constraint */
  TodoPkey = 'todo_pkey'
}

/** input type for inserting data into table "todo" */
export type Todo_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Todo_Max_Fields = {
  __typename?: 'todo_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "todo" */
export type Todo_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Todo_Min_Fields = {
  __typename?: 'todo_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "todo" */
export type Todo_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "todo" */
export type Todo_Mutation_Response = {
  __typename?: 'todo_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Todo>;
};

/** input type for inserting object relation for remote table "todo" */
export type Todo_Obj_Rel_Insert_Input = {
  data: Todo_Insert_Input;
  on_conflict?: InputMaybe<Todo_On_Conflict>;
};

/** on conflict condition type for table "todo" */
export type Todo_On_Conflict = {
  constraint: Todo_Constraint;
  update_columns: Array<Todo_Update_Column>;
  where?: InputMaybe<Todo_Bool_Exp>;
};

/** ordering options when selecting data from "todo" */
export type Todo_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "todo" */
export type Todo_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "todo" */
export enum Todo_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "todo" */
export type Todo_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "todo" */
export enum Todo_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type TodoQueryVariables = Exact<{ [key: string]: never; }>;


export type TodoQuery = { __typename?: 'query_root', todos: Array<{ __typename?: 'todo', id: any, created_at: any, name: string }> };


export const TodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Todo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"todos"},"name":{"kind":"Name","value":"todo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TodoQuery, TodoQueryVariables>;