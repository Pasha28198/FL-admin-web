import React from 'react';
import { Datagrid, SimpleList, EmailField, List, TextField } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const UserList = (props) => {

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'))
   
    return(   
        <List {...props}>
            {
                isSmall 
                ?   <SimpleList 
                primaryText={record => record.name}
                secondaryText={record => record.email}
                tertiaryText={record => record.gender}
                    />
                :   <Datagrid rowClick="edit">
                        <TextField source="name" />
                        <EmailField source="email" />
                        <TextField source="gender" />
                        <TextField source="background" />
                    </Datagrid>
            }
            
        </List>
    )
}
export default UserList;