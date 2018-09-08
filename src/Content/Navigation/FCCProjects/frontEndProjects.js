import {Portfolio, TechnicalDocumentationPage, ProductLandingPage, SurveyForm, TributePage} from '../../Pages/FCCProjects/Projects/Projects';
import {NotFound} from '../../../Components/NotFound/Page404';

export const frontEndProjects = [
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
];