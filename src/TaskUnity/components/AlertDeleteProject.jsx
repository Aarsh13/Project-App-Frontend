import { Dialog } from '@headlessui/react';
import { useSynkrContext } from '../../hooks';

export const AlertDeleteProject = () => {

  const { onShowModalAlert, startDeleteProject } = useSynkrContext();

  return (
    <>
      <div className='flex flex-col gap-2'>
        <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-900">
          Delete the project?
        </Dialog.Title>

        <Dialog.Description>
          If you delete the project, it cannot be recovered.
        </Dialog.Description>

        <div className='flex justify-end gap-4 mt-4'>
          <button
            type='button'
            className='rounded-lg border border-Synkr-800 px-4 py-2 text-base text-Synkr-800 font-bold'
            onClick={onShowModalAlert}
          >
            Cancel
          </button>
          <button
            className='rounded-lg border bg-red-500 px-4 py-2 text-base text-white font-bold'
            onClick={startDeleteProject}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  )
}
