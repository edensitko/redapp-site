import React from 'react';
import ProjectsList from '@/components/ProjectsList';

export const metadata = {
  title: 'Projects - RedApp',
  description: 'Check out our portfolio of successful projects and digital solutions we\'ve delivered for our clients.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <ProjectsList />
    </main>
  );
}
