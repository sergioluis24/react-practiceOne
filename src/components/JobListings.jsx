import { JobCard } from "./JobCard.jsx";
import data from "./../data.json";
export function JobListings() {
  return (
    <>
      {data.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
    </>
  );
}
