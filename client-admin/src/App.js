import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MyProvider from './contexts/MyProvider';
import Login from './components/LoginComponent';
import Main from './components/MainComponent';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Main />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </MyProvider>
    );
  }
}

export default App;
