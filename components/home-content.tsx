"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { useTheme } from "next-themes"
import { Particles } from "@/components/ui/particles"
import { TextAnimate } from "@/components/ui/text-animate"
import { useState, useEffect } from "react"
import { IconCloud } from "@/components/ui/icon-cloud"
import {useTranslations} from 'next-intl';
import { ShimmerButton } from "@/components/ui/shimmer-button"

export function HomeContent() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const { resolvedTheme } = useTheme();
    const color = resolvedTheme === "light" ? "#000000" : "#ffffff";
    const shimmerColor = resolvedTheme === "light" ? "#3b82f6" : "#ffffff";
    const t = useTranslations('HomeContent');
    const images = [
        "/img/html.png",
        "/img/go.png",
        "/img/css.png",
        "/img/postgresql.svg",
        "/img/java.png",
        "/img/javascript.png",
        "/img/kubernetes.svg",
        "/img/aws.png",
        resolvedTheme === "dark" ? "/img/next-js-white.svg" : "/img/next-js.svg",
        "/img/python.png",
        "/img/react.svg",
        "/img/docker.svg",
        "/img/tailwind.svg",
        "/img/typescript.svg",
    ]
    return (
        <main className="flex flex-1 flex-col items-center justify-center px-4 relative w-full">
            
            <div className="absolute inset-0 -z-10">
                <Particles className="absolute inset-0" color={color} refresh={true}/>
            </div>

            {/* GRID */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-6 md:gap-12 z-10">
                
                {/* LEFT */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 flex-1">
                    {mounted ? (
                        <TypingAnimation className="font-extrabold text-3xl lg:text-4xl" typeSpeed={50}>
                            {t('name')}
                        </TypingAnimation>
                    ) : (
                        <span className="font-extrabold text-3xl lg:text-4xl opacity-0">
                            {t('name')}
                        </span>
                    )}

                    <div className="flex flex-row gap-4 justify-center md:justify-start">
                        <Link href="https://github.com/" className="flex items-center justify-center gap-2">
                            <ShimmerButton className="h-10 w-40 md:h-12 md:w-48" shimmerColor={shimmerColor} shimmerSize="0.2em">
                                <Github className="w-4 h-4" />
                                <TextAnimate once animation="blurIn" className="whitespace-nowrap text-xs md:text-sm">
                                    {t('github')}
                                </TextAnimate>
                            </ShimmerButton>
                        </Link>
                        <Button className="h-10 w-40 md:h-12 md:w-48 dark:text-white rounded-full" asChild>
                            <Link href="https://www.linkedin.com/">
                                <Linkedin />
                                <TextAnimate once animation="blurIn" className="whitespace-nowrap text-xs md:text-sm">
                                    {t('linkedin')}
                                </TextAnimate>
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex-1 flex justify-center items-center w-full max-w-[400px]">
                    <IconCloud images={images} />
                </div>
            </div>
        </main>
    )
}