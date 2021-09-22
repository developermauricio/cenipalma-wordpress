<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 
const createVideo = (src) => {
    const iframe = document.createElement('iframe');
    iframe.width = 560;
    iframe.height = 315;
    iframe.src = src;
    iframe.title = "YouTube video player"
    iframe.frameborder = "0"
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    iframe.allowfullscreen = true;
  iframe.addEventListener("click", () => {
   		alert("click");

	});
    return iframe;
}

const checkVideo = () => {
    const video = document.querySelector('.video-iframe .ipnrm-lbl:not(.init)');
    if (video){
        video.classList.add('init');
        const src = video.textContent.trim();
      
        
        video.appendChild(createVideo(src));
    }
}

setInterval(checkVideo, 200);</script>
<!-- end Simple Custom CSS and JS -->
