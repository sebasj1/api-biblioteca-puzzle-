import { Day_card } from "../components/day_card";

const days = [
  { day: "Lunes", open: 10, close: 20 },
  { day: "Martes", open: 10, close: 20 },
  { day: "Miercoles", open: 10, close: 20 },
  { day: "Jueves", open: 10, close: 20 },
  { day: "Viernes", open: 10, close: 20 },
  { day: "Sábado", open: 10, close: 20 },
  { day: "Domingo", open: 10, close: 15 },
];

export const Calendary = () => {
  return (
    <>
        {/*<!-- Sección de encabezado -->*/}
        <header className="section__container__general ">
          {/* <!-- Contenido del encabezado -->*/}
          <div className="header__content">
            <span className="bg__blur"></span>
            <span className="bg__blur header__blur"></span>
            <h1 id="contacto_titulo">
              TENEMOS UN PRESUPUESTO<span> PARA VOS</span>
            </h1>
            <p>
              Nuestro plan de precios viene con varios niveles de membresía,
              cada uno de ellos diseñado para satisfacer diferentes preferencias
              y aspiraciones de acondicionamiento físico.
            </p>
          </div>
        </header>

        <section id="agendaTurnos">
          <div className="col-12 form__agenda">
            <div className="ag_datosUsuario">
              <label for="nombre">Nombre para agendar tu turno: </label>
              <input
                type="text"
                className="inputs__agenda"
                id="nombreUsuario"
                placeholder="  Ingrese su nombre "
              />
              <button className="btn " id="ag_enviarNombre">
                Enviar
              </button>
              <a
                className="btn ag_nueva_consulta"
                hidden
                href="agenda.html"
                id="ag_NConsulta"
              >
                Nueva consulta
              </a>
              <p className="saludoUser"></p>
            </div>
            <div className="row agendaSemana" id="diasSemana">
              {days.map((elem, index) => {
                return (
                  <Day_card
                    day={elem.day}
                    open={elem.open}
                    close={elem.close}
                  />
                );
              })}
             
               
            </div>
          </div>
          <button className="btn centrar " hidden id="ag_reservaDias">
            Reservar turnos
          </button>

          <div className="ag_precioFinal" hidden>
            <p className="precioFinal "></p>
          </div>
        </section>

       
      
     
      <script src="./script.js"></script>
    </>
  );
};
