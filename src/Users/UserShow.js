import React from 'react';
import {
  TextField,
  BooleanField,
  Show,
  SimpleShowLayout,
  DateField,
} from 'react-admin';

const UserShow = (props) => (
  <Show {...props}>
      <SimpleShowLayout>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="email" />
          <TextField source="role" label="Função" />
          <DateField label="Data de Criação" source="created_at" />
      </SimpleShowLayout>
  </Show>
);

export default UserShow;