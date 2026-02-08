"use client"

import { SkillCard } from "@/components/skill"
import {useTranslations} from 'next-intl';

export default function Page() {
    const t = useTranslations('Skills');
    const skills = [
      {
        title: "HTML",
        imageSrc: "/img/html.png",
        description: t('html'),
      },
      {
        title: "CSS",
        imageSrc: "/img/css.png",
        description: t('css'),
      },
      {
        title: "JavaScript",
        imageSrc: "/img/javascript.png",
        description: t('javascript')
      },
      {
        title: "TypeScript",
        imageSrc: "/img/typescript.svg",
        description: t('typescript')
      },
      {
        title: "React",
        imageSrc: "/img/react.svg",
        description: t('react')
      },
      {
        title: "Next.js",
        imageSrc: "/img/next-js.svg",
        description: t('nextjs'),
        invert: true
      },
      {
        title: "Tailwind",
        imageSrc: "/img/tailwind.svg",
        description: t('tailwind')
      },
      {
        title: "Docker",
        imageSrc: "/img/docker.svg",
        description: t('docker'),
      },
      {
        title: "Kubernetes",
        imageSrc: "/img/kubernetes.svg",
        description: t('kubernetes')
      },
      {
        title: "AWS",
        imageSrc: "/img/aws.png",
        description: t('aws')
      },
      {
        title: "Git",
        imageSrc: "/img/git.png",
        description: t('git')
      },
      {
        title: "PostgreSQL",
        imageSrc: "/img/postgresql.svg",
        description: t('postgresql')
      },
      {
        title: "Python",
        imageSrc: "/img/python.png",
        description: t('python')
      },
      {
        title: "Go",
        imageSrc: "/img/go.png",
        description: t('go')
      },
      {
        title: "Rust",
        imageSrc: "/img/rust.svg",
        description: t('rust'),
        invert: true
      }
    ];
    return (
        <div className="flex flex-col min-h-[calc(100vh-64px-80px)]">
        
        
        {/* Main Content */}
        <main className="flex flex-wrap justify-center gap-2 md:gap-6 px-4 py-10 max-w-3xl mx-auto flex-grow">

            {skills.map((skill) => (
                <SkillCard key={skill.title} {...skill} />
            ))}

        </main>

        
        </div>
    );
}