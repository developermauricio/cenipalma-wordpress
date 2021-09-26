<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 

jQuery(document).ready(function( $ ){
  
    
  const inputPassword = jQuery('.input-password');
  const btnShowPassword = jQuery('#view-password');
  const svgShowPassword = jQuery('#showPassword');
  const svgHidePassword = jQuery('#hidenPassword');
  let showPassword = true;
  
  btnShowPassword.click( () => {    
    btnShowPassword.css("padding", "0.6rem 0.6rem 0.7rem 0.6rem");
    
    if ( showPassword ) {
      inputPassword.get(0).type = 'text';
      svgHidePassword.css('display', 'none');
      svgShowPassword.css('display', 'block');
      showPassword = false;
    } else {
      inputPassword.get(0).type = 'password';
      svgShowPassword.css('display', 'none');
      svgHidePassword.css('display', 'block');  
      showPassword = true;
    }
  }); 
  
  const btnRadioButtom = jQuery('#termsRadioButtom'); 
  const btnSubmit = jQuery('.btn-login');
  
  if ( !btnRadioButtom.is(':checked') ) {
    btnSubmit.attr("disabled", true);
  }
  
  
  btnRadioButtom.change( () => {
    if ( btnRadioButtom.is(':checked') ) {
      btnSubmit.removeAttr("disabled");
    } else {
      btnSubmit.attr("disabled", true);
    }
  });
  
  
  const inputCheck = jQuery("#termsCheck");
  const buttonViewPoints = jQuery(".btn-view-points");
  
  if ( !inputCheck.is(':checked') ) {
    buttonViewPoints.css("display", 'none');
  }
  
   inputCheck.change( () => {
    if ( inputCheck.is(':checked') ) {
      buttonViewPoints.css("display", 'inline-flex');
    } else {
      buttonViewPoints.css("display", 'none');
    }
  });
  
  
  
  const urlTotalPointsUser = 'https://backend.reuniontecnicanacional.com/api/get-total-points-user/'; 
  const urlPointsUser = 'https://backend.reuniontecnicanacional.com/api/get-points-user/';
  const urlRankingPoints = 'https://backend.reuniontecnicanacional.com/api/get-ranking-points';
  
    
  
  
  const contentPoints = jQuery('.content-title-points');
  
  const viewMyPoints = () => {
    const email = jQuery('#currentUserEmail').val();    
    
    if ( email ) {      
      contentPoints.css('display', 'block');
    } else {
      contentPoints.css('display', 'none');
    }
  }
  
  contentPoints.on('click', () => { 
    window.open(
      'https://reuniontecnicanacional.com/puntos',
      '_blank' 
    );
  });
    
  
    
  const getTotalPointsUser = () => {
    const email = jQuery('#currentUserEmail').val();
      
      if( email ) {      
        jQuery.ajax({
            url: urlTotalPointsUser + email,
            type: "GET",
            success: function (response) {
              jQuery('#my-total-points').text(response.data);
              jQuery('#my-total-points-movil').text(response.data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
               console.log(textStatus, errorThrown);
            }
          });
      }
  };
  
  viewMyPoints();
  getTotalPointsUser();
  
  
  setInterval(function(){   
	getTotalPointsUser();
  }, 30000);  
  
  
  
   
  const contentTableMyPoints = jQuery('#tableMyPoints');  
  const contentTableRankingPoints = jQuery('#contentRankingPoints');  
  
  
  buttonViewPoints.click( () => { 
    // Puntos por usuario
    const headerTable1 = {
      col1: '#',
      col2: 'Nombre Escena',
      col3: 'Nombre Clic',
      col4: 'Puntos'
    };
    getPointsUser(urlPointsUser, headerTable1)
    
    // Ranking de puntos
    const headerTable2 = {
      col1: '#',
      col2: 'Nombre Usuario',
      col3: 'Puntos'
    };
    getPointsUser(urlRankingPoints, headerTable2, true)
  });
  
  const getPointsUser = (url, header, ranking = false) => {
    const email = jQuery('#currentUserEmail').val();
      
      if( email ) {             
        
        jQuery.ajax({
            url: ranking ? url : url + email,
            type: "GET",
            success: function (response) {    
              	if ( ranking ) {
                  	contentTableRankingPoints.empty();
                	contentTableRankingPoints.append( createTable(response.data, header, true) );
              	} else {
                  	contentTableMyPoints.empty();
                  	contentTableMyPoints.append( createTable(response.data, header) );
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
               console.log(textStatus, errorThrown);
            }
          });
      }
  };
  
  
  
  const createTable = (data, header, resp = false) => {
    if ( data.length == 0 ) {
      return `<div style="padding: 1rem;">
            	<h3>No hay datos disponibles</h3>
            </div>`;
    }
    
    let thead = '';
    for ( const [key, value] of Object.entries(header) ) {
      thead += `<th style="background: #fff;" scope="col">${value}</th>`
    }
    
    let i = 0, tBody;  
    
    if ( resp ) {
      	tBody = data.map( point => {
          i++;
          return `<tr>
                    <th scope="row">${i}</th>
                    <td>${point.fullname}</td>
                    <td>${point.points}</td>
                </tr>`;
        }).join(''); 
    } else {
     	tBody = data.map( point => {
          i++;
          return `<tr>
                    <th scope="row">${i}</th>
                    <td>${point.name_scene}</td>
                    <td>${point.click_name}</td>
                    <td>${point.points}</td>
                </tr>`;
        }).join(''); 
    }    
    
    return `<table class="table table-bordered">
            <thead style="background: #536329d9;">
                <tr>
                    ${thead}
                </tr>
            </thead>
            <tbody>
				${tBody}
            </tbody>
        </table>`;
    
  }
  
});
</script>
<!-- end Simple Custom CSS and JS -->
