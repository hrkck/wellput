import Home from '../Pages/Home/Home';
import {NotFound} from '../../Components/NotFound/Page404';

import Projects from "../Pages/Projects/Projects";
import BlenderProjects from '../Pages/Projects/BlenderProjects/BlenderProjects';
import FCCProjects from '../Pages/Projects/FCCProjects/FCCProjects';
import {Portfolio, TechnicalDocumentationPage, ProductLandingPage, SurveyForm, TributePage} from '../Pages/Projects/FCCProjects/Projects/Projects';
import ThisWebsite from '../Pages/Projects/ThisWebsite/ThisWebsite';
import {DisplayingMath} from "../Pages/Projects/ThisWebsite/posts/DisplayingMath"

import BSc from "../Pages/BSc/BSc";
import Betriebswirtschaftslehre_I from '../Pages/BSc/Betriebswirtschaftslehre_I/Betriebswirtschaftslehre_I';
import Informatik_I from "../Pages/BSc/Informatik_I/Informatik_I";
import InformatikUndWirtschaft from "../Pages/BSc/InformatikUndWirtschaft/InformatikUndWirtschaft";
import Mathematik_I from "../Pages/BSc/Mathematik_I/Mathematik_I";
import Uebungsblatt_1 from "../Pages/BSc/Mathematik_I/posts/Uebungsblatt_1";
import Uebungsblatt_2 from "../Pages/BSc/Mathematik_I/posts/Uebungsblatt_2";
import Uebungsblatt_3 from "../Pages/BSc/Mathematik_I/posts/Uebungsblatt_3";
import MenschUndComputer from "../Pages/BSc/MenschUndComputer/MenschUndComputer";
import Mikrooekonomik_I from "../Pages/BSc/Mikroökonomik_I/Mikrooekonomik_I";


export const nav = {
    main: [
        {
            title: "Home",
            exact: true,
            url: "",
            component: Home
        },
        {
            title: "Projects",
            url: "projects",
            component: Projects,
            dropDown: [
                {
                    title: "Blender Projects",
                    url: "BlenderProjects",
                    component: BlenderProjects,
                    posts: [
                        {
                            title: "Not Found",
                            url: ":NotFound",
                            component: NotFound
                        }
                    ]
                }, {
                    title: "FCC Projects",
                    url: "FCCProjects",
                    component: FCCProjects,
                    posts: [
                        {
                            title: "Portfolio",
                            url: "Portfolio",
                            component: Portfolio
                        }, {
                            title: "Technical Documentation Page",
                            url: "TechnicalDocumentationPage",
                            component: TechnicalDocumentationPage
                        }, {
                            title: "Product Landing Page",
                            url: "ProductLandingPage",
                            component: ProductLandingPage
                        }, {
                            title: "Survey Form",
                            url: "SurveyForm",
                            component: SurveyForm
                        }, {
                            title: "Tribute Page",
                            url: "TributePage",
                            component: TributePage
                        }, {
                            title: "Not Found",
                            url: ":NotFound",
                            component: NotFound
                        }
                    ]
                }, {
                    title: "This Website",
                    url: "ThisWebsite",
                    component: ThisWebsite,
                    posts: [
                        {
                            title: "Displaying Mathematical Formulas",
                            url: "DisplayingMath",
                            component: DisplayingMath
                        },
                        {
                            title: "Not Found",
                            url: ":NotFound",
                            component: NotFound
                        }
                    ]
                }, {
                    title: "Not Found",
                    url: ":NotFound",
                    component: NotFound
                }
            ]
        }, 
        {
            title: "BSc",
            url: "BSc",
            dropDown: [
                {
                    dropDownHeader: "HS 18 ↓"
                },
                {
                    title: "Betriebswirtschaftslehre I",
                    url: "Betriebswirtschaftslehre_I",
                    component: Betriebswirtschaftslehre_I,
                    posts: [
                        {
                            title: "Not Found",
                            url: ":NotFound",
                            component: NotFound
                        }
                    ]
                }, {
                    title: "Informatik I",
                    url: "Informatik_I",
                    component: Informatik_I,
                    posts: [
                        {
                            title: "Not Found",
                            url: ":NotFound",
                            component: NotFound
                        }
                    ]
                }, {
                    title: "InformatikUndWirtschaft",
                    url: "InformatikUndWirtschaft",
                    component: InformatikUndWirtschaft,
                    posts: [
                        {
                            title: "Not Found",
                            url: ":NotFound",
                            component: NotFound
                        }
                    ]
                }, {
                    title: "Mathematik I",
                    url: "Mathematik_I",
                    component: Mathematik_I,
                    posts: [
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
                }, {
                    title: "MenschUndComputer",
                    url: "MenschUndComputer",
                    component: MenschUndComputer,
                    posts: [
                        {
                            title: "Not Found",
                            url: ":NotFound",
                            component: NotFound
                        }
                    ]
                }, {
                    title: "Mikrooekonomik I",
                    url: "Mikrooekonomik_I",
                    component: Mikrooekonomik_I,
                    posts: [
                        {
                            title: "Not Found",
                            url: ":NotFound",
                            component: NotFound
                        }
                    ]
                }, {
                    title: "Not Found",
                    url: ":NotFound",
                    component: NotFound
                }, {
                    dropDownHeader: "FS 19 ↓"
                }
            ],
            component: BSc
        }, 
        {
            title: "Not Found",
            url: ":NotFound",
            component: NotFound
        }
    ]
};