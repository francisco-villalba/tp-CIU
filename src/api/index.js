const baseURL = 'http://localhost:5000'

export const getProductos = async() => {
    const response = await fetch(`${baseURL}/productos`)
    const data = await response.json()

    return data
}

export const getProducto = async(id) => {
    const response = await fetch(`${baseURL}/productos/${id}`)
    const data = await response.json()

    return data
}

export const getFabricantesProducto = async(id) => {
    const response = await fetch(`${baseURL}/productos/${id}/fabricantes`)
    const data = await response.json()

    return data
}

export const getComponentesProducto = async(id) => {
    const response = await fetch(`${baseURL}/productos/${id}/componentes`)
    const data = await response.json()
    
    return data
}

export const getFabricantes = async() => {
    const response = await fetch(`${baseURL}/fabricantes`)
    const data = await response.json()

    return data
}

export const getComponentes = async() => {
    const response = await fetch(`${baseURL}/componentes`)
    const data = await response.json()

    return data
}

export const getFabricante = async(id) => {
    const response = await fetch(`${baseURL}/fabricantes/${id}`)
    const data = await response.json()

    return data
}

export const getComponente = async(id) => {
    const response = await fetch(`${baseURL}/componentes/${id}`)
    const data = await response.json()

    return data
}


