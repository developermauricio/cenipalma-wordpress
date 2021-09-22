<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 

jQuery(document).ready(function( $ ){
  
  
  const btnFachada = jQuery('#btnFachada');
  const btnLobby = jQuery('#btnLobby');
  const btnPabellon = jQuery('#btnPabellon');
  const btnPabellon1 = jQuery('#btnPabellon1');
  const btnPabellon2 = jQuery('#btnPabellon2');  

  const urlRegisterScene = 'https://backend.reuniontecnicanacional.com/api/register-scene';
  const urlRegisterClicks = 'https://backend.reuniontecnicanacional.com/api/register-clicks';
  
  
  const contentSliderStand = jQuery('#contentMainSliderStand');
  const itemsStandSlider = [
    { idScena: "07601BB604", itemStand: jQuery('.stand-cenipalma'), nameStand: "Stand Cenipalma", points: 100 },
    { idScene: "0684F3D38B", itemStand: jQuery('.stand-acepalma'), nameStand: "Stand Acepalma", points: 400 },
    { idScene: "22C53F86AA", itemStand: jQuery('.stand-tecnopalma'), nameStand: "Stand Tecnopalma", points: 100 },
    { idScene: "DD4DE136FC", itemStand: jQuery('.stand-yara'), nameStand: "Stand Yara", points: 100 },
    { idScene: "77849D82B9", itemStand: jQuery('.stand-metalteco'), nameStand: "Stand Metalteco", points: 100 },
    { idScene: "06A7D478E5", itemStand: jQuery('.stand-biosoluciones'), nameStand: "Stand Biosoluciones", points: 100 },
    { idScene: "E722FAB9B6", itemStand: jQuery('.stand-disan-agro'), nameStand: "Stand Disan Agro", points: 100 },
    { idScene: "B2F007A812", itemStand: jQuery('.stand-navitrans'), nameStand: "Stand Navitrans", points: 100 },
    { idScene: "976E933A0C", itemStand: jQuery('.stand-imecol'), nameStand: "Stand Imecol", points: 100 },
    { idScene: "775AF0FDA5", itemStand: jQuery('.stand-distrimalayo'), nameStand: "Stand Distrimalayo", points: 100 },
    { idScene: "02EA04C21F", itemStand: jQuery('.stand-tienda-palmera'), nameStand: "Stand Tienda Palmera", points: 100 },
    { idScene: "F1168333B3", itemStand: jQuery('.stand-cid-palmero'), nameStand: "Stand CID Palmero", points: 100 },
    { idScene: "9C5463E6F7", itemStand: jQuery('.stand-ccv-grupo'), nameStand: "Stand CCV Grupo", points: 100 },
    { idScene: "8C7ACE7918", itemStand: jQuery('.stand-sepalm'), nameStand: "Stand Sepalm", points: 100 },
    { idScene: "689668E9AB", itemStand: jQuery('.stand-danco'), nameStand: "Stand Danco", points: 100 },
    { idScene: "BC05BE7DB8", itemStand: jQuery('.stand-daabon'), nameStand: "Stand Daabon", points: 100 },
    { idScene: "4B7FBC9BFD", itemStand: jQuery('.stand-banco-agrario'), nameStand: "Stand Banco Agrario", points: 100 },
    { idScene: "80100DAC87", itemStand: jQuery('.stand-monomeros'), nameStand: "Stand Monómeros", points: 100 },
  ]
  
  
  const dataMarkers = [
    { nameMarker: "Dar un paso", idMarker: "3266CFA75A", nameScene: "Fachada inicial", idScene: "7B71545122", points:0 },

    { nameMarker: "Ir al Lobby", idMarker: "FF44A56C97", nameScene: "Fachada después del un paso", idScene: "1CB5081B1F", points:0 },

    { nameMarker: "Dar un paso", idMarker: "FEB0FFF06D", nameScene: "Lobby", idScene: "B759528D16", points:0 },
    { nameMarker: "Ir a la fachada", idMarker: "16E41958E9", nameScene: "Lobby", idScene: "B759528D16", points:0 },
    { nameMarker: "Pantalla On Demand 1", idMarker: "D7BDA869B5", nameScene: "Lobby", idScene: "B759528D16", points:50 },
    { nameMarker: "Pantalla On Demand 2", idMarker: "201962AB51", nameScene: "Lobby", idScene: "B759528D16", points:50 },
    { nameMarker: "Pantalla On Demand 3", idMarker: "4A581FD6EB", nameScene: "Lobby", idScene: "B759528D16", points:50 },
    { nameMarker: "Pantalla On Demand 4", idMarker: "AA61FBD8D9", nameScene: "Lobby", idScene: "B759528D16", points:50 },
    { nameMarker: "Pantalla On Demand 5", idMarker: "797F801CFB", nameScene: "Lobby", idScene: "B759528D16", points:50 },
    { nameMarker: "Pantalla On Demand 6", idMarker: "1053541435", nameScene: "Lobby", idScene: "B759528D16", points:50 },
    { nameMarker: "Pantalla On Demand 7", idMarker: "4A5CB4E986", nameScene: "Lobby", idScene: "B759528D16", points:50 },
    { nameMarker: "Pantalla On Demand 8", idMarker: "B35E7B3F1D", nameScene: "Lobby", idScene: "B759528D16", points:50 },
    { nameMarker: "Pantalla On Demand 9", idMarker: "8724401959", nameScene: "Lobby", idScene: "B759528D16", points:50 },
    { nameMarker: "Pantalla On Demand 10", idMarker: "2E93298900", nameScene: "Lobby", idScene: "B759528D16", points:50 },
    { nameMarker: "Pantalla On Demand 11", idMarker: "55173C2A2F", nameScene: "Lobby", idScene: "B759528D16", points:50 },
    
    { nameMarker: "Salón Plenaria", idMarker: "720181DEA1", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:50 },
    { nameMarker: "Modulo 2", idMarker: "81A92F2CEB", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:50 },
    { nameMarker: "Muestra comercial", idMarker: "EEB523460E", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:50 },
    { nameMarker: "Galería de Posters", idMarker: "EA2031B780", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:0 },
    { nameMarker: "Ir al Lobby", idMarker: "6258544E9C", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:0 },

    { nameMarker: "Stand Cenipalma", idMarker: "18205CD022", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Stand Acepalma", idMarker: "1092D575BF", nameScene: "Pabellón", idScene: "632E78A39F", points:400 },
    { nameMarker: "Stand Tecnopalma", idMarker: "5035C8260B", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Stand Yara", idMarker: "CCC3CEDFA1", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Stand Metalteco", idMarker: "53EF3DD47C", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Stand Biosoluciones", idMarker: "D312F25483", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Stand Disan Agro", idMarker: "C5FA104F69", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Stand Navitrans", idMarker: "A91AFEFE5B", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Stand Imecol", idMarker: "44913CE9C6", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Stand Distrimalayo", idMarker: "7E360FC488", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Stand Tienda Palmera", idMarker: "2FD43D24C4", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Stand CID Palmero", idMarker: "32B070F87B", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Stand CCV Grupo", idMarker: "CEB07D8816", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Stand Sepalm", idMarker: "32EB235C46", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Stand Danco", idMarker: "0EA8F00645", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Stand Daabon", idMarker: "1C7CE8CFC2", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Stand Banco Agrario", idMarker: "D1895B413F", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },
    { nameMarker: "Stand Monómeros", idMarker: "EB9C340AC5", nameScene: "Pabellón", idScene: "632E78A39F", points:100 },

    { nameMarker: "Ir al Lobby", idMarker: "0AFED82CB4", nameScene: "Auditorio", idScene: "632E78A39F", points:0 },
    { nameMarker: "Conferencia salón plenaria", idMarker: "404785CC39", nameScene: "Auditorio", idScene: "632E78A39F", points:100 },

    { nameMarker: "Botón de WhatsApp", idMarker: "61CD91CEED", nameScene: "Stand Cenipalma", idScene: "07601BB604", points:50 },
    { nameMarker: "Botón pagina web", idMarker: "2413A417DD", nameScene: "Stand Cenipalma", idScene: "07601BB604", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "D6154A3C3C", nameScene: "Stand Cenipalma", idScene: "07601BB604", points:0 },
  ]
  
  const dataScenes = [
    { nameScene: "Fachada inicial", idScene: "7B71545122" },
    { nameScene: "Fachada después del un paso", idScene: "1CB5081B1F" },
    { nameScene: "Lobby", idScene: "B759528D16" },
    { nameScene: "Lobby principal", idScene: "EBF4CA2DCB" },
    { nameScene: "Pabellón", idScene: "632E78A39F" },
    { nameScene: "Auditorio", idScene: "A2DEEE00A6" },
    { nameScene: "1 Stand Cenipalma", idScene: "07601BB604" },
    { nameScene: "1 A dentro de Stan Cenipalma", idScene: "4AF7AE4070" },
    
  ]       
  
  
  const viewContentSliderStand = (idScene) => {
    if ( idScene === '7B71545122' || idScene === '1CB5081B1F' || idScene === 'B759528D16' || idScene === 'EBF4CA2DCB' || idScene === 'A2DEEE00A6' ) {
      contentSliderStand.css('display', 'none');
      btnPabellon1.css('display', 'none');
  	  btnPabellon2.css('display', 'none');
    } else {
      contentSliderStand.css('display', 'block');
      btnPabellon1.css('display', 'block');
  	  btnPabellon2.css('display', 'block');
    }
  }


  
  itemsStandSlider.forEach( item => {
    item.itemStand.on('click', () => { onSetScene( item.idScena, 'Pabellón', item.nameStand, item.points ) });
  });
                       
  
  
  btnFachada.on('click', () => { onSetScene( "7B71545122" ) });
  btnLobby.on('click', () => { onSetScene( "EBF4CA2DCB" ) });
  btnPabellon.on('click', () => { onSetScene( "632E78A39F", 50, 'Lobby principal', 'Muestra comercial' ) });  
    
  
  const onSetScene = ( idScene, nameScene = '', click_name = '', points = 0 ) => {
    const currentScene = dataScenes.find( scene => scene.idScene === idScene );    

    if ( currentScene ) {
      window.scene.setScene({ id: idScene });
      viewContentSliderStand(idScene);
      
      const email = jQuery('#currentUserEmail').val();  
      let dataScene = { email, go_scene: currentScene.nameScene, nameScene, click_name, points };       

      registerDataDB( dataScene, urlRegisterScene );
    }
  }
  
      
  window.onChangeScene = ( e ) => {
    const idMarker = e.cfg.id;
    const currentMarker = dataMarkers.find( marker => marker.idMarker === idMarker );
    
    if ( currentMarker ) {
      const idScene = e.cfg.linkSceneId;
      const email = jQuery('#currentUserEmail').val();  
      
      if ( idScene ) { // Go to scene, save info
        viewContentSliderStand(idScene);
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
