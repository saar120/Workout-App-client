import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker as MUIdatePicker } from "@mui/lab/";

export default function DatePicker({ label, value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MUIdatePicker
        label={label}
        value={value}
        onChange={onChange}
        inputFormat="dd/MM/yyyy"
        required
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
