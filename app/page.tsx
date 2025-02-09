import { Folder, File, MoreVertical } from "lucide-react"

export default function Home() {
  const files = [
    { id: 1, name: "Documents", type: "folder" },
    { id: 2, name: "Images", type: "folder" },
    { id: 3, name: "Project Proposal.docx", type: "file" },
    { id: 4, name: "Budget.xlsx", type: "file" },
    { id: 5, name: "Meeting Notes.pdf", type: "file" },
  ]

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Files</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {files.map((file) => (
            <li key={file.id}>
              <div className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition duration-150 ease-in-out">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {file.type === "folder" ? (
                      <Folder className="flex-shrink-0 h-6 w-6 text-gray-400" />
                    ) : (
                      <File className="flex-shrink-0 h-6 w-6 text-gray-400" />
                    )}
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{file.name}</p>
                    </div>
                  </div>
                  <div>
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

