import Link from "next/link"
import { Home, Folder, Upload, Share, Star, Trash } from "lucide-react"

const Sidebar = () => {
  return (
    <div className="bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Link href="/" className="text-3xl font-semibold text-center text-blue-600 flex items-center space-x-2 px-4">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
        <span>CloudStore</span>
      </Link>
      <nav>
        <Link href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">
          <Home className="inline-block mr-2" size={20} /> Home
        </Link>
        <Link
          href="/files"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          <Folder className="inline-block mr-2" size={20} /> My Files
        </Link>
        <Link
          href="/upload"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          <Upload className="inline-block mr-2" size={20} /> Upload
        </Link>
        <Link
          href="/shared"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          <Share className="inline-block mr-2" size={20} /> Shared
        </Link>
        <Link
          href="/starred"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          <Star className="inline-block mr-2" size={20} /> Starred
        </Link>
        <Link
          href="/trash"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          <Trash className="inline-block mr-2" size={20} /> Trash
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar

