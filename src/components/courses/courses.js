import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

const CoursesList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="courses" />
        </Datagrid>
    </List>
)
export default CoursesList;