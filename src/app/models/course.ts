export interface Course {
    id: number;
    title: string;
    img: string;
    author: string;
    duration: number;
    type: type;

}

enum type{
    course = 'course',
    videotutorial = 'videotutorial',
    web= 'web'
}