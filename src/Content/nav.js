import {NotFound} from '../Components/NotFound/Page404';

import Home from './Home/Home';

import Projects from "./Projects/Projects";
import BlenderProjects from './Projects/BlenderProjects/BlenderProjects';
import FCCProjects from './Projects/FCCProjects/FCCProjects';
import {Portfolio, TechnicalDocumentationPage, ProductLandingPage, SurveyForm, TributePage} from './Projects/FCCProjects/Projects/Projects';
import ThisWebsite from './Projects/ThisWebsite/ThisWebsite';
import {DisplayingMath} from "./Projects/ThisWebsite/posts/DisplayingMath"

import BSc from "./BSc/BSc";
import Betriebswirtschaftslehre_I from './BSc/Betriebswirtschaftslehre_I/Betriebswirtschaftslehre_I';
import Informatik_I from "./BSc/Informatik_I/Informatik_I";
import InformatikUndWirtschaft from "./BSc/InformatikUndWirtschaft/InformatikUndWirtschaft";
import Mathematik_I from "./BSc/Mathematik_I/Mathematik_I";
import Uebungsblatt_1 from "./BSc/Mathematik_I/posts/Uebungsblatt_1";
import Uebungsblatt_2 from "./BSc/Mathematik_I/posts/Uebungsblatt_2";
import Uebungsblatt_3 from "./BSc/Mathematik_I/posts/Uebungsblatt_3";
import MenschUndComputer from "./BSc/MenschUndComputer/MenschUndComputer";
import Mikrooekonomik_I from "./BSc/Mikroökonomik_I/Mikrooekonomik_I";


// export const nav = {
//     main: [
//         {
//             title: "Home",
//             exact: true,
//             url: "",
//             component: Home
//         },
//         {
//             title: "Projects",
//             url: "projects",
//             component: Projects,
//             dropDown: [
//                 {
//                     title: "Blender Projects",
//                     url: "BlenderProjects",
//                     component: BlenderProjects,
//                     posts: [
//                         {
//                             title: "Not Found",
//                             url: ":NotFound",
//                             component: NotFound
//                         }
//                     ]
//                 }, {
//                     title: "FCC Projects",
//                     url: "FCCProjects",
//                     component: FCCProjects,
//                     posts: [
//                         {
//                             title: "Portfolio",
//                             url: "Portfolio",
//                             component: Portfolio
//                         }, {
//                             title: "Technical Documentation Page",
//                             url: "TechnicalDocumentationPage",
//                             component: TechnicalDocumentationPage
//                         }, {
//                             title: "Product Landing Page",
//                             url: "ProductLandingPage",
//                             component: ProductLandingPage
//                         }, {
//                             title: "Survey Form",
//                             url: "SurveyForm",
//                             component: SurveyForm
//                         }, {
//                             title: "Tribute Page",
//                             url: "TributePage",
//                             component: TributePage
//                         }, {
//                             title: "Not Found",
//                             url: ":NotFound",
//                             component: NotFound
//                         }
//                     ]
//                 }, {
//                     title: "This Website",
//                     url: "ThisWebsite",
//                     component: ThisWebsite,
//                     posts: [
//                         {
//                             title: "Displaying Mathematical Formulas",
//                             url: "DisplayingMath",
//                             component: DisplayingMath
//                         },
//                         {
//                             title: "Not Found",
//                             url: ":NotFound",
//                             component: NotFound
//                         }
//                     ]
//                 }, {
//                     title: "Not Found",
//                     url: ":NotFound",
//                     component: NotFound
//                 }
//             ]
//         }, 
//         {
//             title: "BSc",
//             url: "BSc",
//             dropDown: [
//                 {
//                     dropDownHeader: "HS 18 ↓"
//                 },
//                 {
//                     title: "Betriebswirtschaftslehre I",
//                     url: "Betriebswirtschaftslehre_I",
//                     component: Betriebswirtschaftslehre_I,
//                     posts: [
//                         {
//                             title: "Not Found",
//                             url: ":NotFound",
//                             component: NotFound
//                         }
//                     ]
//                 }, {
//                     title: "Informatik I",
//                     url: "Informatik_I",
//                     component: Informatik_I,
//                     posts: [
//                         {
//                             title: "Not Found",
//                             url: ":NotFound",
//                             component: NotFound
//                         }
//                     ]
//                 }, {
//                     title: "InformatikUndWirtschaft",
//                     url: "InformatikUndWirtschaft",
//                     component: InformatikUndWirtschaft,
//                     posts: [
//                         {
//                             title: "Not Found",
//                             url: ":NotFound",
//                             component: NotFound
//                         }
//                     ]
//                 }, {
//                     title: "Mathematik I",
//                     url: "Mathematik_I",
//                     component: Mathematik_I,
//                     posts: [
//                         {
//                             subtitle: "Woche 1"
//                         }, {
//                             title: "Übungsblatt 1",
//                             url: "Uebungsblatt_1",
//                             component: Uebungsblatt_1
//                         }, {
//                             subtitle: "Woche 2"
//                         }, {
//                             title: "Übungsblatt 2",
//                             url: "Uebungsblatt_2",
//                             component: Uebungsblatt_2
//                         }, {
//                             subtitle: "Woche 3"
//                         }, {
//                             title: "Übungsblatt 3",
//                             url: "Uebungsblatt_3",
//                             component: Uebungsblatt_3
//                         }, {
//                             title: "Not Found",
//                             url: ":NotFound",
//                             component: NotFound
//                         }
//                     ]
//                 }, {
//                     title: "MenschUndComputer",
//                     url: "MenschUndComputer",
//                     component: MenschUndComputer,
//                     posts: [
//                         {
//                             title: "Not Found",
//                             url: ":NotFound",
//                             component: NotFound
//                         }
//                     ]
//                 }, {
//                     title: "Mikrooekonomik I",
//                     url: "Mikrooekonomik_I",
//                     component: Mikrooekonomik_I,
//                     posts: [
//                         {
//                             title: "Not Found",
//                             url: ":NotFound",
//                             component: NotFound
//                         }
//                     ]
//                 }, {
//                     title: "Not Found",
//                     url: ":NotFound",
//                     component: NotFound
//                 }, {
//                     dropDownHeader: "FS 19 ↓"
//                 }
//             ],
//             component: BSc
//         }, 
//         {
//             title: "Not Found",
//             url: ":NotFound",
//             component: NotFound
//         }
//     ]
// };

