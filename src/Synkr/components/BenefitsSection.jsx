export const BenefitsSection = () => {
  return (
    <main className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mx-4 md:mx-8 lg:mx-0">
          <div className="md:max-w-2xl md:mx-auto space-y-6 text-center mb-20">
            <h2 className="text-4xl font-bold">Key Features of Synkr</h2>
            <p className="text-lg">From task management to team collaboration, we present a comprehensive approach to project management.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 mb-24">
            <div className="md:col-span-7 shadow-md md:order-last">
              <img src="/assets/Synkr-dashboard.png" alt="Synkr Dashboard" />
            </div>
            <div className="md:col-span-5 space-y-4 md:flex md:flex-col md:justify-center md:mr-20 lg:mr-28 mt-10 md:mt-0">
              <h3 className="text-2xl font-bold">Project Statistics and Tracking</h3>
              <p className="text-lg">Access detailed statistics of your projects and keep real-time tracking of progress with accurate counts of tasks in progress and pending completion.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 mb-24">
            <div className="md:col-span-7 shadow-md md:order-first">
              <img src="/assets/Synkr-collaborators.png" alt="Synkr Dashboard" />
            </div>
            <div className="md:col-span-5 space-y-4 md:flex md:flex-col md:justify-center md:ml-20 lg:ml-28 mt-10 md:mt-0">
              <h3 className="text-2xl font-bold">Work in Real Time with Your Team</h3>
              <p className="text-lg">Add collaborators to your projects and work in real time. There are no more barriers to communication and cooperation.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 mb-24">
            <div className="md:col-span-7 shadow-md md:order-last">
              <img src="/assets/Synkr-tasks.png" alt="Synkr Dashboard" />
            </div>
            <div className="md:col-span-5 space-y-4 md:flex md:flex-col md:justify-center md:mr-20 lg:mr-28 mt-10 md:mt-0">
              <h3 className="text-2xl font-bold">Create Tasks and Set Deadlines Precisely</h3>
              <p className="text-lg">Plan every task in your project. Set completion times and keep your team in sync with a seamless workflow.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
