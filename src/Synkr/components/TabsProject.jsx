import { Tab } from '@headlessui/react';
import { TabTasks, TabCollaborators } from '.';
import { TaskIcon, CollaboratorsIcon } from './icons';

export const TabsProject = () => {

  const classNames = (...classes) => classes.filter(Boolean).join(' ');

  return (
    <div className='py-10'>
      <Tab.Group>
        <Tab.List className='flex my-5'>
          <Tab className={({ selected }) =>
            classNames(
              'flex w-60 justify-center gap-2 py-4 font-semibold transition-colors duration-300 mx-1 focus:outline-none',
              selected
                ? 'border-b-2 border-Synkr-800 text-Synkr-800'
                : 'hover:text-Synkr-800 border-b-2 hover:border-Synkr-800 text-[#545454]'
            )
          }
          >
            <TaskIcon />
            <span>Tasks</span>
          </Tab>
          <Tab className={({ selected }) =>
            classNames(
              'flex w-60 justify-center gap-2 py-4 font-semibold transition-colors duration-300 mx-1 focus:outline-none',
              selected
                ? 'border-b-2 border-Synkr-800 text-Synkr-800'
                : 'hover:text-Synkr-800 border-b-2 hover:border-Synkr-800 text-[#545454]'
            )
          }
          >
            <CollaboratorsIcon />
            <span>Collaborators</span>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <TabTasks />
          </Tab.Panel>
          <Tab.Panel>
            <TabCollaborators />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
