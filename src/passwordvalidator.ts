export const isStrongPassword  = (password :string) =>{
    return isLongEnough(password) 
        && hasNumbers(password)
        && hasUppercaseLetters(password)
        && hasLowercaseLetters(password)
        && hasUnderscores(password);
}

const isLongEnough = (password: string)=>{
    const minimumLength = 6;
    return password.length >= minimumLength;
}

const hasNumbers = (password: string)=>{
    return /\d/.test(password);
}

const hasUppercaseLetters = (password: string)=>{
    return /[A-Z]/.test(password);
}

const hasLowercaseLetters = (password: string)=>{
    return /[a-z]/.test(password);
}

const hasUnderscores = (password: string)=>{
    return /_/.test(password);
}