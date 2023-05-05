export const filteredShoesByTitle = (shoes, value) => {
    return shoes.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
}
