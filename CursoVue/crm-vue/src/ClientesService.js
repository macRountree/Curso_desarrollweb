import api from './lib/axios';

export default {
  obtenerClientes() {
    return api.get('clientes');
  },

  agregarCliente(data) {
    return api.post('clientes', data);
  },
  //* Obtener cliente especifico.. necesitamos id
  obtenerCliente(id) {
    return api.get(`/clientes/${id}`);
    console.log(id);
  },

  actualizarCliente(id, data) {
    //*PATCH aplica modificaciones parciales
    //*PUT
    return api.patch(`/clientes/${id}`, data);
    // console.log(id);
    // console.log(data);
  },
  cambiarEstado(id, data) {
    return api.patch(`/clientes/${id}`, data);
  },

  eliminarCliente(id) {
    return api.delete(`/clientes/${id}`);
  },
};
