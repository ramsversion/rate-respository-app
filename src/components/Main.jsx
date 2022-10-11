import React from 'react';
import { View } from 'react-native';
import RepositoryList from './RepositoryList.jsx';
import AppBar from './AppBar';
import { Routes, Route, Navigate } from 'react-router-native';
import LogInPages from '../pages/Login.jsx';

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />

            <Routes>
                <Route exact path="/" element={<RepositoryList />} />
                <Route path='/signin' element={<LogInPages />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </View>
    )
}

export default Main;