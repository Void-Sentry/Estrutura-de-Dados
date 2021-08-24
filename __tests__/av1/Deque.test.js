import Deque from '../src/av1/respostas/Deque'

let d

beforeEach(() => {
    d = new Deque(5)
})

test('Instanciação', () => {
    expect(d.size()).toBe(0)
})

test('Inserção e Remoção do Inicio', () => {
    d.inserirInicio(10)
    d.inserirInicio(15)
    expect(d.removerInicio()).toBe(15)
})

test('Conversao para String', () => {
    d.inserirInicio('A')
    d.inserirInicio('B')
    d.inserirInicio('C')
    d.inserirInicio('D')
    d.inserirFim('E')
    expect(d.toString()).toStrictEqual('[D, C, B, A, E]')
})