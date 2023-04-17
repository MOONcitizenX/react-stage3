import { createSlice } from '@reduxjs/toolkit';
import { FormDataWithId } from 'components/ReportForm/ReportForm.schema';

interface ReportFormsState {
  forms: FormDataWithId[];
}

const initialState: ReportFormsState = {
  forms: [],
};

const reportFormSlice = createSlice({
  name: 'reportForm',
  initialState,
  reducers: {
    addCard(state, action) {
      state.forms.push(action.payload);
    },
  },
});

export const { addCard } = reportFormSlice.actions;

export default reportFormSlice.reducer;
