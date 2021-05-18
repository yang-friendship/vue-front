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
    return validator(rex, input)
  },
  mobile(input) {
    const rex = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/;
    return validator(rex, input)
  },
  confirm(target, confirm) {
    if (target !== confirm){
      return false;
    }
    return true;
  },
  username(input) { // TODO REX
    if(input.length > 1 && input.length < 5) {
      return true;
    }
    return false;
  },
  nickname(input) {
    if(input.length > 2 && input.length < 15) {
      return true;
    }
    return false
  }
}

export default form;