export const nav = {
    Home: {
        title: "Home",
        exact: true,
        url: "",
        component: Home
    },
    Projects: {
        title: "Projects",
        url: "projects",
        component: Projects,
        dropDown: {
            BlenderProjects: {
                title: "Blender Projects",
                url: "BlenderProjects",
                component: BlenderProjects,
                posts: {
                    NotFound: {
                        title: "Not Found",
                        url: ":NotFound",
                        component: NotFound
                    }
                }
            },
            FCCProjects: {
                title: "FCC Projects",
                url: "FCCProjects",
                component: FCCProjects,
                posts: {
                    Portfolio: {
                        title: "Portfolio",
                        url: "Portfolio",
                        component: Portfolio
                    }, 
                    TechnicalDocumentationPage: {
                        title: "Technical Documentation Page",
                        url: "TechnicalDocumentationPage",
                        component: TechnicalDocumentationPage
                    },
                    ProductLandingPage: {
                        title: "Product Landing Page",
                        url: "ProductLandingPage",
                        component: ProductLandingPage
                    }, 
                    SurveyForm: {
                        title: "Survey Form",
                        url: "SurveyForm",
                        component: SurveyForm
                    },
                    TributePage: {
                        title: "Tribute Page",
                        url: "TributePage",
                        component: TributePage
                    }, 
                    NotFound: {
                        title: "Not Found",
                        url: ":NotFound",
                        component: NotFound
                    }
                }
            }, 
            ThisWebsite: {
                title: "This Website",
                url: "ThisWebsite",
                component: ThisWebsite,
                posts: {
                    DisplayingMath: {
                        title: "Displaying Mathematical Formulas",
                        url: "DisplayingMath",
                        component: DisplayingMath
                    }, 
                    NotFound: {
                        title: "Not Found",
                        url: ":NotFound",
                        component: NotFound
                    }
                }, 
                NotFound: {
                    title: "Not Found",
                    url: ":NotFound",
                    component: NotFound
                }
            }
        }
    },
    BSc: {
        title: "BSc",
        url: "BSc",
        dropDown: {
            HS18: {
                dropDownHeader: "HS 18 ↓"
            },
            Betriebswirtschaftslehre_I: {
                title: "Betriebswirtschaftslehre I",
                url: "Betriebswirtschaftslehre_I",
                component: Betriebswirtschaftslehre_I,
                posts: {
                    NotFound: {
                        title: "Not Found",
                        url: ":NotFound",
                        component: NotFound
                    }
                }
            }, 
            Informatik_I: {
                title: "Informatik I",
                url: "Informatik_I",
                component: Informatik_I,
                posts: {
                    NotFound: {
                        title: "Not Found",
                        url: ":NotFound",
                        component: NotFound
                    }
                }
            }, 
            InformatikUndWirtschaft: {
                title: "InformatikUndWirtschaft",
                url: "InformatikUndWirtschaft",
                component: InformatikUndWirtschaft,
                posts: {
                    NotFound: {
                        title: "Not Found",
                        url: ":NotFound",
                        component: NotFound
                    }
                }
            }, 
            Mathematik_I: {
                title: "Mathematik I",
                url: "Mathematik_I",
                component: Mathematik_I,
                posts: {
                    woche1: {
                        subtitle: "Woche 1"
                    }, 
                    Uebungsblatt_1: {
                        title: "Übungsblatt 1",
                        url: "Uebungsblatt_1",
                        component: Uebungsblatt_1
                    },
                    woche2: {
                        subtitle: "Woche 2"
                    },
                    Uebungsblatt_2: {
                        title: "Übungsblatt 2",
                        url: "Uebungsblatt_2",
                        component: Uebungsblatt_2
                    }, 
                    woche3: {
                        subtitle: "Woche 3"
                    },
                    Uebungsblatt_3: {
                        title: "Übungsblatt 3",
                        url: "Uebungsblatt_3",
                        component: Uebungsblatt_3
                    }, 
                    NotFound: {
                        title: "Not Found",
                        url: ":NotFound",
                        component: NotFound
                    }
                }
            }, 
            MenschUndComputer: {
                title: "MenschUndComputer",
                url: "MenschUndComputer",
                component: MenschUndComputer,
                posts: {
                    NotFound: {
                        title: "Not Found",
                        url: ":NotFound",
                        component: NotFound
                    }
                }
            }, 
            Mikrooekonomik_I: {
                title: "Mikrooekonomik I",
                url: "Mikrooekonomik_I",
                component: Mikrooekonomik_I,
                posts: {
                    NotFound: {
                        title: "Not Found",
                        url: ":NotFound",
                        component: NotFound
                    }
                }
            }, 
            NotFound: {
                title: "Not Found",
                url: ":NotFound",
                component: NotFound
            }, 
            FS19: {
                dropDownHeader: "FS 19 ↓"
            }
        },
        component: BSc
    }, 
    NotFound: {
        title: "Not Found",
        url: ":NotFound",
        component: NotFound
    }
};