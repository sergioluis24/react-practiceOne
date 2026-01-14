import { JobCard } from "./JobCard.jsx";
export function JobListings({ jobs }) {
  return (
    <section className="mb-10 border boder-gray-300 rounded-4xl overflow-hidden">
      {jobs.map((job, index) => (
        <JobCard job={job} key={job.id} isLast={index === jobs.length - 1} />
      ))}
    </section>
  );
}
