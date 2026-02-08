import Image from 'next/image'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { TextAnimate } from "@/components/ui/text-animate"

interface SkillCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  invert?: boolean;
}

export function SkillCard({ title, description, imageSrc, imageAlt, invert}: SkillCardProps) {

  const imageClassName = invert ? "dark:invert" : "";
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="w-[30%] sm:w-32 flex-none cursor-pointer hover:bg-accent transition-colors border-muted bg-card/50 aspect-square flex items-center justify-center">
          <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
            <Image 
              src={imageSrc} 
              width={48} 
              height={48} 
              alt={imageAlt || title}
              className={imageClassName}
            />
            <span className="font-semibold text-sm tracking-tight">
              <TextAnimate once animation="blurIn">
                {title}
              </TextAnimate>
            </span>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col gap-2">
            <Image 
              src={imageSrc} 
              width={48} 
              height={48} 
              alt={imageAlt || title}
              className={imageClassName}
            />
            {title}
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}