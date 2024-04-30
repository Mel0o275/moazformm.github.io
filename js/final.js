function darkmode() {
    setTheme("darkmode");
}

function lightmode() {
    setTheme("lightmode");
}

function setTheme(theme) {
    let bodybiology = document.getElementById("biologybody");
    bodybiology.className = theme;
    let content2 = document.getElementById("content2");
    content2.className = theme;
    let profile2 = document.getElementById("profile2");
    profile2.className = theme;
    let rectangle = document.getElementById("rectangle");
    rectangle.className = theme;
    let lectures2 = document.getElementById("lectures2");
    lectures2.className = theme;
    let footer2 = document.getElementById("footer2");
    footer2.className = theme;

    // Save theme to localStorage
    localStorage.setItem("theme", theme);
}

// Load theme from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
    }
});



const emailinput =/^[a-z A-Z 0-9 -_]+@[a-z A-Z 0-9 -_]{2,}$/;
function alertt(){
    if (document.getElementById("textname").value.trim()==""){
        alert("الرجال ادخال الاسم");
        
    }

    else if (document.getElementById("textname2").value.trim()==""){
        alert("الرجال ادخال اسم العائلة");
        
    }

    else if (document.getElementById("tel1").value.trim()==""){
        alert("الرجال ادخال رقم الهاتف");
        
    }

    else if (document.getElementById("tel2").value.trim()==""){
        alert("الرجال ادخال رقم هاتف ولي الأمر");
        
    }

    else if (!emailinput.test(email.value)){
        alert("الرجاء ادخال البريد الالكتروني بشكل صحيح ");
    }

    else{alert("تم الحجز بنجاح");}
}


const wrapper = document.querySelector(".wrapper"),
selectbtn = wrapper.querySelector(".select-btn"),
searchinp = wrapper.querySelector("input"),
Options = wrapper.querySelector(".search-options");
/*       array of subjects     */
let subjects = ["اللغة العربية","اللغة الانجليزية","الاحياء","الفيزياء","الكيمياء","الجغرافيا","التاريخ","الفلسفة",
"علم النفس و الاجتماع","اللغة الفرنسية","اللغة الايطالية","اللغة الالمانية","اللغة الفرنسية","الرياضيات البحتة",
"الرياضيات التطبيقية","biology","physics","chemistry","geography","applied math","general math","english language","arabic language"]

function addsubject(selectedsubject){
    Options.innerHTML = "";
    subjects.forEach(subject => {
        //if selected subject and subject value is same, then add selected class
        let isselected = subject == selectedsubject ? "selected" : "";
        let li = ` <li onclick="updateName(this)" class="${isselected}"> ${subject} </li> `;
        Options.insertAdjacentHTML("beforeend", li);
    });
}

addsubject();

function updateName(selectedLi){
    searchinp.value = "";
    addsubject();
    wrapper.classList.remove("active");
    selectbtn.firstElementChild.innerText = selectedLi.innerText;
}

searchinp.addEventListener("keyup", () => {
    let arr = []; 
    let searchedval = searchinp.value;
    arr = subjects.filter(data => {
        return data.toLocaleLowerCase().startsWith(searchedval);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    Options.innerHTML = arr ? arr : `<p>عفوا! المادة غير موجودة</p>`;
});

selectbtn.addEventListener("click",() => {
    wrapper.classList.toggle("active");
});


/*      local storage */

