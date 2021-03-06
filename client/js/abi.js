var abi = [{
        "inputs": [],
        "name": "batch_getRiskScore",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "tradeID",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "loanAmount",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_poa",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_pod",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_loanDuration",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_mmsi",
                "type": "string"
            }
        ],
        "name": "batchcall_APIs",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "_addressBOL",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_addressFIN",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_addressVSL",
                "type": "address"
            }
        ],
        "name": "setContractAddresses",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "BOL_Reduction",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "FIN_Reduction",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "LoanRequest",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "riskScore",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "VSL_Reduction",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }
]