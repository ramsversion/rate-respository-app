import React from 'react';
import { Text, View } from 'react-native';
import RepositoryList from './RepositoryList.jsx';
import AppBar from './AppBar.jsx';
import { Routes, Route, Navigate } from 'react-router-native';

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />

            <Routes>
                <Route exact path="/" element={<RepositoryList />} />
                <Route path='/signin' element={<Text>Working on it</Text>} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </View>
    )
}

export default Main;