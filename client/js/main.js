var web3 = new Web3(Web3.givenProvider);
var contractInstance;
var connectedWal_address;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts) {
        //declare the contract address
        var contractAddress = "0x56c88fF879CA90D1419d8CCa2F9AA2237E83b9F8";
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
    var loanAmount = String(loaninput);

    contractInstance.methods.batchcall_APIs(businessName, loanAmount).send()

    console.log(businessName + loanAmount)
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
            document.querySelector("#output").innerHTML += '<div class="col-4"></div>' +
                '<div class="col-4">' +
                '<div class="card bg-dark">' +
                '<div class="card-body text-left">' +
                '<h3>Exports First Insurer </h3>' + res + '<span class="h4">Insurance provided                   : <span class="text-success h5">Yes</span> </span>' +
                '<span class="h4">Insurnace Premium (% of Loan Amount) : <span class="text-danger h5">0.5</span> </span>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-4"></div>'
        })

    }, 25000);


}