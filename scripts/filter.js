function filter_check() {
    var checkBox1 = document.getElementById("mob-check");
    var checkBox2 = document.getElementById("aud-check");
    var checkBox3 = document.getElementById("oth-check");
    var mobile = document.getElementsByClassName("mobile");
    var audio = document.getElementsByClassName("audio");
    var others = document.getElementsByClassName("other");
  
    if (checkBox1.checked == true){
      mobile.style.display = "block";
    } else {
      mobile.style.display = "none";
    }
  }