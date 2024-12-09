import React, { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Header } from 'shared/ui/Header/Header';
import { Footer } from 'shared/ui/Footer/Footer';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Header />
                <div className="content-page">
                    <AppRouter />
                </div>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
