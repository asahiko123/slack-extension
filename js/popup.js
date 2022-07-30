window.onload = () =>{
    const message = document.getElementById('message')
    const submit  = document.getElementById('submit')


    chrome.storage.sync.get('selected_message',items => {
        message.value = items.selected_message
    })


    submit.onclick = () => {
        console.log(message.value)
        chrome.storage.sync.set(
            {

            "selected_message" : message.value

            },() => {
            console.log('saved')
            message.value = 'saved'
            setTimeout(() => message.value = '',750)
        })
    }

    

}
