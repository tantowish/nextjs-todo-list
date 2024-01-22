import { AiOutlineCheck } from "react-icons/ai"
import Button from "../ui/Button"
import Form from "../ui/Form"
import Input from "../ui/Input"
import { changeStats } from "@/app/actions/todoActions"

interface todo {
    title: string,
    id: string,
    isComplete: boolean
}

const ChangeTodo = ({todo}) => {
  return (
    <Form actions={changeStats}>
        <Input
        name="inputId"
        value={todo.id}
        type="hidden"
        />

        <Button 
        actionButton
        type="submit"
        text={<AiOutlineCheck/>}
        />
    </Form>
  )
}

export default ChangeTodo