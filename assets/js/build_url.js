function build_url(){
    var url = encodeURI(decodeURI(document.querySelector('#url').value));
    if (url === "" || url.indexOf("http") === -1){
        document.getElementById("b_url").innerHTML=`NO1`;;
    }
    else { 
        url = document.location.href + "api/?url=" + url;
        document.getElementById("b_url").innerHTML=`<a href=${url} target='_blank'>${url}</a>`;
    }
}
