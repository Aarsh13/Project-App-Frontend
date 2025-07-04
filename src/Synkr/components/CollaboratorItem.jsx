import { useSynkrContext } from '../../hooks';
import { DeleteIcon } from './icons';

export const CollaboratorItem = ({ collaborator }) => {

  const { onShowModalAlert, addDataToDelete } = useSynkrContext();

  const onClickDelete = () => {
    onShowModalAlert('collaborator');
    addDataToDelete(collaborator);
  }

  return (
    <div className='flex justify-between items-center p-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors'>
      <div>
        <h4 className="text-xl font-bold">{collaborator.name}</h4>
        <p className='text-[#545454]'>{collaborator.email}</p>
      </div>

      <button
        type='button'
        className='text-[#545454] hover:text-red-500 transition-colors'
        onClick={onClickDelete}
      >
        <DeleteIcon />
        <span className="sr-only">Delete collaborator</span>
      </button>
    </div>
  )
}
