import Betriebswirtschaftslehre_I from '../../Pages/BSc/Betriebswirtschaftslehre_I/Betriebswirtschaftslehre_I';
import Informatik_I from "../../Pages/BSc/Informatik_I/Informatik_I";
import InformatikUndWirtschaft from "../../Pages/BSc/InformatikUndWirtschaft/InformatikUndWirtschaft";
import Mathematik_I from "../../Pages/BSc/Mathematik_I/Mathematik_I";
import MenschUndComputer from "../../Pages/BSc/MenschUndComputer/MenschUndComputer";
import Mikrooekonomik_I from "../../Pages/BSc/Mikroökonomik_I/Mikrooekonomik_I";

import {
    NotFound
} from '../../../Components/NotFound/Page404';

export const BScDropDown = [{
        dropDownHeader: "HS 18 ↓"
    },
    {
        title: "Betriebswirtschaftslehre I",
        url: "Betriebswirtschaftslehre_I",
        component: Betriebswirtschaftslehre_I
    }, {
        title: "Informatik I",
        url: "Informatik_I",
        component: Informatik_I
    }, {
        title: "InformatikUndWirtschaft",
        url: "InformatikUndWirtschaft",
        component: InformatikUndWirtschaft
    }, {
        title: "Mathematik I",
        url: "Mathematik_I",
        component: Mathematik_I
    }, {
        title: "MenschUndComputer",
        url: "MenschUndComputer",
        component: MenschUndComputer
    }, {
        title: "Mikrooekonomik I",
        url: "Mikrooekonomik_I",
        component: Mikrooekonomik_I
    }, {
        title: "Not Found",
        url: ":NotFound",
        component: NotFound
    }, {
        dropDownHeader: "FS 19 ↓"
    }
];