class Citas {
  constructor() {
    this.citas = [];
  }
  agregarCita(cita) {
    this.citas = [...this.citas, cita];
    console.log(this.citas);
  }
  eliminarCita(id) {
    this.citas = this.citas.filter(cita => cita.id !== id);
  }
  edcita(citaActual) {
    this.citas = this.citas.map(cita =>
      cita.id === citaActual.id ? citaActual : cita
    );
  }
} //citas si tendra constructor

export default Citas;
