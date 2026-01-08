import { JobCard } from "./JobCard.jsx";
import data from "./../data.json";
export function JobListings() {
  return (
    <section className="border boder-gray-300 rounded-xl overflow-hidden">
      {data.map((job) => (
        <JobCard job={job} key={job.id} onLast={job.length - 1} />
      ))}
    </section>
  );
}
