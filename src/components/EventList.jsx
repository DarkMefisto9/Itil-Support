import React from 'react';
import '../assets/styles/components/EventList.scss'

const EventList = () => {
  const categories = [];

  return (
    <React.Fragment>
      <div className="EventList">
        <h2>Listado de Casos</h2>

        <table border="1">
          <thead>
            <tr>
              <th>Numero de Caso</th>
              <th>Usuario</th>
              <th>Prioridad</th>
              <th>Tiempo Restante</th>
              <th>Estado</th>
              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>10001</th>
              <td>Pedro</td>
              <td>Alta</td>
              <td>1 Hora</td>
              <td>Abierto</td>
              <td><a href="/event/details">Ver Mas</a></td>
            </tr>
            <tr>
              <th>10002</th>
              <td>Carlos</td>
              <td>Media</td>
              <td>7 Horas</td>
              <td>Abierto</td>
              <td><a href="/event/details">Ver Mas</a></td>
            </tr>
            <tr>
              <th>10003</th>
              <td>Mario</td>
              <td>Baja</td>
              <td>20 Horas</td>
              <td>Suspendido</td>
              <td><a href="/event/details">Ver Mas</a></td>
            </tr>
          </tbody>
        </table>


      </div>
    </React.Fragment>
  )
}
export default EventList;