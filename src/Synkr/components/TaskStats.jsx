import { useMemo } from 'react';
import { useSynkrContext } from '../../hooks/useSynkrContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const TaskStats = () => {

  const { projects } = useSynkrContext();

  const taskStats = useMemo(() => {
    let completedTasks = 0;
    let incompleteTasks = 0;

    projects.forEach((project) => {
      project.tasks.forEach((task) => {
        if (task.isCompleted) {
          completedTasks++;
        } else {
          incompleteTasks++;
        }
      });
    });

    return [completedTasks, incompleteTasks];
  }, [projects]);

  const data = {
    labels: ['Completed', 'In Progress'],
    datasets: [
      {
        label: 'Task(s)',
        data: taskStats,
        backgroundColor: [
          '#233db0',
          '#e4eafb',
        ],
      },
    ],
  };

  return (
    <Doughnut data={data} />
  );
};
