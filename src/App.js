import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './components/users/users';
import CoursesList from './components/courses/courses';
import Dashboard from './components/dashboard/dashboard';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function App() {
  return (
    <div>
      <Admin dashboard={Dashboard} dataProvider={dataProvider} >
        <Resource name='users' list={UserList} />
        <Resource name='courses' list={CoursesList} />
      </Admin>
    </div>
  );
}

export default App;
