import "react-datepicker/dist/react-datepicker.css";
import { getSingleTask } from "@/app/actions";
import TaskForm from "@/app/componants/TaskForm";

interface Props {
  id: number;
}

async function EditTask({ params }: { params: { id: string } }) {
  const task = await getSingleTask(params.id);
  return <TaskForm task={task} />;
}

export default EditTask;
