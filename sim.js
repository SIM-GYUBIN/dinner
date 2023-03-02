
// D-Day 구하기
var Dday = new Date(2021, 4, 23);    // D-day를 셋팅한다. (달+1)
var now = new Date();                    // 현재(오늘) 날짜를 받아온다.
var gap = now.getTime() - Dday.getTime();    // 현재 날짜에서 D-day의 차이를 구한다.
var Dday = Math.floor(gap / (1000 * 60 * 60 * 24)); 

var video = document.getElementById('video');

var ddayBlock = document.getElementById('dday');
var ddayWord = document.getElementById('ddayWord');

var timerid;

var monitor = window.matchMedia( '( min-width: 481px )' );
var mobile = window.matchMedia( '( max-width: 480px )' );

var css3 = document.getElementById('paragraph3');
var width3 = window.getComputedStyle(css3).width;
var height3 = window.getComputedStyle(css3).height;



// DDay word 변경 함수

paragraph.addEventListener("mouseenter", changeText);

function changeText() {
	if ( monitor.matches == true ) {
		timerid = setTimeout(()=>{
			ddayWord.innerText = "D+" + Dday;
		},1000)
	}
}


paragraph.addEventListener("mouseleave", changeText2);

function changeText2() {
	if ( monitor.matches == true ) {
		ddayWord.innerText = "D-Day";
		clearTimeout(timerid);
	}
}


// paragraph2에 celebrate html 삽입

paragraph2.addEventListener("mouseenter", load_page);

function load_page() {
	if ( monitor.matches == true ) {
		document.getElementById("paragraph2").innerHTML='<object type="text/html" data="celebrate/celebrate.html" style="width: 400px; height: 280px;" ></object>';
	}
}

paragraph2.addEventListener("mouseleave", exit_page);

function exit_page() {
	if ( monitor.matches == true ) {
		document.getElementById("paragraph2").innerHTML='축하남기기';
	}
}


// paragraph3에 photo html 삽입

paragraph3.addEventListener("mouseenter", load_Photopage);

function load_Photopage() {
	if ( monitor.matches == true ) {
		timerid = setTimeout(()=>{
		document.getElementById("paragraph3").innerHTML='<object type="text/html" data="photo/photo.html" style="width: 440px; height: 300px;" ></object>';
		},800)
	}
}

paragraph3.addEventListener("mouseleave", exit_Photopage);

function exit_Photopage() {
	if ( monitor.matches == true ) {
		document.getElementById("paragraph3").innerHTML='사진전';
		clearTimeout(timerid);
	}
}



//-------------------------MOBILE 반응형------------------------------------

// DDay word 변경 함수 (MOBILE)

paragraph.addEventListener("click", M_changeText);

function M_changeText() {
	if ( mobile.matches == true ) {
			paragraph.classList.add('block1_M');
			ddayWord.innerText = "D-" + Dday;
	}
}

// DDAY 원복

function goto(event) {
  var noRedirect = 'block1';
  if ((!event.target.classList.contains(noRedirect)) && (mobile.matches == true)) {
    paragraph.classList.remove('block1_M');
	ddayWord.innerText = "D-DAY";
  }
};
document.body.addEventListener('click', goto);





// paragraph2에 celebrate html 삽입 (MOBILE)

paragraph2.addEventListener("click", M_load_page);

function M_load_page() {
	if ( mobile.matches == true ) {
 		document.getElementById("paragraph2").innerHTML='<object type="text/html" data="celebrate/celebrate.html" style="width: 425px; height: 20vh;" ></object>';
	}
}

// paragraph2 원복

function goto2(event) {
  var noRedirect = 'block2';
  if ((!event.target.classList.contains(noRedirect)) && (mobile.matches == true)) {
    document.getElementById("paragraph2").innerHTML='축하남기기';
  }
};
document.body.addEventListener('click', goto2);

// paragraph3에 photo html 삽입
	
paragraph3.addEventListener("click", M_load_Photopage);

function M_load_Photopage() {
	if ( mobile.matches == true ) {
		document.getElementById("paragraph3").innerHTML=`<object type="text/html" data="photo/photo.html" style="width: ${width3}; height: ${height3};" ></object>`;
	}
}

// paragraph3 원복

function goto3(event) {
  var noRedirect = 'block3';
  if ((!event.target.classList.contains(noRedirect)) && (mobile.matches == true)) {
   document.getElementById("paragraph3").innerHTML='사진전';
  }
};
document.body.addEventListener('click', goto3);
	
	