import Lista from '../src/L3_Q4-Q5'

let l

beforeEach(() => {
    
    l = new Lista()

})

test('Instanciação', () =>{

    expect(l.length()).toBe(0)
    expect(l.isEmpty()).toBe(true)

})

test('Adicionar elementos em posições diferentes', () => {

    l.add(1)
    l.add(2)
    l.add(3)
    l.add(4)

    expect(l.length()).toBe(4)
    expect(l.toString()).toBe('4 -> 3 -> 2 -> 1')
    
    l.append(5)
    expect(l.toString()).toBe('4 -> 3 -> 2 -> 1 -> 5')

    l.removeFirst()
    expect(l.toString()).toBe('3 -> 2 -> 1 -> 5')

    l.removeLast()
    expect(l.toString()).toBe('3 -> 2 -> 1')
    expect(l.length()).toBe(3)

    l.addAt(1, 6)
    expect(l.toString()).toBe('3 -> 6 -> 2 -> 1')
    expect(l.search(5)).toBe(false)
	expect(l.search(6)).toBe(true)

    l.addAt(3, 7);
	expect(l.toString()).toBe('3 -> 6 -> 2 -> 7 -> 1')

    l.addAt(0, 2);
	expect(l.toString()).toBe('2 -> 3 -> 6 -> 2 -> 7 -> 1')

})

test('Inverter elementos', () => {

    l.add(1)
    l.add(2)
    l.add(3)

    l.inverterElementos()
    expect(l.toString()).toBe('1 -> 2 -> 3')

})

test('Randomizador', () => {

    l.add(1)
    l.add(2)
    l.add(3)
    l.add(4)
    l.add(5)

    let nl = l.toString()

    

    l.randomizer()
    expect(l.toString()).not.toBe(nl)

})