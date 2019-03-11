/* global describe, test, expect */
const { readdirSync } = require('fs')
const Command = require('./src/structures/Command')
const chariot = require('chariot.js')
const Lotte = require('./src/Lotte')

let commands = []
let cmdNames = readdirSync('./src/commands')
cmdNames.forEach(name => commands.push(require(`./src/commands/${name}`)))

describe('Teste de comandos', () => {
  test('Todos comandos estendem a classe Command', () => {
    commands.forEach((cmd) => {
      expect(cmd instanceof Command).toBe(true)
    })
  })
  test('Todos comandos tem o método run', () => {
    commands.forEach((cmd) => {
      expect(typeof (cmd.run) === 'function').toBe(true)
    })
  })
})
describe('Test do core da Lotte', () => {
  test('A classe Lotte estende o Client do chariot.js e os comandos não tem erros', () => {
    expect(new Lotte('abc') instanceof chariot.Client).toBe(true)
  })
})
