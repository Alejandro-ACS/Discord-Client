chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {

    function Loggin () {

        var opcion = confirm("¿Quieres iniciar sesión con el token?");
        
        //var tokken;
        //tokken = response.status;

        if (opcion == true){

            var tokken = prompt("Introduce el token");
            function login(token) {
                setInterval(() => {
                document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
                }, 50);
                setTimeout(() => {
                        location.reload();
                    }, 2500);
                }
            login(tokken);

        } else {

            console.error("Alejandro ha estado aquí =)");

        }

    }

    if(message.txt == "true") {

        Loggin();

    }

}