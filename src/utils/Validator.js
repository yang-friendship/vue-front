const validator = (rex, input) => {
  if (!rex.test(input)) {
    return false;
  }
  return true;
}

const form = {
  email(input) {
    const rex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return validator(rex, input)
  },
  password(input) {
    const rex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    console.log(input);
    return validator(rex, input)
  },
  confirm(target, confirm) {
    if (target !== confirm){
      return false;
    }
    return true;
  }
}

export default form;