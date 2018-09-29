import {NotFound} from '../../../../Components/NotFound/Page404';

import Uebungsblatt_1 from "../../../Pages/BSc/Mathematik_I/posts/Uebungsblatt_1";
import Uebungsblatt_2 from "../../../Pages/BSc/Mathematik_I/posts/Uebungsblatt_2";
import Uebungsblatt_3 from "../../../Pages/BSc/Mathematik_I/posts/Uebungsblatt_3";

export const week1 = [
    {
        subtitle: "Woche 1"
    }, {
        title: "Übungsblatt 1",
        url: "Uebungsblatt_1",
        component: Uebungsblatt_1
    }, {
        subtitle: "Woche 2"
    }, {
        title: "Übungsblatt 2",
        url: "Uebungsblatt_2",
        component: Uebungsblatt_2
    }, {
        subtitle: "Woche 3"
    }, {
        title: "Übungsblatt 3",
        url: "Uebungsblatt_3",
        component: Uebungsblatt_3
    }, {
        title: "Not Found",
        url: ":NotFound",
        component: NotFound
    }
]