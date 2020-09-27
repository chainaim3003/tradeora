var web3 = new Web3(Web3.givenProvider);
var contractInstance;
var connectedWal_address;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts) {
        //declare the contract address

        //Network: Kovan

        //BOL Address = 0x8aa6770525aC4f3D5285773C5E8C0c38795d4314
        //Finance Address = 0x1da394a1be2a66F5BBe8F894755Af7d7240A29D0
        //Vessels = 0x1dc95B3698d75050815995FD256A206c7C52ae75

        var contractAddress = "0x38aa7733681A9b4B4743f100E6B837397129eB59";
        //connect to the contract pass in the abi(methods from contract declared in HTML head) contract address and the account that deployed
        connectedWal_address = accounts[0];
        //the contract ie. the contract owner now.
        contractInstance = new web3.eth.Contract(abi, contractAddress, { from: accounts[0] });
        //uncomment the below for development and testing purposes.
        console.log(contractInstance);
        //display the connected wallet's address
        $("#connectedWal_address").text(connectedWal_address)
    });

    //prescription number button
    $("#batchcall_APIs").click(batchcall_APIs)
    $("#batch_getRiskScore").click(batch_getRiskScore)


});

function batchcall_APIs() {
    var businessName = $("#inputTradeName").val();
    var loaninput = $("#inputLoanAmount").val();
    var POL = $("#inputPOL").val();
    var POD = $("#inputPOD").val();
    var MMSI = $("#inputMMSI").val();
    var loandays = $("#inputDays").val();
    var loanAmount = String(loaninput);
    var loanDuration = String(loandays)

    contractInstance.methods.batchcall_APIs(businessName, loanAmount, POL, POD, loanDuration, MMSI).send()

    console.log(businessName, loanAmount, POL, POD, loanDuration, MMSI)
}

function batch_getRiskScore() {
    $("#output").text("");
    contractInstance.methods.batch_getRiskScore().send();
    document.querySelector("#output").innerHTML += '<div class="col-4"></div>' +
        '<div class="col-4">' +
        '<div class="card bg-dark">' +
        '<div class="card-body text-left">' + '<divclass="h4">Loading....</div>';
    setTimeout(() => {

        contractInstance.methods.riskScore().call().then(function(res) {
            $("#output").text("");
            if (res >= 80 || res < 20) {
                document.querySelector("#output").innerHTML += '<div class="col-4"></div>' +
                    '<div class="col-4">' +
                    '<div class="card bg-dark">' +
                    '<div class="card-body text-left">' + '<h3>Exports First Insurer </h3>' +
                    '<span class="h4">Insurance provided: <span class="text-danger h5">Rejected</span> </span>'
            } else if (res >= 60) {
                document.querySelector("#output").innerHTML += '<div class="col-4"></div>' +
                    '<div class="col-4">' +
                    '<div class="card bg-dark">' +
                    '<div class="card-body text-left">' +
                    '<h3>Exports First Insurer </h3> <span class="h4">Insurance provided: <span class="text-success h5">Accepted</span> </span>' +
                    '<span class="h4">Insurnace Premium (% of Loan Amount) : <span class="text-danger h5">1.5%</span> </span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="col-4"></div>'

            } else if (res >= 40) {
                document.querySelector("#output").innerHTML += '<div class="col-4"></div>' +
                    '<div class="col-4">' +
                    '<div class="card bg-dark">' +
                    '<div class="card-body text-left">' +
                    '<h3>Exports First Insurer </h3> <span class="h4">Insurance provided: <span class="text-success h5">Accepted</span> </span>' +
                    '<span class="h4">Insurnace Premium (% of Loan Amount) : <span class="text-danger h5">1%</span> </span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="col-4"></div>'

            } else if (res >= 20) {
                document.querySelector("#output").innerHTML += '<div class="col-4"></div>' +
                    '<div class="col-4">' +
                    '<div class="card bg-dark">' +
                    '<div class="card-body text-left">' +
                    '<h3>Exports First Insurer </h3> <span class="h4">Insurance provided: <span class="text-success h5">Accepted</span> </span>' +
                    '<span class="h4">Insurnace Premium (% of Loan Amount) : <span class="text-danger h5">0.5%</span> </span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="col-4"></div>'

            }
        })

    }, 25000);


}