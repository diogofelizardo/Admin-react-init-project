import React from 'react';
import {
  Create,
  TextInput,
  SimpleForm,
  SelectInput,
} from 'react-admin';

const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" label="Nome" />
      <TextInput source="email" label="Email" />
      <TextInput source="password" label="Senha" />
      <SelectInput source="role" choices={[
          { id: 'ADMIN', name: 'Administrador' },
          { id: 'USER', name: 'Usuário' },
        ]} 
      />
    </SimpleForm>
  </Create>
);

export default UserCreate;