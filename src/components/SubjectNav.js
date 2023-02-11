export default function SubjectNav() {
    return (
        <div>
          <button className="border-2 border-neutral-400 px-4 py-1 rounded-3xl mx-1">
            All
          </button>
          <button className="border-2 border-blue-600 px-4 py-1 rounded-3xl mx-1 bg-blue-600 text-white">
            Maths
          </button>
          <button className="border-2 border-neutral-400 px-4 py-1 rounded-3xl mx-1">
            Physics
          </button>
          <button className="border-2 border-neutral-400 px-4 py-1 rounded-3xl mx-1">
            Chemistry
          </button>
        </div>
    )
}