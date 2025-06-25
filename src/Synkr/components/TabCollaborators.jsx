import { useSynkrContext } from '../../hooks';
import { CollaboratorsList } from './CollaboratorsList';
import { PlusIcon } from './icons';

export const TabCollaborators = () => {

  const { onShowModal, project } = useSynkrContext();

  return (
    <>
      <button
        type='button'
        className='flex gap-2 w-max rounded-lg border bg-Synkr-800 px-4 py-2 text-base text-white font-bold transition-colors hover:bg-opacity-90 mt-4 md:mt-0'
        onClick={() => onShowModal('collaborator')}
      >
        <PlusIcon />
        <span>New Collaborator</span>
      </button>

      <div className="my-10">
        {
          (project?.collaborators?.length > 0)
            ? <CollaboratorsList collaborators={project.collaborators} />
            : <p>There are no collaborators in this project.</p>
        }
      </div>
    </>
  )
}
