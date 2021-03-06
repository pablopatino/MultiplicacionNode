const fs = require('fs')
const colors = require('colors')

const crearArchivo = async( base = 5, listar, hasta ) => {

    try {
        
        console.log("###################".red)
        console.log(`##### MULTI ${ base } #######`.red)
        console.log("###################".red)
    
        let salida = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida +=  `${ base } x ${ i } = ${ base * i }\n`
        }
    
       if ( listar === true ) {
           console.log(salida)
       }
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida )
    
        return `tabla-${base}.txt`.yellow
        
    } catch (error) {
        throw error
    }


}

module.exports = {
    crearArchivo
}