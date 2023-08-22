//classe do usuário
class User {
    constructor(name, email, birthdate, address, phone, cpf) {
        this.name = name;
        this.email = email;
        this.birthdate = birthdate.split("-").reverse().join("/");
        this.address = address;
        this.phone = phone;
        this.cpf = cpf;
        this.age = this.calculateAge();
        this.zodiacSign = this.getZodiacSign();
        this.isPossibleClient = this.isPossibleClient();
    }
}

//array da lista de usuários
class ListUser {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }
}

const listUser = new ListUser();


    isUserAlreadyRegistered(cpf) {
}

    countUsers() {
        return this.users.length;
    }

    getAllUsers() {
        return this.users;
    }



function createUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const birthdate = document.getElementById("birthdate").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const cpf = document.getElementById("cpf").value;


    const user = new User(name, email, birthdate, address, phone, cpf);

    listUser.add(user);

}


function calculateAge(birthdate) {
    const birthDate = new Date(this.birthdate);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const m
}

// função para ver se é um possível cliente
function isPossibleClient() {
    const age = userAge();
    if (age < 18 || age > 31) {
        return "Não é um possível cliente!!";
    }
    if (age > 18 && age <= 31) {
        return "É um possível cliente!!";
    }
}



function addUser(user) {
    if (isAnyImputEmpty() == true){
        sendErrorMsg("Preencha todos os campos obrigatórios!");
    } 
    else if (valida_cpf(user.cpf) == false){
        sendErrorMsg("CPF inválido! Digite um cpf válido!")
    } 
    else if (isCpfAlreadyRegistred(user.cpf) == false){
        sendErrorMsg("Esse CPF já está cadastrado em nosso sistema!")
    } else{
        sendSucessMsg("Usuário adicionado na lista de espera!")
        clearInputs();
        user.push(user);
    }


    ListUser.addUser(user);

    function showRegister() {
        document.getElementById("sub-div").classList.add("hidden");
        document.getElementById("title-page").classList.remove("hidden");
        document.getElementById("main-div").classList.remove("hidden");
        console.log("Passou pela funcao showRegister()");
    }

    // método para cpf e telfone
    function formatedCPF(cpf) {
        console.log("Passou pela funcao formatedCPF()");

        let cpfArray = cpf.split("");
        let cpfFormated = cpfArray[0] + cpfArray[1] + cpfArray[2]
            + "." + cpfArray[3] + cpfArray[4] + cpfArray[5] + "."
            + cpfArray[6] + cpfArray[7] + cpfArray[8] + "-" + cpfArray[9] + cpfArray[10];
        return cpfFormated;
    }

    function formatedCellphone(cellphone) {
        console.log("Passou pela funcao formatedCellphone()");

        let cellphoneArray = cellphone.split("");
        let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
            + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
            + cellphoneArray[5] + cellphoneArray[6] + "-"
            + cellphoneArray[7] + cellphoneArray[8]
            + cellphoneArray[9] + cellphoneArray[10];
        return cellphoneFormated;
    }

    // ver se o cpf é válido
    function valida_cpf(cpf) {
        console.log("Passou pela funcao valida_cpf()");

        var numeros, digitos, soma, i, resultado, digitos_iguais;
        digitos_iguais = 1;
        if (cpf.length < 11)
            return false;
        for (i = 0; i < cpf.length - 1; i++)
            if (cpf.charAt(i) != cpf.charAt(i + 1)) {
                digitos_iguais = 0;
                break;
            }
        if (!digitos_iguais) {
            numeros = cpf.substring(0, 9);
            digitos = cpf.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                return false;
            numeros = cpf.substring(0, 10);
            soma = 0;
            for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                return false;
            return true;
        }
        else
            return false;
    }

    // enviar mensagem de erro
    function sendErrorMsg(msg) {
        console.log("Passou pela funcao sendErrorMsg()");

        document.getElementById("error-msg").innerHTML = msg;
        document.getElementById("error-msg").classList.remove("hidden");
        setTimeout(function () {
            document.getElementById("error-msg").classList.add("hidden");
        }, 4000);

    }

    // enviar mensagem de sucesso
    function sendSucessMsg(msg) {
        console.log("Passou pela funcao sendSucessMsg()");

        document.getElementById("sucess-msg").innerHTML = msg;
        document.getElementById("sucess-msg").classList.remove("hidden");
        setTimeout(function () {
            document.getElementById("sucess-msg").classList.add("hidden");
        }, 4000);
    }

    // limpar os campos
    function clearInputs() {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("birthdate").value = "";
        document.getElementById("address").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("cpf").value = "";
    }
}
