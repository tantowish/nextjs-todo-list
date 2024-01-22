'use client'

import { deleteTodo } from "@/app/actions/todoActions"
import Form from "../ui/Form"
import Input from "../ui/Input"
import { todo } from "node:test"
import { todoType } from "../../../types/todoType"
import Button from "../ui/Button"
import { BsFillTrashFill } from "react-icons/bs"

const DeleteTodo = ({todo}:{todo:todoType}) => {
  return (
    <Form
    actions={deleteTodo}>
        <Input
        type="hidden"
        name="inputId"
        value={todo.id}
        />

        <Button
        actionButton
        text={<BsFillTrashFill/>}
        type="submit"
        />

    </Form>
  )
}

export default DeleteTodo