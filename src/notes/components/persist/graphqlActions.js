const CreateTodo = `mutation createTodo($note: String!) {
  createTodo(input: {note: $note}) {
    id
    note
  }
}`;

const ListTodos = `query {
  listTodos {
    items {
      id
      note
      done
    }
  }
}`;

const UpdateTodo = `mutation updateTodo($id: ID!, $note: String, $done: Boolean) {
  updateTodo(input: {id: $id, note: $note, done: $done}) {
    id
    note
    done
  }
}`;

const DeleteTodo = `mutation DeleteTodo($id: ID!) {
  deleteTodo(input: {id: $id}) {
    id
  }
}
`

export {
  CreateTodo,
  ListTodos,
  UpdateTodo,
  DeleteTodo
}
