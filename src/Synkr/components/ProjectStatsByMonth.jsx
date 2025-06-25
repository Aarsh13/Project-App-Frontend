import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useSynkrContext } from '../../hooks';
import { getMonthName } from '../helpers';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
);

export const ProjectStatsByMonth = () => {

  const { projects } = useSynkrContext();

  // Count number of projects per month-year
  const projectsByMonthYear = projects.reduce((acc, project) => {
    const createdAt = new Date(project.createdAt);
    const year = createdAt.getFullYear();
    const month = createdAt.getMonth() + 1;

    const key = `${getMonthName(month)} ${year}`;

    if (acc[key]) {
      acc[key]++;
    } else {
      acc[key] = 1;
    }

    return acc;
  }, {});

  const data = {
    labels: Object.keys(projectsByMonthYear).map(key => key),
    datasets: [
      {
        label: 'Projects per month',
        backgroundColor: '#383877',
        data: Object.values(projectsByMonthYear),
      },
    ],
  };

  return (
    <Bar data={data} />
  );
};
