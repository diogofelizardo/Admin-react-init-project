import React from 'react';
import {
  Edit,
  TextInput,
  SimpleForm,
  SelectInput,
} from 'react-admin';

const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="oldPassword" label="Antiga Senha" />
      <TextInput source="password" label="Nova Senha" />
      <SelectInput source="role" choices={[
          { id: 'ADMIN', name: 'Administrador' },
          { id: 'USER', name: 'Usuário' },
        ]} 
      />
    </SimpleForm>
  </Edit> 
);

export default UserEdit;