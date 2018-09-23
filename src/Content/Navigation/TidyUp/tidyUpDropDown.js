import Important from '../../Pages/TidyUp/DropDownPages/Important';
import Organize from '../../Pages/TidyUp/DropDownPages/Organize';
import Notes from '../../Pages/TidyUp/DropDownPages/Notes';

import {NotFound} from '../../../Components/NotFound/Page404';

export const tidyUpDropDown = [
    {
        title: "Important",
        url: "important",
        component: Important
    }, {
        title: "Organize",
        url: "organize",
        component: Organize
    }, {
        title: "Notes",
        url: "notes",
        component: Notes
    }, {
        title: "Not Found",
        url: ":NotFound",
        component: NotFound
    }
];