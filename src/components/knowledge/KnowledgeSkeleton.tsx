export default function KnowledgeSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border bg-white">
      <div className="h-52 rounded-t-2xl bg-gray-200" />

      <div className="space-y-3 p-5">
        <div className="h-5 w-24 rounded bg-gray-200" />
        <div className="h-6 rounded bg-gray-200" />
        <div className="h-4 rounded bg-gray-200" />
        <div className="h-4 w-3/4 rounded bg-gray-200" />

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="h-4 rounded bg-gray-200" />
          <div className="h-4 rounded bg-gray-200" />
          <div className="h-4 rounded bg-gray-200" />
        </div>

        <div className="mt-6 h-11 rounded-xl bg-gray-200" />
      </div>
    </div>
  );
}