import { JobCard } from "./JobCard.jsx";
export function JobListings(jobs) {
  return (
    <section className="border boder-gray-300 rounded-xl overflow-hidden">
      {jobs.map((job) => (
        <JobCard job={job} key={job.id} onLast={job.length - 1} />
      ))}
    </section>
  );
}
