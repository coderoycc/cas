<div class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-12">
        <input type="hidden" class="form-control" id="pagina" value="1">
        <h1 class="m-0" style="display:inline-block"> Solicitudes de préstamos</h1>
      </div>
    </div>
  </div>
</div>
<section class="content">
  <div class="container-fluid">
    <div class="row"></div>
    <div class="row">
      <section class="col-lg-12 connectedSortable">
        <div class="card direct-chat direct-chat-primary">
          <div class="card-header" id="buscador-general">
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse">
                <i class="fas fa-minus"></i>
              </button>
            </div>
          </div>
          <div class="card-body">
            <div id="for-pagination1" style="text-align:center"></div>
            <div id="prestamos" style="margin:0 10px;">
              <table id="t_prestamos_sol" class="table table-bordered table-striped" style="width:100%">
                <thead>
                  <tr>
                    <th>Socio</th>
                    <th>C.I.</th>
                    <th>Tipo de préstamo</th>
                    <th>Monto solicitado</th>
                    <th>Plazo Solcicitado</th>
                    <th>Fecha Solicitud</th>
                    <th>Garantes</th>
                    <th>Revisar</th>
                  </tr>
                </thead>
                <tbody id="t_body_prest">

                </tbody>
              </table>
            </div>
            <div style="text-align:center"></div>
          </div>
          <div class="card-footer">
          </div>
        </div>
      </section>
    </div>
  </div>
</section>