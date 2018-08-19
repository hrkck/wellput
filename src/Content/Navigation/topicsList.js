import {defaultComponent, comp1, comp2, comp3} from '../Topics/Topics';
import {NotFound} from '../../Components/core/NotFound/Page404';

export const topicsList = [
    {
        title: "Post 1",
        url: "post-1",
        component: comp1
    }, {
        title: "Post 2",
        url: "post-2",
        component: comp2
    }, {
        title: "Post 3",
        url: "post-3",
        component: comp3
    }, {
        title: "Not Found",
        url: ":NotFound",
        component: NotFound
    }
];

export default defaultComponent;
