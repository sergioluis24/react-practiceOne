import { JobCard } from "./JobCard.jsx";
import data from "./../data.json";
export function JobListings() {
  return (
    <section className="mb-10 border boder-gray-300 rounded-xl overflow-hidden">
      {data.map((job, index) => (
        <JobCard key={job.id} job={job} isLast={index === data.length - 1} />
      ))}
    </section>
  );
}
