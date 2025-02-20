import React from 'react';
import ProjectDetail from '@/components/ProjectDetail';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export const metadata = {
  title: 'Project Details - RedApp',
  description: 'Detailed information about our successful project implementations and solutions.',
};

// Pre-render these paths at build time
export function generateStaticParams() {
  return [
    { id: 'project-1' },
    { id: 'project-2' },
    { id: 'project-3' },
    { id: 'project-4' },
    { id: 'project-5' },
    { id: 'project-6' }
  ];
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <main className="min-h-screen">
      <ProjectDetail id={params.id} />
    </main>
  );
}
