var express = require('express');
var router = express.Router();
const request = require('request');
const soap = require('soap')

router.get('/consulta/:cep', function(req, res,next){

    var cepRecebido = req.params.cep;
    var url = 'https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'

    soap.createClient(url, (err, client) => {
        if (err) {
            console.error(err)
        } else {
            console.log('ok')
            client.consultaCEP({
                cep: cepRecebido,
            }, (err, result) => {
                if (err) { return console.error(err)}
                res.send(result)
            })
        }
    })
})

module.exports = router;
/* const soap = require('soap')


soap.createClient(url, (err, client) => {
    if (err) {
        console.error(err)
    } else {
        console.log('ok')
        client.consultaCEP({
            cep: '60125025'
        }, (err, res) => {
            console.log(res)
        })
    }
})
 */