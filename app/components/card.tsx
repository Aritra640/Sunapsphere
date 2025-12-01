import { Pencil, Trash2 } from "lucide-react";

interface CardProps {
  Type: "Youtube" | "Tweet" | "Text" | "PDF";
  Title: string;
  Content: string;
  CreatedAt: Date;
}

export default function Card({ Type, Title, Content, CreatedAt }: CardProps) {
  const renderPreview = () => {
    switch (Type) {
      case "Text":
        return (
          <p className="text-gray-300 text-sm line-clamp-3">
            {Content}
          </p>
        );

      case "Youtube": {
        const videoId =
          Content.split("v=")[1]?.split("&")[0] || Content.split("/").pop();
        return (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            className="w-full h-56 rounded-lg border border-gray-700"
            loading="lazy"
            allowFullScreen
          />
        );
      }

      case "Tweet":
        return (
          <blockquote className="twitter-tweet">
            <a href={`https://twitter.com/user/status/${Content}`}></a>
          </blockquote>
        );

      case "PDF":
        return (
          <iframe
            src={Content}
            className="w-full h-56 rounded-lg border border-gray-700"
            loading="lazy"
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative bg-black border border-gray-800 rounded-xl p-4 shadow-lg hover:shadow-gray-700 transition-shadow duration-300 w-full max-w-md">

      <div className="absolute top-3 right-3 flex space-x-3">
        <button aria-label="Edit">
          <Pencil className="w-4 h-4 cursor-pointer text-gray-400 hover:text-blue-400 transition" />
        </button>
        <button aria-label="Delete">
          <Trash2 className="w-4 h-4 cursor-pointer text-gray-400 hover:text-red-400 transition" />
        </button>
      </div>

      <h3 className="text-white text-lg font-semibold mb-2 pr-12 line-clamp-1">
        {Title}
      </h3>

      {/* Preview */}
      <div className="mb-3">{renderPreview()}</div>

      {/* Created Time */}
      <p className="text-gray-500 text-xs mt-2">
        {new Date(CreatedAt).toLocaleDateString()} •{" "}
        {new Date(CreatedAt).toLocaleTimeString()}
      </p>
    </div>
  );
}

