import { JobCard } from "./JobCard.jsx";
import { LoadingFetch } from "./LoadingFetch.jsx";
export function JobListings({ jobs, loading }) {
  return (
    <>
      <LoadingFetch loading={loading} />
      <section className="mb-10 border border-slate-50/50 rounded-4xl overflow-hidden">
        {jobs.map((job, index) => (
          <JobCard job={job} key={job.id} isLast={index === jobs.length - 1} />
        ))}
      </section>
    </>
  );
}
