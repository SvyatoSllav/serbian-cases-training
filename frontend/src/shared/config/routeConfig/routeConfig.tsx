import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { NounPage } from 'pages/NounPage';
import { AdjectivePage } from 'pages/AdjectivePage';
import { PronounPage } from 'pages/PronounPage';

export enum AppRoutes {
    MAIN = 'main',
    NOUNS = 'noun',
    ADJECTIVES = 'adjacent',
    PRONOUN = 'pronoun',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOUNS]: '/noun',
    [AppRoutes.ADJECTIVES]: '/adjective',
    [AppRoutes.PRONOUN]: '/pronoun',
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {

    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.NOUNS]: {
        path: RoutePath.noun,
        element: <NounPage />,
    },
    [AppRoutes.ADJECTIVES]: {
        path: RoutePath.adjacent,
        element: <AdjectivePage />,
    },
    [AppRoutes.PRONOUN]: {
        path: RoutePath.pronoun,
        element: <PronounPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
