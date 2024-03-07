export default function Teams() {
  return (
    <div className="flex flex-col items-center px-16 py-8">
      <p className="font-bold text-4xl mb-12">Meet the Team</p>
      <div className="grid grid-cols-3 w-full">
        <div className="flex flex-col items-center text-center">
            <div className="aspect-square w-36 mb-4 rounded-full bg-neutral-400"></div>
            <p className="font-bold text-3xl mb-6">Team</p>
            <p className="text-lg">Position</p>
        </div>
        <div className="flex flex-col items-center text-center">
            <div className="aspect-square w-36 mb-4 rounded-full bg-neutral-400"></div>
            <p className="font-bold text-3xl mb-6">Team</p>
            <p className="text-lg">Long Position Name Because Why Not</p>
        </div>
        <div className="flex flex-col items-center text-center">
            <div className="aspect-square w-36 mb-4 rounded-full bg-neutral-400"></div>
            <p className="font-bold text-3xl mb-6">Team</p>
            <p className="text-lg">Multiline</p>
            <p className="text-lg">Position</p>
        </div>
      </div>
    </div>
  );
}
