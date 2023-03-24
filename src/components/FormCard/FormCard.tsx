import React, { Component } from 'react';
import { FormFields } from 'pages/FormsPage/FormsPage';

type FormCardProps = Omit<FormFields, 'id'>;

export default class FormCard extends Component<FormCardProps> {
  render() {
    return <div>FormCard</div>;
  }
}
