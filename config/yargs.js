const { options, boolean, describe } = require('yargs');

const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe:'El la base de la multiplicacion'                
            })
            .check( ( argv, options ) => {
                if (isNaN( argv.b )) {
                    throw 'La base tiene que ser un numero'
                }
                return true
            })
            .option('l',{
                alias:'list',
                type: 'boolean',
                default: false,
                describe:'Muestra la tabla de multiplicacion'
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                demandOption:true,
                describe:'Hasta que numero se quiere x'
            })
            .argv


module.exports = argv