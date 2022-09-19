export let categories = [
    {
        name: 'Task',
        imageSrc: '../image/shopping-cart.png',
        active: 1,
        archived: 0
    },
    {
        name: 'Random Thought',
        imageSrc: '../image/thought.png',
        active: 0,
        archived: 0
    },
    {
        name: 'Idea',
        imageSrc: '../image/idea.png',
        active: 1,
        archived: 0
    }
];

export const getImageSrcByName = (name) => {
    return categories.filter(category => category.name === name)?.[0].imageSrc
}