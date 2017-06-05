//
// main
//


// example AJAX call

// $(function() {
//   $('a#calculate').bind('click', function() {
//     $.getJSON('../../_add_numbers', {
//       a: $('input[name="a"]').val(),
//       b: $('input[name="b"]').val()
//     }, function(data) {
//       $("#result").text(data.result);
//     });
//     return false;
//   });
// });

// $(function() {
//   $('img').bind('click', function() {
//     $.getJSON('../../_add_numbers', {
//       a: $('input[name="a"]').val(),
//       b: $('input[name="b"]').val()
//     }, function(data) {
//       $("#result").text(data.result);
//     });
//     return false;
//   });
// });


$(document).ready(function(){

	var images = ['static/notes_photos/IMG_20170604_100551.jpg', 'static/notes_photos/IMG_20170604_100654.jpg', 'static/notes_photos/IMG_20170604_100714.jpg', 'static/notes_photos/IMG_20170604_100738.jpg', 'static/notes_photos/IMG_20170604_100746.jpg', 'static/notes_photos/IMG_20170604_100801.jpg', 'static/notes_photos/IMG_20170604_100805.jpg', 'static/notes_photos/IMG_20170604_100814.jpg', 'static/notes_photos/IMG_20170604_100819.jpg', 'static/notes_photos/IMG_20170604_100831.jpg', 'static/notes_photos/IMG_20170604_100837.jpg', 'static/notes_photos/IMG_20170604_100853.jpg', 'static/notes_photos/IMG_20170604_100914.jpg', 'static/notes_photos/IMG_20170604_100922.jpg', 'static/notes_photos/IMG_20170604_100931.jpg', 'static/notes_photos/IMG_20170604_100950.jpg', 'static/notes_photos/IMG_20170604_101006.jpg', 'static/notes_photos/IMG_20170604_101018.jpg', 'static/notes_photos/IMG_20170604_101035.jpg', 'static/notes_photos/IMG_20170604_101041.jpg', 'static/notes_photos/IMG_20170604_101133.jpg', 'static/notes_photos/IMG_20170604_101139.jpg', 'static/notes_photos/IMG_20170604_101217.jpg', 'static/notes_photos/IMG_20170604_101225.jpg', 'static/notes_photos/IMG_20170604_101256.jpg', 'static/notes_photos/IMG_20170604_101315.jpg', 'static/notes_photos/IMG_20170604_101347.jpg', 'static/notes_photos/IMG_20170604_101405.jpg', 'static/notes_photos/IMG_20170604_101416.jpg', 'static/notes_photos/IMG_20170604_101431.jpg', 'static/notes_photos/IMG_20170604_101443.jpg', 'static/notes_photos/IMG_20170604_101448.jpg', 'static/notes_photos/IMG_20170604_101511.jpg', 'static/notes_photos/IMG_20170604_101528.jpg', 'static/notes_photos/IMG_20170604_101738.jpg', 'static/notes_photos/IMG_20170604_101748.jpg', 'static/notes_photos/IMG_20170604_101759.jpg', 'static/notes_photos/IMG_20170604_101806.jpg', 'static/notes_photos/IMG_20170604_101814.jpg', 'static/notes_photos/IMG_20170604_101900.jpg', 'static/notes_photos/IMG_20170604_101942.jpg', 'static/notes_photos/IMG_20170604_102001.jpg', 'static/notes_photos/IMG_20170604_102027.jpg', 'static/notes_photos/IMG_20170604_102049.jpg', 'static/notes_photos/IMG_20170604_102116.jpg', 'static/notes_photos/IMG_20170604_102120.jpg', 'static/notes_photos/IMG_20170604_102217.jpg', 'static/notes_photos/IMG_20170604_102233.jpg', 'static/notes_photos/IMG_20170604_102242.jpg', 'static/notes_photos/IMG_20170604_102252.jpg', 'static/notes_photos/IMG_20170604_102257.jpg', 'static/notes_photos/IMG_20170604_102318.jpg', 'static/notes_photos/IMG_20170604_102343.jpg', 'static/notes_photos/IMG_20170604_102355.jpg', 'static/notes_photos/IMG_20170604_102414.jpg', 'static/notes_photos/IMG_20170604_102451.jpg', 'static/notes_photos/IMG_20170604_102514.jpg', 'static/notes_photos/IMG_20170604_102520.jpg', 'static/notes_photos/IMG_20170604_102532.jpg', 'static/notes_photos/IMG_20170604_102546.jpg', 'static/notes_photos/IMG_20170604_102609.jpg', 'static/notes_photos/IMG_20170604_102619.jpg', 'static/notes_photos/IMG_20170604_102718.jpg', 'static/notes_photos/IMG_20170604_102726.jpg', 'static/notes_photos/IMG_20170604_102742.jpg', 'static/notes_photos/IMG_20170604_102751.jpg', 'static/notes_photos/IMG_20170604_102839.jpg', 'static/notes_photos/IMG_20170604_102839_01.jpg', 'static/notes_photos/IMG_20170604_102840.jpg', 'static/notes_photos/IMG_20170604_102958.jpg', 'static/notes_photos/IMG_20170604_103019.jpg', 'static/notes_photos/IMG_20170604_103057.jpg', 'static/notes_photos/IMG_20170604_103114.jpg', 'static/notes_photos/IMG_20170604_103124.jpg', 'static/notes_photos/IMG_20170604_103146.jpg', 'static/notes_photos/IMG_20170604_103200.jpg', 'static/notes_photos/IMG_20170604_103219.jpg', 'static/notes_photos/IMG_20170604_103224.jpg', 'static/notes_photos/IMG_20170604_103243.jpg', 'static/notes_photos/IMG_20170604_103251.jpg', 'static/notes_photos/IMG_20170604_103321.jpg', 'static/notes_photos/IMG_20170604_103323.jpg', 'static/notes_photos/IMG_20170604_103323_01.jpg', 'static/notes_photos/IMG_20170604_103345.jpg', 'static/notes_photos/IMG_20170604_103410.jpg', 'static/notes_photos/IMG_20170604_103435.jpg', 'static/notes_photos/IMG_20170604_103442.jpg', 'static/notes_photos/IMG_20170604_103450.jpg', 'static/notes_photos/IMG_20170604_103459.jpg', 'static/notes_photos/IMG_20170604_103519.jpg', 'static/notes_photos/IMG_20170604_103530.jpg', 'static/notes_photos/IMG_20170604_103537.jpg', 'static/notes_photos/IMG_20170604_103552.jpg', 'static/notes_photos/IMG_20170604_103556.jpg', 'static/notes_photos/IMG_20170604_103605.jpg', 'static/notes_photos/IMG_20170604_103616.jpg', 'static/notes_photos/IMG_20170604_103636.jpg', 'static/notes_photos/IMG_20170604_103651.jpg', 'static/notes_photos/IMG_20170604_103723.jpg', 'static/notes_photos/IMG_20170604_103732.jpg', 'static/notes_photos/IMG_20170604_103752.jpg', 'static/notes_photos/IMG_20170604_103808.jpg', 'static/notes_photos/IMG_20170604_103823.jpg', 'static/notes_photos/IMG_20170604_103830.jpg', 'static/notes_photos/IMG_20170604_103847.jpg', 'static/notes_photos/IMG_20170604_103901.jpg', 'static/notes_photos/IMG_20170604_103920.jpg', 'static/notes_photos/IMG_20170604_103924.jpg', 'static/notes_photos/IMG_20170604_103939.jpg', 'static/notes_photos/IMG_20170604_103958.jpg', 'static/notes_photos/IMG_20170604_104021.jpg', 'static/notes_photos/IMG_20170604_104026.jpg', 'static/notes_photos/IMG_20170604_104037.jpg', 'static/notes_photos/IMG_20170604_104110.jpg', 'static/notes_photos/IMG_20170604_104115.jpg', 'static/notes_photos/IMG_20170604_104125.jpg', 'static/notes_photos/IMG_20170604_104133.jpg', 'static/notes_photos/IMG_20170604_104145.jpg', 'static/notes_photos/IMG_20170604_104154.jpg', 'static/notes_photos/IMG_20170604_104220.jpg', 'static/notes_photos/IMG_20170604_104230.jpg', 'static/notes_photos/IMG_20170604_104245.jpg', 'static/notes_photos/IMG_20170604_104250.jpg', 'static/notes_photos/IMG_20170604_104307.jpg', 'static/notes_photos/IMG_20170604_104322.jpg', 'static/notes_photos/IMG_20170604_104335.jpg', 'static/notes_photos/IMG_20170604_104340.jpg', 'static/notes_photos/IMG_20170604_104403.jpg', 'static/notes_photos/IMG_20170604_104409.jpg', 'static/notes_photos/IMG_20170604_104419.jpg', 'static/notes_photos/IMG_20170604_104438.jpg', 'static/notes_photos/IMG_20170604_104523.jpg', 'static/notes_photos/IMG_20170604_104541.jpg', 'static/notes_photos/IMG_20170604_104551.jpg', 'static/notes_photos/IMG_20170604_104607.jpg', 'static/notes_photos/IMG_20170604_104619.jpg', 'static/notes_photos/IMG_20170604_104626.jpg', 'static/notes_photos/IMG_20170604_104649.jpg', 'static/notes_photos/IMG_20170604_104810.jpg', 'static/notes_photos/IMG_20170604_104829.jpg', 'static/notes_photos/IMG_20170604_104837.jpg', 'static/notes_photos/IMG_20170604_104847.jpg', 'static/notes_photos/IMG_20170604_104856.jpg', 'static/notes_photos/IMG_20170604_104907.jpg', 'static/notes_photos/IMG_20170604_104922.jpg', 'static/notes_photos/IMG_20170604_104946.jpg', 'static/notes_photos/IMG_20170604_105002.jpg', 'static/notes_photos/IMG_20170604_105002_01.jpg', 'static/notes_photos/IMG_20170604_105017.jpg', 'static/notes_photos/IMG_20170604_105024.jpg', 'static/notes_photos/IMG_20170604_105038.jpg', 'static/notes_photos/IMG_20170604_105046.jpg', 'static/notes_photos/IMG_20170604_105055.jpg', 'static/notes_photos/IMG_20170604_105102.jpg', 'static/notes_photos/IMG_20170604_105114.jpg', 'static/notes_photos/IMG_20170604_105120.jpg', 'static/notes_photos/IMG_20170604_105141.jpg', 'static/notes_photos/IMG_20170604_105152.jpg', 'static/notes_photos/IMG_20170604_105158.jpg', 'static/notes_photos/IMG_20170604_105210.jpg', 'static/notes_photos/IMG_20170604_105216.jpg', 'static/notes_photos/IMG_20170604_105227.jpg', 'static/notes_photos/IMG_20170604_105233.jpg', 'static/notes_photos/IMG_20170604_105245.jpg', 'static/notes_photos/IMG_20170604_105251.jpg', 'static/notes_photos/IMG_20170604_105301.jpg', 'static/notes_photos/IMG_20170604_105309.jpg', 'static/notes_photos/IMG_20170604_105319.jpg', 'static/notes_photos/IMG_20170604_105325.jpg', 'static/notes_photos/IMG_20170604_105347.jpg', 'static/notes_photos/IMG_20170604_105356.jpg', 'static/notes_photos/IMG_20170604_105413.jpg', 'static/notes_photos/IMG_20170604_105422.jpg', 'static/notes_photos/IMG_20170604_105435.jpg', 'static/notes_photos/IMG_20170604_105441.jpg', 'static/notes_photos/IMG_20170604_105452.jpg', 'static/notes_photos/IMG_20170604_105458.jpg', 'static/notes_photos/IMG_20170604_105508.jpg', 'static/notes_photos/IMG_20170604_105513.jpg', 'static/notes_photos/IMG_20170604_105527.jpg', 'static/notes_photos/IMG_20170604_105531.jpg', 'static/notes_photos/IMG_20170604_105542.jpg', 'static/notes_photos/IMG_20170604_105548.jpg', 'static/notes_photos/IMG_20170604_105601.jpg', 'static/notes_photos/IMG_20170604_105607.jpg', 'static/notes_photos/IMG_20170604_105618.jpg', 'static/notes_photos/IMG_20170604_105624.jpg', 'static/notes_photos/IMG_20170604_105635.jpg', 'static/notes_photos/IMG_20170604_105642.jpg', 'static/notes_photos/IMG_20170604_105654.jpg', 'static/notes_photos/IMG_20170604_105713.jpg', 'static/notes_photos/IMG_20170604_105719.jpg', 'static/notes_photos/IMG_20170604_105734.jpg', 'static/notes_photos/IMG_20170604_105739.jpg', 'static/notes_photos/IMG_20170604_105748.jpg', 'static/notes_photos/IMG_20170604_105756.jpg', 'static/notes_photos/IMG_20170604_105810.jpg', 'static/notes_photos/IMG_20170604_105814.jpg', 'static/notes_photos/IMG_20170604_105825.jpg', 'static/notes_photos/IMG_20170604_105830.jpg', 'static/notes_photos/IMG_20170604_110041.jpg', 'static/notes_photos/IMG_20170604_110047.jpg', 'static/notes_photos/IMG_20170604_110100.jpg', 'static/notes_photos/IMG_20170604_110106.jpg', 'static/notes_photos/IMG_20170604_110117.jpg', 'static/notes_photos/IMG_20170604_110126.jpg', 'static/notes_photos/IMG_20170604_110137.jpg', 'static/notes_photos/IMG_20170604_110142.jpg', 'static/notes_photos/IMG_20170604_110151.jpg', 'static/notes_photos/IMG_20170604_110157.jpg', 'static/notes_photos/IMG_20170604_110205.jpg', 'static/notes_photos/IMG_20170604_110213.jpg', 'static/notes_photos/IMG_20170604_110227.jpg', 'static/notes_photos/IMG_20170604_110232.jpg', 'static/notes_photos/IMG_20170604_110242.jpg', 'static/notes_photos/IMG_20170604_110249.jpg', 'static/notes_photos/IMG_20170604_110306.jpg', 'static/notes_photos/IMG_20170604_110317.jpg', 'static/notes_photos/IMG_20170604_110317_01.jpg', 'static/notes_photos/IMG_20170604_110328.jpg', 'static/notes_photos/IMG_20170604_110334.jpg', 'static/notes_photos/IMG_20170604_110347.jpg', 'static/notes_photos/IMG_20170604_110512.jpg', 'static/notes_photos/IMG_20170604_110523.jpg', 'static/notes_photos/IMG_20170604_110532.jpg', 'static/notes_photos/IMG_20170604_110539.jpg', 'static/notes_photos/IMG_20170604_110553.jpg', 'static/notes_photos/IMG_20170604_110600.jpg', 'static/notes_photos/IMG_20170604_110609.jpg', 'static/notes_photos/IMG_20170604_110614.jpg', 'static/notes_photos/IMG_20170604_110624.jpg', 'static/notes_photos/IMG_20170604_110632.jpg', 'static/notes_photos/IMG_20170604_110640.jpg', 'static/notes_photos/IMG_20170604_110644.jpg', 'static/notes_photos/IMG_20170604_110650.jpg', 'static/notes_photos/IMG_20170604_110657.jpg', 'static/notes_photos/IMG_20170604_110709.jpg'];
	var counter = 0;

    $(document).keydown(function(e) {
	console.log('keydown event!!');
    switch(e.which) {
        case 37: // left
	        if (counter != 0){
				counter--;
			}
			console.log('left');
        break;

        case 39: // right
	        if (counter < images.length){
				counter++;
			}
			console.log('right');
        break;

        default: return; // exit this handler for other keys
    }

    console.log(counter);
    console.log(images[counter])
    console.log(images.length)
    document.getElementById('ex_img').src=images[counter];
});
});




// for (i = 0; i < images.length; ++i) {
//     console.log(images[i]);
// }


// document.getElementById(ex_img_id).src=ex_img_path;

// document.getElementById("ex_img_name").innerHTML="ex_img_path";