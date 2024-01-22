import AddTodo from "@/components/shared/AddTodo"
import Todo from "@/components/shared/Todo"
import { prisma } from "@/utils/prisma"

async function getData() {
  const data = await prisma.todo.findMany({
    select:{
      title: true,
      id: true,
      isCompleted: true
    },
    orderBy:{
      created_at: "desc"
    }
  })

  return data
}

const Home = async () => {
  const todos = await getData()
  console.log(todos)
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <h1 className="text-3xl font-extrabold uppercase">To-Do List</h1>
      <div className="py-8 flex justify-center flex-col items-center w-[1000px]">
        <AddTodo />
        <div className="flex flex-col gap-5 items-center justify-center mt-2 w-full">
          {todos.map((todo,id)=>(
            <div className="w-full" key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
