async function asyncGet(input) {
    const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            q: input,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    console.log(response);
    return response;
}

function addGif(res){
    console.log(res);
    const responseLength = res.data.length;
    console.log(responseLength)
    const randomNumber = Math.floor(Math.random() * (responseLength));
    console.log(randomNumber);
    const dataProperty = res.data[randomNumber];
    console.log(dataProperty);
    console.log(dataProperty.url)
   
    const $div2 = $('.div2');
   
    const $img = $('<img>', {
        src : dataProperty.images.original.url,
    })
    
    $div2.append($img);
    $inputField = '';
}

const $button = $('button');
const removeButton = $("#removeButton");


$button.on('click', async function(event) {
    console.log(event);
    let $inputField = $('#inputField');
    let $inputValue = $inputField.val();
    console.log($inputValue)
    $inputField.val("");
    let result = await asyncGet($inputValue);
    console.log(result);
    console.log(result.data)
    // addGif(result.data);
    addGif(result.data);

})

removeButton.on('click', function() {
    div2 = $('.div2');
    div2.empty();
})
  

console.log("Let's get this party started!");

