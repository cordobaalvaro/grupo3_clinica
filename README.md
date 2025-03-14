# DOCUMENTACIÓN DEL PROYECTO:

🟩 **DATOS IMPORTANTES - REQUERIMIENTOS DE LA WEB**
A. Queremos crear una web con tematica de clinica, donde esta, en primera instancia muestre los servicios que dispone tanto para el cliente como para futuros trabajadores de la clinica quienes podrán enviar la solicitud de trabajo mediante la hoja de vida.
B. El desarrollador de la web tendra un accesos primario como administrador, el cual puede modificar y tener el control total de la web.
C. El personal de la clinica como doctores o especialistas, tendran un acceso secundario como administradores, ellos pueden modificar la informacion
como:
🟡Fechas  
 🟡Horas
🟡Lugar
🟡Estado = "aprobada", "cancelada" o "aplazada"
E. Los usuarios si bien se pueden registrar y loguear, solo tendran acceso a su perfil (por asi decirlo) donde pueden registar una cita dejando los datos como Fecha - Hora - Lugar - Tipo de Cita y con el Profesional respectivo:
🟣Médico General – Atiende consultas generales y revisiones de salud.
🟣Odontólogo – Especialista en salud bucal y dental.
🟣Psicólogo – Brinda terapia y apoyo en salud mental.
🟣Ginecólogo – Especialista en salud reproductiva femenina.
🟣Pediatra – Médico especializado en la salud infantil.
🟣Dermatólogo – Experto en enfermedades de la piel.
🟣Cardiólogo – Trata enfermedades del corazón y el sistema circulatorio.
🟣Traumatólogo – Especialista en huesos y lesiones musculoesqueléticas.
🟣Neurólogo – Diagnostica y trata enfermedades del sistema nervioso.
🟣Nutricionista – Ayuda con la alimentación y dietas saludables.
estos datos, aparecen si hay en la base de datos _(Json - LocalStorage)_ esos especialistas con las fechas horar y lugares de cita disponibles (ellos tendran un formulario para dejar esos datos en disponibilidad).

🟦 **DATOS IMPORTANTES - PROCESOS DE LA WEB**
🔵Todos deben loguearse para ver informacion especial ➡️ _TRABAJA CON NOSOTROS_
🟨🟨🟨**REGISTRO USUARIO**
🔵El usuario se debe registrar para poder generar una cita - **RegisterPage.jsx**
🔵El Usuario debe ingresar a la web - **LoginPage.jsx**
🔵Para sacar una cita, el usuario puede elejir que tipo de cita quiere realizar (CARD CON IMGAGE -TITLE - SUBTITLE - DESCRIPTION - BTNLINK/REDIRECTION) **UserPage.jsx**
🔵Una vez seleccionada la categoria de cita que quiere realizar, esta lo redireccionará a una pagina con el formulario, donde traera junto con el _ID_ que identifica esa categoria, los espacios disponibles en Fechas, horas, especialistas y el lugar. **AppointmentForm.jsx**
🔵Cuando el usuario envie la informacion del formulario al especialista seleecionado, este redireccionara a su **UserPage.jsx** donde le aparecera en su tabla la información de la cita realizada, con el campo "Estado": en _"PENDIENTE"_, Esperando respuesta del especialista. Campo que antes de generar su primera cita no se veia 🟥🟥**(ESTO HAY QUE HABLARLO SI VA O NO, EN EL CASO DE QUE SE QUIERA SIMEPRE VISIBLE)**
🔵Cuando el usuario envie la informacion del formulario al especialista seleecionado, a este ultimo le aparecera en su tabla, la persona que saco la cita, este puede: "aceptarlo", "cancelarlo" o "aplazarlo".
🟨🟨🟨**REGISTRO ESPECIALISTA**
🔵El profesional debe enviar solicitud para ser parte de la clinica ➡️ _TRABAJA CON NOSOTROS_
➡️⬇️
🔵El profesional se debe registar con sus datos:
🟣Nombre y apellido
🟣Cargo:
➡️⬇️
🟣Médico General – Atiende consultas generales y revisiones de salud.
🟣Odontólogo – Especialista en salud bucal y dental.
🟣Psicólogo – Brinda terapia y apoyo en salud mental.
🟣Ginecólogo – Especialista en salud reproductiva femenina.
🟣Pediatra – Médico especializado en la salud infantil.
🟣Dermatólogo – Experto en enfermedades de la piel.
🟣Cardiólogo – Trata enfermedades del corazón y el sistema circulatorio.
🟣Traumatólogo – Especialista en huesos y lesiones musculoesqueléticas.
🟣Neurólogo – Diagnostica y trata enfermedades del sistema nervioso.
🟣Nutricionista – Ayuda con la alimentación y dietas saludables.
🟣CedeTrabajo:
🟡Médico General
Clínica: Salud Total
Dirección: Avenida Libertador 1565, Edificio Médico, Piso 3, Bogotá, Colombia
🟡Odontólogo
Clínica: Sonrisa Perfecta
Dirección: Calle 85 #72-30, Consultorio 105, Medellín, Colombia
🟡Psicólogo
Clínica: Mente Sana
Dirección: Calle de la Paz 405, Local 12, Quito, Ecuador
🟡Ginecólogo
Clínica: Vida Femenina
Dirección: Avenida de las Américas 2700, Piso 4, Buenos Aires, Argentina
🟡Pediatra
Clínica: Pequeños Cuidadores
Dirección: Calle Los Niños 412, Consultorio 204, Santiago, Chile
🟡Dermatólogo
Clínica: Piel Saludable
Dirección: Avenida de la Salud 1150, Torre 2, Piso 5, Lima, Perú
🟡Cardiólogo
Clínica: Corazón Vivo
Dirección: Calle 10 #5-80, Edificio 4, Ciudad de Panamá, Panamá
🟡Traumatólogo
Clínica: Movimiento Salud
Dirección: Calle 46 #20-25, Oficina 102, Caracas, Venezuela
🟡Neurólogo
Clínica: NeuroVida
Dirección: Avenida Los Cidros 2430, Consultorio 305, Ciudad de México, México
🟡Nutricionista
línica: Bienestar Nutricional
Dirección: Calle de la Salud 890, Oficina 307, Montevideo, Uruguay
Si es aceptada, se va a ver en su pantalla un boton de AdminSecundario con un mensaje _AccesoDisponible_, en este puede ser redireccionado a una page con el formulario para dejar fechas y horarios disponibles. **ProfessionalPage.jsx**
🔵🟢EL profesional aqui tendra acceso a todos las modificaciones disponibles con respecto a las citas programadas y a programar.
