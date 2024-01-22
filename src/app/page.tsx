import AddTodo from "@/components/shared/AddTodo"

const Home = () => {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <h1 className="text-3xl font-extrabold uppercase">To-Do List</h1>
      <div className="py-8 flex justify-center flex-col items-center w-[1000px]">
        <AddTodo />
      </div>
    </div>
  )
}

export default Home
