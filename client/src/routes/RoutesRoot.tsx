import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Error404 from '../pages/Error404';
import Hero from '../pages/Hero';

export const PATH = {
    HERO: '/hero'

    // LOGIN: '/login',
    // REGISTRATION: '/register',
    // NEW_PASSWORD: '/set-new-password',
    // FORGOT: '/forgot',
    // PROFILE: '/device/ebay',
    // EDIT_PROFILE: '/edit-profile',
    // PACKS: '/packs',
    // CARDS: '/cards',
    // LEARN: '/learn'
}

export const RoutesRoot = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Hero/>}/>
                {/*<Route path={PATH.LOGIN} element={<Login/>}/>*/}
                {/*<Route path={PATH.REGISTRATION} element={<Registration/>}/>*/}
                {/*<Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>*/}
                {/*<Route path={PATH.FORGOT} element={<Forgot/>}/>*/}
                <Route path={PATH.HERO} element={<Hero/>}/>
                {/*<Route path={PATH.EDIT_PROFILE} element={<EditProfile/>}/>*/}
                {/*<Route path={PATH.PACKS} element={<PackList/>}/>*/}
                {/*<Route path={PATH.CARDS + '/:packId'} element={<CardsList/>}/>*/}
                {/*<Route path={PATH.LEARN + '/:packId/:packName/:cardsTotalCount'} element={<Learn/>} />*/}
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
};
