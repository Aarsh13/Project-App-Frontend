import { useEffect, useMemo } from 'react';
import { useSynkrContext, useAuth } from '../../hooks';
import { ProjectStatsByMonth, TaskStats, Spinner } from '../components';
import { CollaboratorsIcon, ProjectIcon, TaskIcon } from '../components/icons';

export const DashboardPage = () => {

  const { startGetProjects, projects, isLoading } = useSynkrContext();
  const { auth } = useAuth();

  const projectsQty = useMemo(() => projects.length, [projects]);
  const tasksQty = useMemo(() => projects.reduce((total, project) => total + project.tasks.length, 0), [projects]);
  const projectsCollaboratorQty = useMemo(() => projects.reduce((count, project) => {
    return count + ((project.creator !== auth.user._id) ? 1 : 0);
  }, 0), [projects]);

  useEffect(() => {
    startGetProjects();
  }, [])

  if (isLoading) return <Spinner />

  return (
    <>
      <h1 className='text-4xl font-bold'>Dashboard</h1>

      <div className='my-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='flex gap-4 items-center p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors text-[#545454]'>
            <ProjectIcon styles='w-8 h-8' />
            <div>
              <p className='font-bold'>Total Projects</p>
              <p className='text-3xl font-bold text-Synkr-800'>{projectsQty}</p>
            </div>
          </div>
          <div className='flex gap-4 items-center p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors text-[#545454]'>
            <CollaboratorsIcon styles='w-8 h-8' />
            <div>
              <p className='font-bold'>	Collaborating On Projects</p>
              <p className='text-3xl font-bold text-Synkr-800'>{projectsCollaboratorQty}</p>
            </div>
          </div>
          <div className='flex gap-4 items-center p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors text-[#545454]'>
            <TaskIcon styles='w-8 h-8' />
            <div>
              <p className='font-bold'>Total Tasks</p>
              <p className='text-3xl font-bold text-Synkr-800'>{tasksQty}</p>
            </div>
          </div>
        </div>

        <div className='my-10 grid grid-cols-1 lg:grid-cols-6 gap-6'>

          <div className='lg:col-span-4 p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors'>
            <h4 className='text-2xl font-bold mb-5'>Project Summary</h4>

            <ProjectStatsByMonth />
          </div>
          <div className='lg:col-span-2 p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors'>
            <h4 className='text-2xl font-bold mb-5'>Task Completion</h4>

            <TaskStats />
          </div>
        </div>
      </div>
    </>
  )
}