import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { TextAnimate } from "@/components/ui/text-animate"

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  year?: string;
}

interface ProjectsShowcaseProps {
  projects: Project[];
  layout?: 'grid' | 'list';
}

export function ProjectsShowcase({ projects, layout = 'grid' }: ProjectsShowcaseProps) {
  if (layout === 'list') {
    return (
      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectListItem key={project.id} project={project} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden border-border bg-card transition-all duration-300 hover:border-accent/50">
      {project.imageUrl && (
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-2">
          <TextAnimate once animation="blurIn" as="h3" className="text-balance text-xl font-semibold leading-tight text-foreground">{project.title}</TextAnimate>
          {project.year && (
            <span className="shrink-0 text-sm text-muted-foreground">{project.year}</span>
          )}
        </div>
        <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-muted text-muted-foreground">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary"
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}

function ProjectListItem({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col gap-6 border-b border-border pb-12 last:border-0 md:flex-row">
      {project.imageUrl && (
        <div className="w-full overflow-hidden rounded-lg bg-muted md:w-80 lg:w-96">
          <div className="aspect-video">
            <img
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-balance text-2xl font-semibold leading-tight text-foreground">
            {project.title}
          </h3>
          {project.year && (
            <span className="shrink-0 text-sm text-muted-foreground">{project.year}</span>
          )}
        </div>
        <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-muted text-muted-foreground">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-auto flex gap-4">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary"
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}