import { Shareicon } from "../icon/Shareicon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}
export function Card({ title, link, type }: CardProps) {
  return (
    <>
      <div className="flex gap-2 mt-2">
        <div className="bg-white rounded-md shadow-md border-gray-200 w-sm p-6 border">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <div className="text-gray-500">
                <Shareicon size="md" />
              </div>
              <div>{title}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-gray-500">
                <a href={link} target="_blank">
                  <Shareicon size="md" />
                </a>
              </div>

              <div className="text-gray-500">
                <Shareicon size="md" />
              </div>
            </div>
          </div>
          <div >
            {type === "twitter" && (
              <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a>
              </blockquote>
            )}
            {type === "youtube" && (
              <iframe
                className="w-full p-3 h-50"
                width="560"
                height="315"
                src={link.replace("watch?v=", "embed/")}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
