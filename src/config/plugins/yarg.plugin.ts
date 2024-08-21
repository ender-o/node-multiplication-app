import yargs, { describe } from 'yargs'
import { hideBin } from 'yargs/helpers'




export const yarg = yargs(hideBin(process.argv)).
    option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'multipliaction table base'
    }).option('l', {
        alias: 'limit',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'multipliaction table limit',

    }).option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'show multipliaction table',
    }).check((argv, options) => {

        if (argv.b < 1) throw Error('Erro: base must be greater than 0')

        return true
    }).
    option('n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'File name'
    }).
    option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination'
    }).
    parseSync()