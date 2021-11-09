<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 


jQuery(document).ready(function( $ ){
  
  
  const btnFachada = jQuery('#btnFachada');
  const btnLobby = jQuery('#btnLobby');
  const btnMuestraComercial = jQuery('#btnMuestraComercial');

  const urlRegisterScene = 'https://backend.reuniontecnicanacional.com/api/register-scene';
  const urlRegisterClicks = 'https://backend.reuniontecnicanacional.com/api/register-clicks';
  
  
  const contentSliderStand = jQuery('#contentMainSliderStand');
  
  
  
  const dataMarkers = [
    { nameMarker: "Dar un paso", idMarker: "3266CFA75A", nameScene: "Fachada inicial", idScene: "7B71545122", points:0 },

    { nameMarker: "Ir al Lobby recepción", idMarker: "FF44A56C97", nameScene: "Fachada después del un paso", idScene: "1CB5081B1F", points:0 },
    { nameMarker: "Ir a la fachada inicial", idMarker: "02780F1E26", nameScene: "Fachada después del un paso", idScene: "1CB5081B1F", points:0 },

    { nameMarker: "Ir al Lobby principal", idMarker: "FEB0FFF06D", nameScene: "Lobby recepción", idScene: "B759528D16", points:0 },
    { nameMarker: "Ir a la fachada", idMarker: "16E41958E9", nameScene: "Lobby recepción", idScene: "B759528D16", points:0 },
    { nameMarker: "Ver puntos", idMarker: "43D9A0F433", nameScene: "Lobby recepción", idScene: "B759528D16", points:0 },
    { nameMarker: "Descargar Certificado", idMarker: "E8D8B487E5", nameScene: "Lobby recepción", idScene: "B759528D16", points:200 },
    { nameMarker: "Información", idMarker: "940E9274E3", nameScene: "Lobby recepción", idScene: "B759528D16", points:0 },
        
    { nameMarker: "Salón Plenaria", idMarker: "720181DEA1", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:50 },
    { nameMarker: "Modulo 3", idMarker: "81A92F2CEB", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:50 },
    { nameMarker: "Muestra comercial", idMarker: "EEB523460E", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:50 },
    { nameMarker: "Galería de Posters", idMarker: "EA2031B780", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:0 },
    { nameMarker: "Ir al Lobby recepción", idMarker: "6258544E9C", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:0 },
    { nameMarker: "Vídeo On Demand Acepalma", idMarker: "A8E29B1AEF", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:100 },
    { nameMarker: "Vídeo On Demand Tecnopalma", idMarker: "F0BCB24823", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:50 },
    { nameMarker: "Vídeo On Demand YARA", idMarker: "C37145E89F", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:50 },
    { nameMarker: "Vídeo On Demand Phina Biosoluciones", idMarker: "6233629BDC", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:50 },
    { nameMarker: "Vídeo On Demand Disan Agro", idMarker: "CF602E2A64", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:50 },
    { nameMarker: "Vídeo On Demand Imecol", idMarker: "6AE595E7E8", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:50 },
    { nameMarker: "Vídeo On Demand Distrimalayo", idMarker: "A58E3A266F", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:50 },
    { nameMarker: "Vídeo On Demand Monómeros", idMarker: "B52A90B154", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:50 },
    { nameMarker: "Vídeo On Demand Tienda Palmera", idMarker: "BEAFF68EA7", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:50 },
    { nameMarker: "Vídeo On Demand 10", idMarker: "A9783DDD71", nameScene: "Lobby principal", idScene: "EBF4CA2DCB", points:50 },

    { nameMarker: "Stand Cenipalma", idMarker: "18205CD022", nameScene: "Muestra comercial", idScene: "53CDD074CC", points:100 },
    { nameMarker: "Stand Monómeros", idMarker: "EB9C340AC5", nameScene: "Muestra comercial", idScene: "53CDD074CC", points:100 },
    { nameMarker: "Stand Acepalma", idMarker: "1092D575BF", nameScene: "Muestra comercial", idScene: "53CDD074CC", points:400 },
    { nameMarker: "Stand Tecnopalma", idMarker: "5035C8260B", nameScene: "Muestra comercial", idScene: "53CDD074CC", points:100 },
    { nameMarker: "Stand Fedepalma", idMarker: "29D0C3E1B8", nameScene: "Muestra comercial", idScene: "E0E05366AB", points:100 },
    { nameMarker: "Stand YARA", idMarker: "CCC3CEDFA1", nameScene: "Muestra comercial", idScene: "53CDD074CC", points:100 },
    { nameMarker: "Stand Metalteco", idMarker: "53EF3DD47C", nameScene: "Muestra comercial", idScene: "53CDD074CC", points:100 },
    { nameMarker: "Stand Phina Biosoluciones", idMarker: "D312F25483", nameScene: "Muestra comercial", idScene: "53CDD074CC", points:100 },
    { nameMarker: "Stand Navitrans S.A", idMarker: "A91AFEFE5B", nameScene: "Muestra comercial", idScene: "53CDD074CC", points:100 },
    { nameMarker: "Stand Disan Agro", idMarker: "C5FA104F69", nameScene: "Muestra comercial", idScene: "53CDD074CC", points:100 },    
    { nameMarker: "Stand Distrimalayo", idMarker: "7E360FC488", nameScene: "Muestra comercial", idScene: "2983456847", points:100 },
    { nameMarker: "Stand Tienda Palmera", idMarker: "2FD43D24C4", nameScene: "Muestra comercial", idScene: "2983456847", points:100 },
    { nameMarker: "Stand Imecol", idMarker: "44913CE9C6", nameScene: "Muestra comercial", idScene: "2983456847", points:100 },
    { nameMarker: "Stand CID Palmero", idMarker: "32B070F87B", nameScene: "Muestra comercial", idScene: "2983456847", points:100 },
    { nameMarker: "Stand CCV Grupo", idMarker: "CEB07D8816", nameScene: "Muestra comercial", idScene: "2983456847", points:100 },
    { nameMarker: "Stand SEPALM", idMarker: "32EB235C46", nameScene: "Muestra comercial", idScene: "2983456847", points:100 },
    { nameMarker: "Stand Danco", idMarker: "0EA8F00645", nameScene: "Muestra comercial", idScene: "2983456847", points:100 },
    { nameMarker: "Stand Banco Agrario", idMarker: "D1895B413F", nameScene: "Muestra comercial", idScene: "2983456847", points:100 },
    { nameMarker: "Stand DAABON", idMarker: "1C7CE8CFC2", nameScene: "Muestra comercial", idScene: "2983456847", points:100 },
    { nameMarker: "Stand EIMPSA", idMarker: "95F539FE4E", nameScene: "Muestra comercial", idScene: "2983456847", points:100 },

    { nameMarker: "Ir al Lobby principal", idMarker: "4CB5B37FA3", nameScene: "Salón Modulo 3", idScene: "0384FC8E82", points:0 },
    { nameMarker: "Conferencia Salón Modulo 3", idMarker: "E7B4869D98", nameScene: "Salón Modulo 3", idScene: "0384FC8E82", points:100 },
    
    { nameMarker: "Ir al Lobby principal", idMarker: "0AFED82CB4", nameScene: "Salón Plenaria", idScene: "A2DEEE00A6", points:0 },
    { nameMarker: "Conferencia Salón Plenaria", idMarker: "404785CC39", nameScene: "Salón Plenaria", idScene: "A2DEEE00A6", points:100 },
    
    { nameMarker: "WhatsApp", idMarker: "61CD91CEED", nameScene: "Stand Cenipalma", idScene: "07601BB604", points:50 },
    { nameMarker: "Página web", idMarker: "2413A417DD", nameScene: "Stand Cenipalma", idScene: "07601BB604", points:50 },
    { nameMarker: "Audio Podcats", idMarker: "CD9C40B88C", nameScene: "Stand Cenipalma", idScene: "07601BB604", points:0 },
    { nameMarker: "PDF", idMarker: "C7260CFD61", nameScene: "Stand Cenipalma", idScene: "07601BB604", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "D6154A3C3C", nameScene: "Stand Cenipalma", idScene: "07601BB604", points:0 },
    { nameMarker: "Video Cenipalma 1", idMarker: "5B13CC3246", nameScene: "Stand Cenipalma Interior", idScene: "4AF7AE4070", points:50 },
    { nameMarker: "Video Cenipalma 2", idMarker: "009E94591D", nameScene: "Stand Cenipalma Interior", idScene: "4AF7AE4070", points:50 },
    { nameMarker: "Video Cenipalma 3", idMarker: "759A0A15A0", nameScene: "Stand Cenipalma Interior", idScene: "4AF7AE4070", points:50 },
    { nameMarker: "Stand Cenipalma Exterior", idMarker: "81FBE604F8", nameScene: "Stand Cenipalma Interior", idScene: "4AF7AE4070", points:0 },
    
    { nameMarker: "WhatsApp", idMarker: "31E98C0664", nameScene: "Stand Monómeros", idScene: "80100DAC87", points:50 },
    { nameMarker: "Página web", idMarker: "7310C8C9DE", nameScene: "Stand Monómeros", idScene: "80100DAC87", points:50 },
    { nameMarker: "PDF", idMarker: "083CA7AE2B", nameScene: "Stand Monómeros", idScene: "80100DAC87", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "9220B45359", nameScene: "Stand Monómeros", idScene: "80100DAC87", points:0 },
    { nameMarker: "Video Monómeros 1", idMarker: "4E0E0C9657", nameScene: "Stand Monómeros Interior", idScene: "9548B4C1F2", points:50 },
    { nameMarker: "Video Monómeros 2", idMarker: "1C07679815", nameScene: "Stand Monómeros Interior", idScene: "9548B4C1F2", points:50 },
    { nameMarker: "Video Monómeros 3", idMarker: "332CB2ADCB", nameScene: "Stand Monómeros Interior", idScene: "9548B4C1F2", points:50 },
    { nameMarker: "Stand Monómeros Exterior", idMarker: "5EC4F6EB62", nameScene: "Stand Monómeros Interior", idScene: "9548B4C1F2", points:0 },
   
    { nameMarker: "WhatsApp", idMarker: "4B024196BD", nameScene: "Stand Acepalma", idScene: "0684F3D38B", points:100 },
    { nameMarker: "Página web", idMarker: "9650F2A3F9", nameScene: "Stand Acepalma", idScene: "0684F3D38B", points:100 },
    { nameMarker: "Tratamiento de datos", idMarker: "B9CF17C25C", nameScene: "Stand Acepalma", idScene: "0684F3D38B", points:0 },
    { nameMarker: "PDF", idMarker: "7C53E3D750", nameScene: "Stand Acepalma", idScene: "0684F3D38B", points:100 },
    { nameMarker: "Ingresar al Stand", idMarker: "6336BCA4B6", nameScene: "Stand Acepalma", idScene: "0684F3D38B", points:0 },
    { nameMarker: "Video Acepalma 1", idMarker: "C614C1E19D", nameScene: "Stand Acepalma Interior", idScene: "6E9A5501F7", points:100 },
    { nameMarker: "Video Acepalma 2", idMarker: "E99A41D79C", nameScene: "Stand Acepalma Interior", idScene: "6E9A5501F7", points:100 },
    { nameMarker: "Video Acepalma 3", idMarker: "EF746C497B", nameScene: "Stand Acepalma Interior", idScene: "6E9A5501F7", points:100 },
    { nameMarker: "Stand Acepalma Exterior", idMarker: "192BDFBFFB", nameScene: "Stand Acepalma Interior", idScene: "6E9A5501F7", points:0 },
    
    { nameMarker: "WhatsApp", idMarker: "34B8BC3D43", nameScene: "Stand Tecnopalma", idScene: "22C53F86AA", points:50 },
    { nameMarker: "Página web", idMarker: "9C29B3C0E2", nameScene: "Stand Tecnopalma", idScene: "22C53F86AA", points:50 },
    { nameMarker: "Tratamiento de datos", idMarker: "A36D24415C", nameScene: "Stand Tecnopalma", idScene: "22C53F86AA", points:0 },
    { nameMarker: "PDF", idMarker: "38E1E31F4C", nameScene: "Stand Tecnopalma", idScene: "22C53F86AA", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "4AF1D8207E", nameScene: "Stand Tecnopalma", idScene: "22C53F86AA", points:0 },
    { nameMarker: "Video Tecnopalma 1", idMarker: "E438CBED6F", nameScene: "Stand Tecnopalma Interior", idScene: "E160F86428", points:50 },
    { nameMarker: "Video Tecnopalma 2", idMarker: "2E112DAEA2", nameScene: "Stand Tecnopalma Interior", idScene: "E160F86428", points:50 },
    { nameMarker: "Video Tecnopalma 3", idMarker: "D10848C1CD", nameScene: "Stand Tecnopalma Interior", idScene: "E160F86428", points:50 },
    { nameMarker: "Stand Tecnopalma Exterior", idMarker: "22B0C24A65", nameScene: "Stand Tecnopalma Interior", idScene: "E160F86428", points:0 },
    
    { nameMarker: "WhatsApp", idMarker: "6B35E5686C", nameScene: "Stand Fedepalma", idScene: "E0E05366AB", points:50 },
    { nameMarker: "Página web", idMarker: "8D2854B920", nameScene: "Stand Fedepalma", idScene: "E0E05366AB", points:50 },
    { nameMarker: "Tratamiento de datos", idMarker: "11949EF363", nameScene: "Stand Fedepalma", idScene: "E0E05366AB", points:0 },
    { nameMarker: "PDF", idMarker: "AA597FD3EA", nameScene: "Stand Fedepalma", idScene: "E0E05366AB", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "B59D33A17E", nameScene: "Stand Fedepalma", idScene: "E0E05366AB", points:0 },
    { nameMarker: "Video Fedepalma 1", idMarker: "90D49E3AB2", nameScene: "Stand Fedepalma Interior", idScene: "9B645CA27C", points:50 },
    { nameMarker: "Video Fedepalma 2", idMarker: "600D2D4DDC", nameScene: "Stand Fedepalma Interior", idScene: "9B645CA27C", points:50 },
    { nameMarker: "Video Fedepalma 3", idMarker: "9EB36B2A39", nameScene: "Stand Fedepalma Interior", idScene: "9B645CA27C", points:50 },
    { nameMarker: "Stand Fedepalma Exterior", idMarker: "490FFA0CC2", nameScene: "Stand Fedepalma Interior", idScene: "9B645CA27C", points:0 },

    { nameMarker: "WhatsApp", idMarker: "55008BCE22", nameScene: "Stand YARA", idScene: "DD4DE136FC", points:50 },
    { nameMarker: "Página web", idMarker: "AD833022C3", nameScene: "Stand YARA", idScene: "DD4DE136FC", points:50 },
    { nameMarker: "PDF", idMarker: "D518027052", nameScene: "Stand YARA", idScene: "DD4DE136FC", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "494C3404ED", nameScene: "Stand YARA", idScene: "DD4DE136FC", points:0 },
    { nameMarker: "Video YARA 1", idMarker: "FF46E214AC", nameScene: "Stand YARA Interior", idScene: "47006B1CE4", points:50 },
    { nameMarker: "Video YARA 2", idMarker: "2C74448AD5", nameScene: "Stand YARA Interior", idScene: "47006B1CE4", points:50 },
    { nameMarker: "Video YARA 3", idMarker: "C8ACDF08A3", nameScene: "Stand YARA Interior", idScene: "47006B1CE4", points:50 },
    { nameMarker: "Stand YARA Exterior", idMarker: "F02E358E9C", nameScene: "Stand YARA Interior", idScene: "47006B1CE4", points:0 },

    { nameMarker: "WhatsApp", idMarker: "32ECFCB91C", nameScene: "Stand Metalteco", idScene: "77849D82B9", points:50 },
    { nameMarker: "Página web", idMarker: "0FAA5F724F", nameScene: "Stand Metalteco", idScene: "77849D82B9", points:50 },
    { nameMarker: "Tratamiento de datos", idMarker: "EC3A41A10D", nameScene: "Stand Metalteco", idScene: "77849D82B9", points:0 },
    { nameMarker: "PDF", idMarker: "75D0F9BE77", nameScene: "Stand Metalteco", idScene: "77849D82B9", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "1F3B1F2859", nameScene: "Stand Metalteco", idScene: "77849D82B9", points:0 },
    { nameMarker: "Video Metalteco 1", idMarker: "912189CB67", nameScene: "Stand Metalteco Interior", idScene: "24839CDDF2", points:50 },
    { nameMarker: "Video Metalteco 2", idMarker: "8278A0F1B4", nameScene: "Stand Metalteco Interior", idScene: "24839CDDF2", points:50 },
    { nameMarker: "Video Metalteco 3", idMarker: "DF68EEF728", nameScene: "Stand Metalteco Interior", idScene: "24839CDDF2", points:50 },
    { nameMarker: "Stand Metalteco Exterior", idMarker: "AA1B68381E", nameScene: "Stand Metalteco Interior", idScene: "24839CDDF2", points:0 },

    { nameMarker: "WhatsApp", idMarker: "708265CBB4", nameScene: "Stand Phina Biosoluciones", idScene: "06A7D478E5", points:50 },
    { nameMarker: "Página web", idMarker: "AD1E4A1FA5", nameScene: "Stand Phina Biosoluciones", idScene: "06A7D478E5", points:50 },
    { nameMarker: "Página web 2", idMarker: "ACE98F32A5", nameScene: "Stand Phina Biosoluciones", idScene: "06A7D478E5", points:0 },
    { nameMarker: "Tratamiento de datos", idMarker: "6B2E1258B3", nameScene: "Stand Phina Biosoluciones", idScene: "06A7D478E5", points:0 },
    { nameMarker: "PDF", idMarker: "08D8899621", nameScene: "Stand Phina Biosoluciones", idScene: "06A7D478E5", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "EEFACA07F0", nameScene: "Stand Phina Biosoluciones", idScene: "06A7D478E5", points:0 },
    { nameMarker: "Video Phina Biosoluciones 1", idMarker: "8662188D21", nameScene: "Stand Phina Biosoluciones Interior", idScene: "4B4919A432", points:50 },
    { nameMarker: "Video Phina Biosoluciones 2", idMarker: "8CFB01DC71", nameScene: "Stand Phina Biosoluciones Interior", idScene: "4B4919A432", points:50 },
    { nameMarker: "Video Phina Biosoluciones 3", idMarker: "2357F83CB2", nameScene: "Stand Phina Biosoluciones Interior", idScene: "4B4919A432", points:50 },
    { nameMarker: "Stand Phina Biosoluciones Exterior", idMarker: "F7E4EDAEEB", nameScene: "Stand Phina Biosoluciones Interior", idScene: "4B4919A432", points:0 },

    { nameMarker: "WhatsApp", idMarker: "A82D06FEA9", nameScene: "Stand Navitrans S.A", idScene: "B2F007A812", points:50 },
    { nameMarker: "Página web", idMarker: "CCBDC5C996", nameScene: "Stand Navitrans S.A", idScene: "B2F007A812", points:50 },
    { nameMarker: "Página web 2", idMarker: "3FFDF83007", nameScene: "Stand Navitrans S.A", idScene: "B2F007A812", points:0 },
    { nameMarker: "PDF", idMarker: "CFDD48E430", nameScene: "Stand Navitrans S.A", idScene: "B2F007A812", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "699D79520E", nameScene: "Stand Navitrans S.A", idScene: "B2F007A812", points:0 },
    { nameMarker: "Video Navitrans S.A 1", idMarker: "76CCE3E907", nameScene: "Stand Navitrans S.A Interior", idScene: "A968850BAC", points:50 },
    { nameMarker: "Video Navitrans S.A 2", idMarker: "F75835633D", nameScene: "Stand Navitrans S.A Interior", idScene: "A968850BAC", points:50 },
    { nameMarker: "Video Navitrans S.A 3", idMarker: "0119EFABBC", nameScene: "Stand Navitrans S.A Interior", idScene: "A968850BAC", points:50 },
    { nameMarker: "Stand Navitrans S.A Exterior", idMarker: "BD59DF53A2", nameScene: "Stand Navitrans S.A Interior", idScene: "A968850BAC", points:0 },

    { nameMarker: "WhatsApp", idMarker: "B4CF91AC9A", nameScene: "Stand Disan Agro", idScene: "E722FAB9B6", points:50 },
    { nameMarker: "Página web", idMarker: "E3B187734E", nameScene: "Stand Disan Agro", idScene: "E722FAB9B6", points:50 },
    { nameMarker: "Página web 2", idMarker: "36A46C8290", nameScene: "Stand Disan Agro", idScene: "E722FAB9B6", points:0 },
    { nameMarker: "Tratamiento de datos", idMarker: "3515F983C2", nameScene: "Stand Disan Agro", idScene: "E722FAB9B6", points:0 },
    { nameMarker: "PDF", idMarker: "021A343EA3", nameScene: "Stand Disan Agro", idScene: "E722FAB9B6", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "2B9C9DABC3", nameScene: "Stand Disan Agro", idScene: "E722FAB9B6", points:0 },
    { nameMarker: "Video Disan Agro 1", idMarker: "3451C7D311", nameScene: "Stand Disan Agro Interior", idScene: "CCFD7AD9A5", points:50 },
    { nameMarker: "Video Disan Agro 2", idMarker: "9F7ED1A8D4", nameScene: "Stand Disan Agro Interior", idScene: "CCFD7AD9A5", points:50 },
    { nameMarker: "Video Disan Agro 3", idMarker: "544AF56D07", nameScene: "Stand Disan Agro Interior", idScene: "CCFD7AD9A5", points:50 },
    { nameMarker: "Stand Disan Agro Exterior", idMarker: "217FF95169", nameScene: "Stand Disan Agro Interior", idScene: "CCFD7AD9A5", points:0 },

    { nameMarker: "WhatsApp", idMarker: "C83F507BAC", nameScene: "Stand Distrimalayo", idScene: "775AF0FDA5", points:50 },
    { nameMarker: "Página web", idMarker: "7E9398CCD0", nameScene: "Stand Distrimalayo", idScene: "775AF0FDA5", points:50 },
    { nameMarker: "Página web Linkedin", idMarker: "07DCEA5DA0", nameScene: "Stand Distrimalayo", idScene: "775AF0FDA5", points:0 },
    { nameMarker: "Tratamientos de datos", idMarker: "3D0FF35D73", nameScene: "Stand Distrimalayo", idScene: "775AF0FDA5", points:0 },
    { nameMarker: "PDF", idMarker: "8D0A59F8DE", nameScene: "Stand Distrimalayo", idScene: "775AF0FDA5", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "FFD29D4B60", nameScene: "Stand Distrimalayo", idScene: "775AF0FDA5", points:0 },
    { nameMarker: "Video Distrimalayo 1", idMarker: "BAD97D03BE", nameScene: "Stand Distrimalayo Interior", idScene: "AF01F01EF9", points:50 },
    { nameMarker: "Video Distrimalayo 2", idMarker: "B4614CE4DE", nameScene: "Stand Distrimalayo Interior", idScene: "AF01F01EF9", points:50 },
    { nameMarker: "Video Distrimalayo 3", idMarker: "A752FF2E80", nameScene: "Stand Distrimalayo Interior", idScene: "AF01F01EF9", points:50 },
    { nameMarker: "Stand Distrimalayo Exterior", idMarker: "1093CC9DCB", nameScene: "Stand Distrimalayo Interior", idScene: "AF01F01EF9", points:0 },
    
    { nameMarker: "WhatsApp", idMarker: "FD7556BA8C", nameScene: "Stand Tienda Palmera", idScene: "02EA04C21F", points:50 },
    { nameMarker: "Página web", idMarker: "391148DFD2", nameScene: "Stand Tienda Palmera", idScene: "02EA04C21F", points:50 },
    { nameMarker: "PDF", idMarker: "38461F267E", nameScene: "Stand Tienda Palmera", idScene: "02EA04C21F", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "C4FA6AEE9E", nameScene: "Stand Tienda Palmera", idScene: "02EA04C21F", points:0 },
    { nameMarker: "Video Tienda Palmera 1", idMarker: "23C0F089DD", nameScene: "Stand Tienda Palmera Interior", idScene: "3BE3F202C5", points:50 },
    { nameMarker: "Video Tienda Palmera 2", idMarker: "5A5C50DA3F", nameScene: "Stand Tienda Palmera Interior", idScene: "3BE3F202C5", points:50 },
    { nameMarker: "Video Tienda Palmera 3", idMarker: "619F62A708", nameScene: "Stand Tienda Palmera Interior", idScene: "3BE3F202C5", points:50 },
    { nameMarker: "Stand Tienda Palmera Exterior", idMarker: "8879095C98", nameScene: "Stand Tienda Palmera Interior", idScene: "3BE3F202C5", points:0 },
    
    { nameMarker: "WhatsApp", idMarker: "6FFE72A6D2", nameScene: "Stand Imecol", idScene: "976E933A0C", points:50 },
    { nameMarker: "Página web", idMarker: "0FAFF77250", nameScene: "Stand Imecol", idScene: "976E933A0C", points:50 },
    { nameMarker: "Página web 2", idMarker: "6857C35635", nameScene: "Stand Imecol", idScene: "976E933A0C", points:0 },
    { nameMarker: "PDF", idMarker: "6C73847D74", nameScene: "Stand Imecol", idScene: "976E933A0C", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "9410031AAD", nameScene: "Stand Imecol", idScene: "976E933A0C", points:0 },
    { nameMarker: "Video Imecol 1", idMarker: "B072329681", nameScene: "Stand Imecol Interior", idScene: "E35215EF1D", points:50 },
    { nameMarker: "Video Imecol 2", idMarker: "E773E04B25", nameScene: "Stand Imecol Interior", idScene: "E35215EF1D", points:50 },
    { nameMarker: "Video Imecol 3", idMarker: "F118592838", nameScene: "Stand Imecol Interior", idScene: "E35215EF1D", points:50 },
    { nameMarker: "Stand Imecol Exterior", idMarker: "42D2A08B4A", nameScene: "Stand Imecol Interior", idScene: "E35215EF1D", points:0 },

    { nameMarker: "WhatsApp", idMarker: "BCD9792217", nameScene: "Stand CID Palmero", idScene: "F1168333B3", points:50 },
    { nameMarker: "Página web", idMarker: "7944E5CB1B", nameScene: "Stand CID Palmero", idScene: "F1168333B3", points:50 },
    { nameMarker: "PDF", idMarker: "1A68052034", nameScene: "Stand CID Palmero", idScene: "F1168333B3", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "B11A099BCE", nameScene: "Stand CID Palmero", idScene: "F1168333B3", points:0 },
    { nameMarker: "Video CID Palmero 1", idMarker: "340D073714", nameScene: "Stand CID Palmero Interior", idScene: "A08BC10533", points:50 },
    { nameMarker: "Video CID Palmero 2", idMarker: "FCE1C47617", nameScene: "Stand CID Palmero Interior", idScene: "A08BC10533", points:50 },
    { nameMarker: "Video CID Palmero 3", idMarker: "27CB2DFDC7", nameScene: "Stand CID Palmero Interior", idScene: "A08BC10533", points:50 },
    { nameMarker: "Stand CID Palmero Exterior", idMarker: "0377F69D0C", nameScene: "Stand CID Palmero Interior", idScene: "A08BC10533", points:0 },

    { nameMarker: "WhatsApp", idMarker: "160AFB9EF5", nameScene: "Stand CCV Grupo", idScene: "9C5463E6F7", points:50 },
    { nameMarker: "Página web", idMarker: "91E7FA5EB5", nameScene: "Stand CCV Grupo", idScene: "9C5463E6F7", points:50 },
    { nameMarker: "Tratamiento de datos", idMarker: "D8627EDD8E", nameScene: "Stand CCV Grupo", idScene: "9C5463E6F7", points:0 },
    { nameMarker: "PDF", idMarker: "BF9324867B", nameScene: "Stand CCV Grupo", idScene: "9C5463E6F7", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "6819B3F214", nameScene: "Stand CCV Grupo", idScene: "9C5463E6F7", points:0 },
    { nameMarker: "Video CCV Grupo 1", idMarker: "12A72F66DA", nameScene: "Stand CCV Grupo Interior", idScene: "3B00EFD3D1", points:50 },
    { nameMarker: "Video CCV Grupo 2", idMarker: "9BB0EA7F2E", nameScene: "Stand CCV Grupo Interior", idScene: "3B00EFD3D1", points:50 },
    { nameMarker: "Video CCV Grupo 3", idMarker: "7B7A110607", nameScene: "Stand CCV Grupo Interior", idScene: "3B00EFD3D1", points:50 },
    { nameMarker: "Stand CCV Grupo Exterior", idMarker: "CDF6F1C7AD", nameScene: "Stand CCV Grupo Interior", idScene: "3B00EFD3D1", points:0 },

    { nameMarker: "WhatsApp", idMarker: "F1223848A7", nameScene: "Stand SEPALM", idScene: "8C7ACE7918", points:50 },
    { nameMarker: "Página web", idMarker: "A6E40FB6F1", nameScene: "Stand SEPALM", idScene: "8C7ACE7918", points:50 },
    { nameMarker: "Tratamiento de datos", idMarker: "40F1C817AC", nameScene: "Stand SEPALM", idScene: "8C7ACE7918", points:0 },
    { nameMarker: "PDF", idMarker: "89918A205B", nameScene: "Stand SEPALM", idScene: "8C7ACE7918", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "2C66064F52", nameScene: "Stand SEPALM", idScene: "8C7ACE7918", points:0 },
    { nameMarker: "Video SEPALM 1", idMarker: "8AB6E0C7C7", nameScene: "Stand SEPALM Interior", idScene: "D9EED532FC", points:50 },
    { nameMarker: "Video SEPALM 2", idMarker: "17BEBAF98F", nameScene: "Stand SEPALM Interior", idScene: "D9EED532FC", points:50 },
    { nameMarker: "Video SEPALM 3", idMarker: "6B1D9641CE", nameScene: "Stand SEPALM Interior", idScene: "D9EED532FC", points:50 },
    { nameMarker: "Stand SEPALM Exterior", idMarker: "8E1B172346", nameScene: "Stand SEPALM Interior", idScene: "D9EED532FC", points:0 },

    { nameMarker: "WhatsApp", idMarker: "4BA64B2603", nameScene: "Stand Danco", idScene: "689668E9AB", points:50 },
    { nameMarker: "Página web", idMarker: "788B0E8CB0", nameScene: "Stand Danco", idScene: "689668E9AB", points:50 },
    { nameMarker: "Página web 2", idMarker: "845E8C3800", nameScene: "Stand Danco", idScene: "689668E9AB", points:0 },
    { nameMarker: "PDF", idMarker: "073A7C3859", nameScene: "Stand Danco", idScene: "689668E9AB", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "49A9217724", nameScene: "Stand Danco", idScene: "689668E9AB", points:0 },
    { nameMarker: "Video Danco 1", idMarker: "735E595238", nameScene: "Stand Danco Interior", idScene: "18E898CBE0", points:50 },
    { nameMarker: "Video Danco 2", idMarker: "6706CA304D", nameScene: "Stand Danco Interior", idScene: "18E898CBE0", points:50 },
    { nameMarker: "Video Danco 3", idMarker: "C633DECCEA", nameScene: "Stand Danco Interior", idScene: "18E898CBE0", points:50 },
    { nameMarker: "Stand Danco Exterior", idMarker: "7DA58398AB", nameScene: "Stand Danco Interior", idScene: "18E898CBE0", points:0 },

    { nameMarker: "WhatsApp", idMarker: "23298D19EC", nameScene: "Stand Banco Agrario", idScene: "4B7FBC9BFD", points:50 },
    { nameMarker: "Página web", idMarker: "711B75A4D2", nameScene: "Stand Banco Agrario", idScene: "4B7FBC9BFD", points:50 },
    { nameMarker: "Página web 2", idMarker: "A080F10443", nameScene: "Stand Banco Agrario", idScene: "4B7FBC9BFD", points:0 },
    { nameMarker: "PDF", idMarker: "24B40F3B21", nameScene: "Stand Banco Agrario", idScene: "4B7FBC9BFD", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "50C663C727", nameScene: "Stand Banco Agrario", idScene: "4B7FBC9BFD", points:0 },
    { nameMarker: "Video Banco Agrario 1", idMarker: "00A9BD55FF", nameScene: "Stand Banco Agrario Interior", idScene: "00F33324ED", points:50 },
    { nameMarker: "Video Banco Agrario 2", idMarker: "24420C6801", nameScene: "Stand Banco Agrario Interior", idScene: "00F33324ED", points:50 },
    { nameMarker: "Video Banco Agrario 3", idMarker: "47C2E894E7", nameScene: "Stand Banco Agrario Interior", idScene: "00F33324ED", points:50 },
    { nameMarker: "Stand Banco Agrario Exterior", idMarker: "B6588AE4B6", nameScene: "Stand Banco Agrario Interior", idScene: "00F33324ED", points:0 },

    { nameMarker: "WhatsApp", idMarker: "A19A50F5F9", nameScene: "Stand DAABON", idScene: "BC05BE7DB8", points:50 },
    { nameMarker: "Página web", idMarker: "C6A4E162BC", nameScene: "Stand DAABON", idScene: "BC05BE7DB8", points:50 },
    { nameMarker: "PDF", idMarker: "5E792147D0", nameScene: "Stand DAABON", idScene: "BC05BE7DB8", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "5F493387BC", nameScene: "Stand DAABON", idScene: "BC05BE7DB8", points:0 },
    { nameMarker: "Video DAABON 1", idMarker: "CF2A4BEDAC", nameScene: "Stand DAABON Interior", idScene: "E35E35639A", points:50 },
    { nameMarker: "Video DAABON 2", idMarker: "B7E3E0D165", nameScene: "Stand DAABON Interior", idScene: "E35E35639A", points:50 },
    { nameMarker: "Video DAABON 3", idMarker: "8E59C9BCF0", nameScene: "Stand DAABON Interior", idScene: "E35E35639A", points:50 },
    { nameMarker: "Stand DAABON Exterior", idMarker: "28785F8CEC", nameScene: "Stand DAABON Interior", idScene: "E35E35639A", points:0 },
    
    { nameMarker: "WhatsApp", idMarker: "7AD39704B2", nameScene: "Stand EIMPSA", idScene: "88655D02F6", points:50 },
    { nameMarker: "Página web", idMarker: "BEF6BAB81E", nameScene: "Stand EIMPSA", idScene: "88655D02F6", points:50 },
    { nameMarker: "Página web 2", idMarker: "1111D03649", nameScene: "Stand EIMPSA", idScene: "88655D02F6", points:0 },
    { nameMarker: "PDF", idMarker: "A9330E386C", nameScene: "Stand EIMPSA", idScene: "88655D02F6", points:50 },
    { nameMarker: "Ingresar al Stand", idMarker: "455093F934", nameScene: "Stand EIMPSA", idScene: "88655D02F6", points:0 },
    { nameMarker: "Video EIMPSA 1", idMarker: "15F3FB57B4", nameScene: "Stand EIMPSA Interior", idScene: "D567489691", points:50 },
    { nameMarker: "Video EIMPSA 2", idMarker: "99E540F71E", nameScene: "Stand EIMPSA Interior", idScene: "D567489691", points:50 },
    { nameMarker: "Video EIMPSA 3", idMarker: "94248EDB90", nameScene: "Stand EIMPSA Interior", idScene: "D567489691", points:50 },
    { nameMarker: "Stand EIMPSA Exterior", idMarker: "80E84A629F", nameScene: "Stand EIMPSA Interior", idScene: "D567489691", points:0 },

  ]
  
  const dataScenes = [
    { nameScene: "Fachada inicial", idScene: "7B71545122" },
    { nameScene: "Fachada después del un paso", idScene: "1CB5081B1F" },
    { nameScene: "Lobby recepción", idScene: "B759528D16" },
    { nameScene: "Lobby principal", idScene: "EBF4CA2DCB" },
    { nameScene: "Muestra comercial", idScene: "632E78A39F" },
    { nameScene: "Salón Plenaria", idScene: "A2DEEE00A6" },
    { nameScene: "Salón Modulo 3", idScene: "0384FC8E82" },
    { nameScene: "Stand Cenipalma", idScene: "07601BB604" },
    { nameScene: "Stan Cenipalma Interior", idScene: "4AF7AE4070" },
    { nameScene: "Stand Monómeros", idScene: "80100DAC87" }, 
    { nameScene: "Stand Monómeros Interior", idScene: "9548B4C1F2" }, 
    { nameScene: "Stand Acepalma", idScene: "0684F3D38B" },
    { nameScene: "Stand Acepalma Interior", idScene: "6E9A5501F7" },
    { nameScene: "Stand Tecnopalma", idScene: "22C53F86AA" },
    { nameScene: "Stand Tecnopalma Interior", idScene: "E160F86428" },
    { nameScene: "Stand Fedepalma", idScene: "E0E05366AB" },
    { nameScene: "Stand Fedepalma Interior", idScene: "9B645CA27C" },
    { nameScene: "Stand YARA", idScene: "DD4DE136FC" },
    { nameScene: "Stand YARA Interior", idScene: "47006B1CE4" },
    { nameScene: "Stand Metalteco", idScene: "77849D82B9" },
    { nameScene: "Stand Metalteco Interior", idScene: "24839CDDF2" },
    { nameScene: "Stand Phina Biosoluciones", idScene: "06A7D478E5" },
    { nameScene: "Stand Phina Biosoluciones Interior", idScene: "4B4919A432" },
    { nameScene: "Stand Navitrans S.A", idScene: "B2F007A812" },
    { nameScene: "Stand Navitrans S.A Interior", idScene: "A968850BAC" },
    { nameScene: "Stand Disan Agro", idScene: "E722FAB9B6" },
    { nameScene: "Stand Disan Agro Interior", idScene: "CCFD7AD9A5" },
    { nameScene: "Stand Distrimalayo", idScene: "775AF0FDA5" },
    { nameScene: "Stand Distrimalayo Interior", idScene: "AF01F01EF9" },
    { nameScene: "Stand Tienda Palmera", idScene: "02EA04C21F" },
    { nameScene: "Stand Tienda Palmera Interior", idScene: "3BE3F202C5" },
    { nameScene: "Stand Imecol", idScene: "976E933A0C" },
    { nameScene: "Stand Imecol Interior", idScene: "E35215EF1D" },
    { nameScene: "Stand CID Palmero", idScene: "F1168333B3" },
    { nameScene: "Stand CID Palmero Interior", idScene: "A08BC10533" },
    { nameScene: "Stand CCV Grupo", idScene: "9C5463E6F7" },
    { nameScene: "Stand CCV Grupo Interior", idScene: "3B00EFD3D1" },
    { nameScene: "Stand SEPALM", idScene: "8C7ACE7918" },
    { nameScene: "Stand SEPALM Interior", idScene: "D9EED532FC" },
    { nameScene: "Stand Danco", idScene: "689668E9AB" },
    { nameScene: "Stand Danco Interior", idScene: "18E898CBE0" },
    { nameScene: "Stand Banco Agrario", idScene: "4B7FBC9BFD" },
    { nameScene: "Stand Banco Agrario Interior", idScene: "00F33324ED" },
    { nameScene: "Stand DAABON", idScene: "BC05BE7DB8" },
    { nameScene: "Stand DAABON Interior", idScene: "E35E35639A" },
    { nameScene: "Stand EIMPSA", idScene: "88655D02F6" },
    { nameScene: "Stand EIMPSA Interior", idScene: "D567489691" },
  ]       
  
  
  const viewContentSliderStand = (idScene) => {
    if ( idScene === '7B71545122' || idScene === '1CB5081B1F' || idScene === 'B759528D16' || idScene === 'EBF4CA2DCB' || idScene === 'A2DEEE00A6' || idScene === '0384FC8E82' ) {
      contentSliderStand.css('display', 'none');
    } else {
      contentSliderStand.css('display', 'block');
    }
  }                 
  
  
  btnFachada.on('click', () => { onSetScene( "7B71545122" ) });
  btnLobby.on('click', () => { onSetScene( "B759528D16" ) });
  btnMuestraComercial.on('click', () => { onSetScene( "632E78A39F", 50, 'Lobby principal', 'Muestra comercial' ) });  

   
  //jQuery('.btn-ir-salon-plenaria').on('click', () => { onSetScene( "A2DEEE00A6", 'Salón Modulo 3', "Conferencia salón Modulo 3", 100 ) });


  
  jQuery('.stand-cenipalma').on('click', () => { onSetScene( "07601BB604", 'Muestra comercial', "Stand Cenipalma", 100 ) });
  jQuery('.stand-monomeros').on('click', () => { onSetScene( "80100DAC87", 'Muestra comercial', "Stand Monómeros", 100 ) });
  jQuery('.stand-acepalma').on('click', () => { onSetScene( "0684F3D38B", 'Muestra comercial', "Stand Acepalma", 400 ) });
  jQuery('.stand-tecnopalma').on('click', () => { onSetScene( "22C53F86AA", 'Muestra comercial', "Stand Tecnopalma", 100 ) });
  jQuery('.stand-fedepalma').on('click', () => { onSetScene( "E0E05366AB", 'Muestra comercial', "Stand Fedepalma", 100 ) });
  jQuery('.stand-yara').on('click', () => { onSetScene( "DD4DE136FC", 'Muestra comercial', "Stand YARA", 100 ) });
  jQuery('.stand-metalteco').on('click', () => { onSetScene( "77849D82B9", 'Muestra comercial', "Stand Metalteco", 100 ) });
  jQuery('.stand-biosoluciones').on('click', () => { onSetScene( "06A7D478E5", 'Muestra comercial', "Stand Phina Biosoluciones", 100 ) });
  jQuery('.stand-navitrans').on('click', () => { onSetScene( "B2F007A812", 'Muestra comercial', "Stand Navitrans S.A", 100 ) });
  jQuery('.stand-disan-agro').on('click', () => { onSetScene( "E722FAB9B6", 'Muestra comercial', "Stand Disan Agro", 100 ) });
  jQuery('.stand-distrimalayo').on('click', () => { onSetScene( "775AF0FDA5", 'Muestra comercial', "Stand Distrimalayo", 100 ) });
  jQuery('.stand-tienda-palmera').on('click', () => { onSetScene( "02EA04C21F", 'Muestra comercial', "Stand Tienda Palmera", 100 ) });  
  jQuery('.stand-imecol').on('click', () => { onSetScene( "976E933A0C", 'Muestra comercial', "Stand Imecol", 100 ) });
  jQuery('.stand-cid-palmero').on('click', () => { onSetScene( "F1168333B3", 'Muestra comercial', "Stand CID Palmero" , 100 ) });
  jQuery('.stand-ccv-grupo').on('click', () => { onSetScene( "9C5463E6F7", 'Muestra comercial', "Stand CCV Grupo" , 100 ) });
  jQuery('.stand-sepalm').on('click', () => { onSetScene( "8C7ACE7918", 'Muestra comercial', "Stand SEPALM", 100 ) });  
  jQuery('.stand-danco').on('click', () => { onSetScene( "689668E9AB", 'Muestra comercial', "Stand Danco", 100 ) });
  jQuery('.stand-banco-agrario').on('click', () => { onSetScene( "4B7FBC9BFD", 'Muestra comercial', "Stand Banco Agrario", 100 ) });
  jQuery('.stand-daabon').on('click', () => { onSetScene( "BC05BE7DB8", 'Muestra comercial', "Stand DAABON", 100 ) });  
  jQuery('.stand-eimpsa').on('click', () => { onSetScene( "88655D02F6", 'Muestra comercial', "Stand EIMPSA", 100 ) });  
  
  
  
  jQuery('.agenda-programa').on('click', () => { onSetScene( "B759528D16", 'Lobby recepción', "Agenda/Programa", 20 ) });
  jQuery('.canal-youtube').on('click', () => { onSetScene( "B759528D16", 'Lobby recepción', "Canal YouTube", 20 ) });
  jQuery('.expositores').on('click', () => { onSetScene( "B759528D16", 'Lobby recepción', "Expositores", 200 ) });
  jQuery('.patrocinadores').on('click', () => { onSetScene( "B759528D16", 'Lobby recepción', "Catalogo de patrocinadores", 20 ) });
  jQuery('.sala-prensa').on('click', () => { onSetScene( "B759528D16", 'Lobby recepción', "Sala de prensa", 20 ) });
  
  const onSetScene = ( idScene, nameScene = '', click_name = '', points = 0 ) => {
    const email = jQuery('#currentUserEmail').val();     
    if ( !email ) window.location.href = 'https://reuniontecnicanacional.com/';
    
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
    console.log('info', e);
    const email = jQuery('#currentUserEmail').val();     
    if ( !email ) window.location.href = 'https://reuniontecnicanacional.com/';
    
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
