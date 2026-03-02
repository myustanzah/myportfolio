import ProjectDetailView from "@/feature/Projects/views/ProjectDetailView";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

 async function ProjectLayout({ params } : Props){ 
    const resolvedParams = await params;
    return <ProjectDetailView params={{ slug: resolvedParams.slug }} />
 }

 export default ProjectLayout;