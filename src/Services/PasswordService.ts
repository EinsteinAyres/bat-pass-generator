export default function generatePass(){
    let password: string= ''
    let characters: string = 'Aa@#$123456789abcdefghijFGIJKLMNOP!'
    let passWordLenght = 12
    for(let index =0; index < passWordLenght ; index++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )        
    }

    return password
}