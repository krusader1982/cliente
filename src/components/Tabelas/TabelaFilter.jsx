import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  {
    field: 'nome',
    headerName: 'Nome',    
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,    
  },
  {
    field: 'sexo',
    headerName: 'Sexo',
    width: 50,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
  {
    field: 'data_nascimento',
    headerName: 'Data de Nascimento',
    type: 'date',
    width: 110,
    editable: true,
  },
  {
    field: 'celular',
    headerName: 'Celular',
    width: 150,
    editable: true,
  },
  
];

const rows = [
    { id: 1, nome: 'Samuel Dias', sexo: 'M', email: 'sam@gmail.com', data_nascimento:'12/07/1982', celular:'12-988094081' },
    { id: 2, nome: 'Melisandre', sexo: 'M', email: 'sam@gmail.com', data_nascimento:'12/07/1982', celular:'12-988094081' },
    { id: 3, nome: 'Arya', sexo: 'M', email: 'sam@gmail.com', data_nascimento:'12/07/1982', celular:'12-988094081' },
    { id: 4, nome: 'Cersey', sexo: 'M', email: 'sam@gmail.com', data_nascimento:'12/07/1982', celular:'12-988094081' },
    { id: 5, nome: 'Jayme', sexo: 'M', email: 'sam@gmail.com', data_nascimento:'12/07/1982', celular:'12-988094081' },
    { id: 6, nome: 'Samuel Xavier', sexo: 'M', email: 'sam@gmail.com', data_nascimento:'12/07/1982', celular:'12-988094081' },
    { id: 7, nome: 'Sam', sexo: 'M', email: 'sam@gmail.com', data_nascimento:'12/07/1982', celular:'12-988094081' },
    { id: 8, nome: 'Samuel', sexo: 'M', email: 'sam@gmail.com', data_nascimento:'12/07/1982', celular:'12-988094081' },
    { id: 9, nome: 'Samuel', sexo: 'M', email: 'sam@gmail.com', data_nascimento:'12/07/1982', celular:'12-988094081' },
  ];


const TabelaFilter = () => {    
    
      return (
        <Box sx={{ marginTop: '30px',marginLeft: '30px', height: 400, width: '80%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      );
}

export default TabelaFilter