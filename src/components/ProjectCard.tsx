import type { Project, ProjectVertical } from "@/data/types";

const verticalConfig: Record<ProjectVertical, { color: string; icon: string }> = {
  civic: { color: "border-blue-500 bg-blue-50", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  entertainment: { color: "border-purple-500 bg-purple-50", icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" },
  recreation: { color: "border-green-500 bg-green-50", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
  hotel: { color: "border-amber-500 bg-amber-50", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" },
  retail: { color: "border-rose-500 bg-rose-50", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
  residential: { color: "border-sky-500 bg-sky-50", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" },
  educational: { color: "border-indigo-500 bg-indigo-50", icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
  office: { color: "border-gray-500 bg-gray-50", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  healthcare: { color: "border-teal-500 bg-teal-50", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  transit: { color: "border-orange-500 bg-orange-50", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const config = verticalConfig[project.vertical];
  return (
    <div className={`bg-white rounded-lg shadow-sm border-l-4 hover:shadow-md transition-shadow ${config.color.split(" ")[0]}`}>
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${config.color.split(" ")[1]}`}>
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={config.icon} />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1">{project.name}</h3>
            {project.client && (
              <p className="text-accent text-sm font-medium mb-1">{project.client}</p>
            )}
            {project.location && (
              <p className="text-xs text-gray-400 mb-2">{project.location}</p>
            )}
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mt-3">
          {project.description}
        </p>
        <span className="inline-block mt-3 px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 capitalize">
          {project.vertical}
        </span>
      </div>
    </div>
  );
}
