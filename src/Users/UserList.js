import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  EditButton,
  ShowButton,
} from 'react-admin';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

const UserList = props => (
  <Card>
    <CardHeader title="Lista de Usuários" />
    <CardContent>
      <List {...props}>
          <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="role" label="Função" />
            <EditButton />
            <ShowButton />
          </Datagrid>
        </List>
    </CardContent>
  </Card>              
);

export default UserList;