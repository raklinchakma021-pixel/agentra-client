import ManageKnowledgeTable from "@/components/dashboard/ManageKnowledgeTable";

export default function ManageItemsPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Manage Knowledge
      </h1>

      <ManageKnowledgeTable />
    </div>
  );
}