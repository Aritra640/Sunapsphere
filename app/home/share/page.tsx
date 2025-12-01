import { ShareCode } from "@/app/components/shareCode";

export default async function Share() {
  const myShareCode = "https://brainshare.app/share/ABC123XYZ";

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <br />
      <div className="w-full max-w-xl space-y-10">
        
        <div className="bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-gray-800 shadow-xl">
          <h2 className="text-lg font-semibold mb-3">Your Share Code</h2>

          <ShareCode code={myShareCode} />

          <p className="text-xs text-gray-400 mt-2">
            Share this link to give access to your brain.
          </p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-gray-800 shadow-xl">
          <h2 className="text-lg font-semibold mb-3">Receive Shared Brain</h2>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Enter shared code"
              className="
                w-full px-3 py-2 rounded-md bg-gray-800 
                border border-gray-700 focus:border-purple-500 
                focus:outline-none text-sm transition
              "
            />

            <button
              type="submit"
              className="
                w-full py-2 bg-purple-600 hover:bg-purple-700 
                rounded-md text-sm font-medium transition
                shadow-lg hover:shadow-purple-700/30 cursor-pointer
              "
            >
              Access Shared Brain
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

