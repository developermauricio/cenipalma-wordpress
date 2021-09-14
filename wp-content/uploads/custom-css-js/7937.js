<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 

jQuery(document).ready(function( $ ){
  
  
  const btnFachada = jQuery('#btnFachada');
  const btnLobby = jQuery('#btnLobby');
  const btnPabellon = jQuery('#btnPabellon');
  
  const urlRegisterScene = 'https://backend-cenipalma.creategicalatina.com/api/register-scene';
  const urlRegisterClicks = 'https://backend-cenipalma.creategicalatina.com/api/register-clicks';
  
  
  const dataMarkers = [
    { nameMarker: "Dar un paso", idMarker: "3266CFA75A", nameScene: "Fachada Inicial", idScene: "7B71545122", points:0 },

    { nameMarker: "Ir al Lobby", idMarker: "FF44A56C97", nameScene: "Fachada después del Un Paso", idScene: "1CB5081B1F", points:0 },

    { nameMarker: "Dar un paso", idMarker: "FEB0FFF06D", nameScene: "Lobby", idScene: "B759528D16", points:0 },
    
    { nameMarker: "Ir al Auditorio", idMarker: "720181DEA1", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:25 },
    { nameMarker: "Ir al pabellón", idMarker: "EEB523460E", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:25 },

    { nameMarker: "Ir stand 1", idMarker: "1092D575BF", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Ir stand 2", idMarker: "18205CD022", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },

    { nameMarker: "Ir al Lobby", idMarker: "0AFED82CB4", nameScene: "Auditorio", idScene: "632E78A39F", points:0 },
    { nameMarker: "Ir a la conferencia", idMarker: "404785CC39", nameScene: "Auditorio", idScene: "632E78A39F", points:50 },

    { nameMarker: "Botón de WhatsApp", idMarker: "61CD91CEED", nameScene: "Stand Cenipalma", idScene: "07601BB604", points:200 },
    { nameMarker: "Botón pagina web", idMarker: "2413A417DD", nameScene: "Stand Cenipalma", idScene: "07601BB604", points:75 },
    { nameMarker: "Ingresar al Stand", idMarker: "D6154A3C3C", nameScene: "Stand Cenipalma", idScene: "07601BB604", points:0 },
  ]
  
  const dataScenes = [
    { nameScene: "Fachada Inicial", idScene: "7B71545122" },
    { nameScene: "Fachada después del Un Paso", idScene: "1CB5081B1F" },
    { nameScene: "Lobby", idScene: "B759528D16" },
    { nameScene: "Lobby principal", idScene: "EBF4CA2DCB" },
    { nameScene: "Pabellón", idScene: "632E78A39F" },
    { nameScene: "Auditorio", idScene: "A2DEEE00A6" },
    { nameScene: "Stand Cenipalma", idScene: "07601BB604" },
    { nameScene: "A dentro de Stan Cenipalma", idScene: "4AF7AE4070" },
  ]                         
                       
  
  
  btnFachada.on('click', () => { onSetScene( "7B71545122" ) });
  btnLobby.on('click', () => { onSetScene( "EBF4CA2DCB" ) });
  btnPabellon.on('click', () => { onSetScene( "632E78A39F" ) });
    
  
  const onSetScene = ( idScene ) => {
    window.scene.setScene({ id: idScene });
    
    const email = jQuery('#currentUserEmail').val();  
    const currentScene = dataScenes.find( scene => scene.idScene === idScene );    
    let dataScene = {};
    
    if (idScene === '632E78A39F') {
       dataScene = { email, go_scene: currentScene.nameScene, nameScene: 'Lobby principal', click_name: 'Ir al pabellón', points: 25 };
    } else {
       dataScene = { email, go_scene: currentScene.nameScene, nameScene: '', click_name: '', points: 0 };
    }   

    registerDataDB( dataScene, urlRegisterScene );
  }
  
      
  window.onChangeScene = ( e ) => {
    const idMarker = e.cfg.id;
    const currentMarker = dataMarkers.find( marker => marker.idMarker === idMarker );
    
    if ( currentMarker ) {
      const idScene = e.cfg.linkSceneId;
      const email = jQuery('#currentUserEmail').val();  
      
      if ( idScene ) { // Go to scene, save info
        const currentScene = dataScenes.find( scene => scene.idScene === idScene );  
        const dataScene = { email, go_scene: currentScene.nameScene, nameScene: currentMarker.nameScene, click_name: currentMarker.nameMarker, points: currentMarker.points };
        
        registerDataDB( dataScene, urlRegisterScene );
        
      } else { // click marker with data        
        const dataMarker =  { email, nameScene: currentMarker.nameScene, click_name: currentMarker.nameMarker, points: currentMarker.points };
        
        registerDataDB( dataMarker, urlRegisterClicks );
      }      
    }   
  }
  
  
  const registerDataDB = ( dataMarker, url ) => { 	
    
    if ( dataMarker.email ) {
     	jQuery.ajax({
          url: url,
          type: "POST",
          data: dataMarker,
          success: function (response) {
            console.log('Register... ', response);            
          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log('Error... ',textStatus, errorThrown);
          }
        }); 
    }
  }
  
});</script>
<!-- end Simple Custom CSS and JS -->
