<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
jQuery(document).ready(function( $ ){
  const btnModalVideo = jQuery('.btn-open-modal-video-guia');
  
  
    
  btnModalVideo.on('click', () => { 
    let dataVideo = {
      namePDF: '',
      urlPDF: '',
      qualification: 0,
      nameScene: 'Fachada inicial',
      click_name: 'Vídeotutorial'
    }

    registerPointsDB( dataVideo );
  });
});


const clickStar = (data, value) => {
  const src = data.url;
  let namePDF = '';
  if ( data.elem.length != 0 ) {
      namePDF = data.elem[0].innerHTML;
  }
  
  let dataImage = {
    namePDF: namePDF,
    urlPDF: data.url,
    qualification: value,
    nameScene: 'Lobby principal',
    click_name: 'Galería de Posters'
  }
  
  registerPointsDB( dataImage );
};


const urlRegisterPoints = 'https://backend.reuniontecnicanacional.com/api/register-points-image-ranking';



const registerPointsDB = ( dataImage ) => { 	
  const email = jQuery('#currentUserEmail').val();  

  if ( email ) {
    dataImage.email = email;    
    dataImage.points = 50;
    
    jQuery.ajax({
      url: urlRegisterPoints,
      type: "POST",
      data: dataImage,
      success: function (response) {
        console.log('Register... ', response);            
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log('Error... ',textStatus, errorThrown);
      }
    }); 
  }
}

//createStart(onClick: (data, value) => {}, data, defaultValue = 1 ) // defaultValue va entre 0-5
const createStar=function(a,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,e=document.createElement("div"),s=null;return e.classList.add("stars"),e.innerHTML='\n    <div data-value="5" class="star '.concat(c&&5==c?"active":"",'">★</div>\n    <div data-value="4" class="star ').concat(c&&4==c?"active":"",'">★</div>\n    <div data-value="3" class="star ').concat(c&&3==c?"active":"",'">★</div>\n    <div data-value="2" class="star ').concat(c&&2==c?"active":"",'">★</div>\n    <div data-value="1" class="star ').concat(c&&1==c?"active":"",'">★</div>'),e.addEventListener("click",(function(c){c.target.classList.contains("star")&&(s&&s.classList.remove("active"),(s=c.target).classList.add("active"),a(t,+s.getAttribute("data-value")))})),e};

const checkStars = setInterval(() => {
  const pdfs = document.querySelectorAll('.pdf-galeria:not(.init)');
  pdfs.forEach(pdf => {
    pdf.classList.add('init');
    const data = {
      url: pdf.getElementsByTagName("a")[0].href,
      elem: pdf.getElementsByTagName("h2"),
    }
    const star = createStar(clickStar, data )
    pdf.parentElement.appendChild(star);
  });
  if (document.querySelector('.wpb_single_image.pdf-galeria:not(.init)')){
      clearInterval(checkStars);
  }
}, 2000);


</script>
<!-- end Simple Custom CSS and JS -->
