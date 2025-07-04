import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { useForm, useSynkrContext } from '../../hooks';
import { Alert } from '../../components';
import { getCurrentDate } from '../helpers';

const initialForm = {
  name: '',
  description: '',
  dueDate: '',
  priority: '',
}

export const FormTask = () => {
  const {
    id,
    name,
    description,
    dueDate,
    priority,
    onInputChange, formState, onResetForm, updateDataForm
  } = useForm(initialForm);
  const { startSaveTask, showAlert, alert, project, task } = useSynkrContext();

  const { id: projectId } = useParams();
  const deadlineProject = project?.deadline?.split('T')[0];

  useEffect(() => {
    if (task?._id) {
      updateDataForm({
        id: task._id,
        name: task.name,
        description: task.description,
        dueDate: task.dueDate?.split('T')[0],
        priority: task.priority
      });
    }
  }, [])

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if ([name, description, dueDate, priority].includes('')) {
      return showAlert({
        message: 'All fields are required.',
        error: true
      });
    }
    if (dueDate <= getCurrentDate()) {
      return showAlert({
        message: `The date must be greater than ${getCurrentDate()}.`,
        error: true
      });
    }
    showAlert({});
    await startSaveTask({ ...formState, project: projectId });
    onResetForm();
  }

  return (
    <>
      <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-900">
        {id ? `Editing: ${name}` : 'New task'}
      </Dialog.Title>

      {alert?.message && <Alert alert={alert} />}

      <form className="py-10" onSubmit={onSubmitForm}>
        <div className="mb-5">
          <label htmlFor="name" className="font-bold">Task name</label>
          <input
            required
            id="name"
            type="text"
            name='name'
            value={name}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-Synkr-400 focus-visible:shadow-none py-3 px-5"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="description" className="font-bold">Description</label>
          <textarea
            required
            id="description"
            name='description'
            value={description}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-Synkr-400 focus-visible:shadow-none py-3 px-5"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="dueDate" className="font-bold">Due date</label>
          <input
            required
            id="dueDate"
            type="date"
            name='dueDate'
            min={getCurrentDate()}
            max={deadlineProject}
            value={dueDate}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-Synkr-400 focus-visible:shadow-none py-3 px-5"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="priority" className="font-bold">Priority</label>
          <select
            required
            id="priority"
            name='priority'
            value={priority}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-Synkr-400 focus-visible:shadow-none py-3 px-5"
          >
            <option value="" disabled>-- Select --</option>
            <option value="baja">Low</option>
            <option value="media">Medium</option>
            <option value="alta">High</option>
          </select>
        </div>

        <div>
          <button
            className="w-full cursor-pointer rounded-md border bg-Synkr-800 py-3 px-5 text-base text-white font-bold transition-colors hover:bg-opacity-90"
            type="submit"
          >
            {id ? 'Save changes' : 'Create task'}
          </button>
        </div>
      </form>
    </>
  )
}
