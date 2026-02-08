"use client"

import { useState } from 'react';
import { Grid2x2, List } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate"
import { Button } from "@/components/ui/button"
import { ProjectsShowcase, type Project } from '@/components/projects-showcase';
import {useTranslations} from 'next-intl';

export default function Page() {
    const [layout, setLayout] = useState<'grid' | 'list'>('grid');
    const t = useTranslations('Projects');
    const myProjects: Project[] = [{
        id: '1',
        title: t('project-1-title'),
        description: t('project-1-desciption'),
        technologies: ['HTML', 'CSS', 'JavaScript'],
        imageUrl: 'placeholder.svg',
        liveUrl: 'https://github.com/',
        githubUrl: 'https://github.com/',
        year: t('project-1-year'),
    }];
    return (
        <div className="flex flex-col min-h-screen">

        {/* Main Content */}
        <div className="bg-background flex-1">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <TextAnimate once animation="blurIn" as="h1" className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{t('title')}</TextAnimate>
                            <TextAnimate once animation="blurIn" as="p" className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">{t('subtitle')}</TextAnimate>
                        </div>
                        <div className="gap-2 hidden md:flex">
                            <Button
                                variant={layout === 'grid' ? 'default' : 'outline'}
                                onClick={() => setLayout('grid')}
                                size="sm"
                            >
                                <Grid2x2 />
                            </Button>
                            <Button
                                variant={layout === 'list' ? 'default' : 'outline'}
                                onClick={() => setLayout('list')}
                                size="sm"
                            >
                                <List />
                            </Button>
                        </div>
                    </div>
                </div>

                <ProjectsShowcase projects={myProjects} layout={layout} />
            </div>
        </div>

        </div>
    );
}