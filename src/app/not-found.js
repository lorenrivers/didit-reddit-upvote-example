import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-8">
      <h2 className="text-center text-xl font-extrabold">
        Cannot vote without being logged in!
      </h2>
      <p className="text-center font-semibold">Please log in to vote.</p>
    </div>
  );
}
