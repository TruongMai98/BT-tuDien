let arrEng = ["banana", "apple", "orange", "pen", "pencil", "book"];
let arrVie = ["chuối", "táo", "cam", "bút", "bút chì", "sách"];
function searchKey() {

    let keyword = document.getElementById('keyword').value;
    let result = null;

    for (let i = 0; i < arrEng.length; i++) {
        if (arrEng[i] == keyword) {
            result = arrVie[i];
            break;
        } else {
            result = "khong tim thay";
        }
    }

    document.getElementById('result').innerHTML = result;
}