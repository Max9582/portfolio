import {
    Book,
    GraduationCap,
    BriefcaseBusiness,
    Layers,
} from "lucide-react";

import { TextAnimate } from "@/components/ui/text-animate"
import { TrajectoryItem } from "@/components/trajectory-item"
import {useTranslations} from 'next-intl';

export default function Page() {
    const t = useTranslations('trajectory');
    return (
        <div className="flex flex-col min-h-screen">

            {/* Main Content */}
            <main className="flex-1 w-full max-w-6xl mx-auto p-6">
                
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Experience */}
                    <section className="flex flex-col gap-4">
                        <h2 className="flex items-center justify-center gap-2 text-xl font-semibold border-b pb-2">
                            <BriefcaseBusiness className="h-5 w-5" /> <TextAnimate once animation="blurIn">{t('experience')}</TextAnimate>
                        </h2>
                        <TrajectoryItem 
                            logoUrl="/img/google.png"
                            altText="Google logo"
                            title={t('experience-1-title')}
                            organization="Google"
                            date={t('experience-1-period')}
                            location={t('wa-us')}
                            description={t('experience-1-description')}
                        />
                    </section>

                    {/* Education */}
                    <section className="flex flex-col gap-4">
                        <h2 className="flex items-center justify-center gap-2 text-xl font-semibold border-b pb-2">
                            <GraduationCap className="h-5 w-5" /><TextAnimate once animation="blurIn">{t('education')}</TextAnimate>
                        </h2>
                        <TrajectoryItem 
                            logoUrl="/img/penn.png"
                            altText="University of Pennsylvaniaw logo"
                            title={t('education-1-title')}
                            organization={t('education-1-institution')}
                            date={t('education-1-period')}
                            location={t('pa-us')}
                            description={t('education-1-description')}
                        />
                    </section>

                    {/* Courses */}
                    <section className="flex flex-col gap-4">
                        <h2 className="flex items-center justify-center gap-2 text-xl font-semibold border-b pb-2">
                            <Book className="h-5 w-5" /><TextAnimate once animation="blurIn">{t('courses')}</TextAnimate>
                        </h2>
                        <TrajectoryItem 
                            logoUrl="/img/kubernetes.svg"
                            altText="Kubernetes logo"
                            title={t('course-6-title')}
                            organization="Kubernetes"
                            date={t('course-6-date')}
                            duration={t('course-6-time')}
                            description={t('course-6-description')}
                        />
                        <TrajectoryItem 
                            logoUrl="/img/coursera.png"
                            altText="Coursera logo"
                            title={t('course-5-title')}
                            organization="Coursera"
                            date={t('course-5-date')}
                            duration={t('course-5-time')}
                            description={t('course-5-description')}
                        />
                        <TrajectoryItem 
                            logoUrl="/img/coursera.png"
                            altText="Coursera logo"
                            title={t('course-4-title')}
                            organization="Coursera"
                            date={t('course-4-date')}
                            duration={t('course-4-time')}
                            description={t('course-4-description')}
                        />
                        <TrajectoryItem 
                            logoUrl="/img/go.png"
                            altText="Go logo"
                            title={t('course-3-title')}
                            organization="Go"
                            date={t('course-3-date')}
                            duration={t('course-3-time')}
                            description={t('course-3-description')}
                        />
                        <TrajectoryItem 
                            logoUrl="/img/microsoft.png"
                            altText="Microsoft logo"
                            title={t('course-2-title')}
                            organization="Microsoft"
                            date={t('course-2-date')}
                            duration={t('course-2-time')}
                            description={t('course-2-description')}
                        />
                        <TrajectoryItem 
                            logoUrl="/img/google.png"
                            altText="Google logo"
                            title={t('course-1-title')}
                            organization="Google"
                            date={t('course-1-date')}
                            duration={t('course-1-time')}
                            description={t('course-1-description')}
                        />
                    </section>

                    {/* Certificates & Others */}
                    <section className="flex flex-col gap-4">
                        <h2 className="flex items-center justify-center gap-2 text-xl font-semibold border-b pb-2">
                            <Layers className="h-5 w-5" /><TextAnimate once animation="blurIn">{t('certificates')}</TextAnimate>
                        </h2>

                        <TrajectoryItem 
                            logoUrl="/img/aws.png"
                            altText="AWS logo"
                            title={t('certificate-1-title')}
                            organization="Amazon Web Services"
                            date={t('certificate-1-date')}
                            description={t('certificate-1-description')}
                        />
                    </section>

                </div>
            </main>

        </div>
    );
}