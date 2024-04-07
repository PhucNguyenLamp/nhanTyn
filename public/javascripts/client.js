const socket = io();

const myform = document.querySelector('#myform')
myform.addEventListener('submit', e => {
    e.preventDefault()
    const username = myform.querySelector('#username').value
    const message = myform.querySelector('#input').value
    const data = {
        username: username,
        message: message,
        date: new Date(),
    }
    
    const newMessage = document.querySelector('dl')
    const newMsg = document.createElement('dd')
    const newUsn = document.createElement('dt')
    newUsn.textContent = data.username + ' - ' + data.date.toISOString().slice(11, 16)
    newMsg.textContent = data.message
    newMessage.prepend(newMsg)
    newMessage.prepend(newUsn)
    console.log("test")
    socket.emit('chat-data', data)
    // console.log(message)
    myform.querySelector('#username').value = ''
    myform.querySelector('#input').value = ''
}) 
socket.on('connect', () => {
    console.log('connected')
})
socket.on('chat-data', data => {
    const newMessage = document.querySelector('dl')
    const newMsg = document.createElement('dd')
    const newUsn = document.createElement('dt')
    newUsn.textContent = data.username + ' - ' + data.date.slice(11, 16)
    newMsg.textContent = data.message
    newMessage.prepend(newMsg)
    newMessage.prepend(newUsn)

})