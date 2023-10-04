let filesPdf = new FormData();
$(document).ready(() => {
  $("#btn-submit").prop('disabled',true);


  $("#pass").focus(()=>{
    verificaPass();
  });
  $("#pass").keyup(()=>{
    verificaPass();
  })

  $('form :input[required], form select[required]').on('input change', function() {
    var form = $(this).closest('form');
    var isFormValid = true;

    // Verificar si todos los campos requeridos están completados
    form.find(':input[required], form select[required]').each(function() {
      console.log($(this).val());
      if ($(this).val() === '') {
        isFormValid = false;
        return false; // Salir del bucle cuando se encuentra un campo vacío
      }
    });

    // Habilitar o deshabilitar el botón de envío según la validación
    if (isFormValid) {
      $('#btn-submit').prop('disabled', false);
    } else {
      $('#btn-submit').prop('disabled', true);
    }
  });
})

$("#flexCheckChecked").on('change', () => {
  if($("#flexCheckChecked").is(":checked")){
    $("#checkPoliticas").hide();
  }else{
    $("#checkPoliticas").show();
    $("#checkPoliticas").text("Debes aceptar las políticas de MBS");
  }
})


const verificaPass = () => {
  var password = $("#pass").val();
  var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    $("#btn-submit").prop('disabled',true);
    $("#verifyPass").show();
  }else{
    $("#verifyPass").hide();
    $("#btn-submit").prop('disabled',false);
  }
}

$("#form_register").on('submit', (e)=>{
  e.preventDefault();
  if(!tieneExtencion()){
    return;
  }
  var formData = new FormData();

  // Agregar los archivos seleccionados al FormData
  $('.filePdf').each(function() {
    var input = this;
    var fileName = $(input).data('filename');
    var file = input.files[0];
    if (file) {
      formData.append(fileName, file);
    }
  });

  // Obtener los otros campos del formulario y agregarlos al FormData
  var formFields = $(e.target).serializeArray();
  console.log(formFields);
  $.each(formFields, function(i, field) {
    formData.append(field.name, field.value);
  });

  // Enviar el FormData al servidor jquery
  $.ajax({
    url: '../api/socio/create',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    dataType: 'json',
    success: function(response) {
      if(response.status == 'success'){
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'Ingrese con su correo y contraseña',
          showConfirmButton: true,
          timer: 3000
        })
        setTimeout(() => {
          window.location.href = '../auth';
        }, 3010)
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Ocurrió un error en el registro',
          text: 'Intente nuevamente más tarde',
          showConfirmButton: true,
          timer: 1900
        })
      }
    },
    error: function(response) {
      Swal.fire({
        icon: 'error',
        title: 'Ocurrió un error en el registro',
        text: 'Intente nuevamente más tarde',
        showConfirmButton: true,
        timer: 1900
      }) 
    }
  })

  for (var pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }
})

$(".filePdf").on('change', (e) => {
  $(e.target).addClass('is-valid');
})


function tieneExtencion(){
  var value = $("#extension_ci").val();
  if(value != ""){
    $("#btn-submit").prop('disabled',false);
  }else{
    $("#checkPoliticas").html('| Seleccione la extensión de su carnet')
    $("#btn-submit").prop('disabled',true);
    return false;
  }
  return true;
}

document.getElementById('departamento').onchange = () => {
  var id = document.getElementById('departamento').value;
  const select = document.getElementById('provincia');
  select.innerHTML = '';
  const option = document.createElement('option');
  option.value = "";
  option.disabled = "true";
  option.selected = "true";
  option.textContent = "- Sel. provincia -";
  select.appendChild(option);
  cargarProvincias(id);

  const municipio = document.getElementById('municipio');
  municipio.innerHTML = '';
  const option_municipio = document.createElement('option');
  option_municipio.value = "";
  option_municipio.disabled = "true";
  option_municipio.selected = "true";
  option_municipio.textContent = "- Sel. municipio -";
  municipio.appendChild(option_municipio);

  const localidad = document.getElementById('localidad');
  localidad.innerHTML = '';
  const option_localidad = document.createElement('option');
  option_localidad.value = "";
  option_localidad.disabled = "true";
  option_localidad.selected = "true";
  option_localidad.textContent = "- Sel. localidad -";
  localidad.appendChild(option_localidad);
};

document.getElementById('provincia').onchange = () => {
  var id = document.getElementById('provincia').value;
  const select = document.getElementById('municipio');
  select.innerHTML = '';
  const option = document.createElement('option');
  option.value = "";
  option.disabled = "true";
  option.selected = "true";
  option.textContent = "- Sel. municipio -";
  select.appendChild(option);
  cargarMunicipios(id);

  const localidad = document.getElementById('localidad');
  localidad.innerHTML = '';
  const option_localidad = document.createElement('option');
  option_localidad.value = "";
  option_localidad.disabled = "true";
  option_localidad.selected = "true";
  option_localidad.textContent = "- Sel. localidad -";
  localidad.appendChild(option_localidad);
};

document.getElementById('municipio').onchange = () => {
  var id = document.getElementById('municipio').value;
  const select = document.getElementById('localidad');
  select.innerHTML = '';
  const option = document.createElement('option');
  option.value = "";
  option.disabled = "true";
  option.selected = "true";
  option.textContent = "- Sel. localidad -";
  select.appendChild(option);
  cargarLocalidades(id);
};

document.getElementById('fuerza').onchange = () => {
  var id = document.getElementById('fuerza').value;
  const select = document.getElementById('grado');
  select.innerHTML = '';
  const option = document.createElement('option');
  option.value = "";
  option.disabled = "true";
  option.selected = "true";
  option.textContent = "- Sel. grado -";
  select.appendChild(option);
  cargarGrados(id);
};