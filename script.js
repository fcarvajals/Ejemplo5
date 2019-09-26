var request=new XMLHttpRequest();
request.open('GET','https://jsonplaceholder.typicode.com/users', true);
request.onload=function(){
    var request=JSON.parse(this.response);
    for(var i=0;i<request.length;i++){
        console.log( ' Nombre: '+request[i].name+'\n Correo: '+request[i].email+'\n Ciudad: '+request[i].address.city+'\n Latitud: '+request[i].address.geo.lat+'\n Longitud: '+request[i].address.geo.lon);
        console.log('\n');
    }
}
request.send();



