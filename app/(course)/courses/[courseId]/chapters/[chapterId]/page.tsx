import { getChapter } from "@/actions/get-chapter";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ChapterIdPage = async ({
    params
}: {
    params: { courseId: string; chapterId: string}
}) => {
    const { userId } = auth();

    if(!userId) {
        return redirect("/");
    }

    const {
        chapter,
        course,
        muxData,
        attachments,
        nextChapter,
        userProgress,
        purchase,
    } = await getChapter({
        userId,
        chapterId: params.chapterId,
        courseId: params.courseId,
    });

    if (!chapter || !course) {
        return redirect("/");
    }

    const isLocked = !chapter.isFree && !purchase;
    const completeOnEnd = !!purchase && !userProgress?.isCompleted;
    return ( 
        <div>
            {userProgress?.isCompleted &&  (
                <Banner
                    variant="success"
                    label="You already completed this chapter."
                />
            )}
            {userProgress?.isCompleted &&  (
                <Banner
                    variant="success"
                    label="You already completed this chapter."
        </div>
     );
}
 
export default ChapterIdPage;